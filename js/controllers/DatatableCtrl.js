angular.module('ira').controller('DatatableCtrl', function ($rootScope, $scope, DTOptionsBuilder, DTColumnBuilder, DataService, $stateParams, StoreService) {
    var dt = this;
    var searchText = $stateParams.searchText;
    if ($rootScope.serverMode) {
        
        $scope.pageData = {
            total: 0,
        };

        var orderNames = ["name", "services__status", "village", "district__name", "district__region__name", "", "", "contact_name", "contact_phones", "contact_emails", "" ];
        // this function used to get all leads
        var getData = function (sSource, aoData, fnCallback, oSettings) {
            var draw = aoData[0].value;
            var columns = aoData[1].value;
            var order = aoData[2].value[0].dir == "asc" ? "-" + orderNames[aoData[2].value[0].column] : orderNames[aoData[2].value[0].column];
            var start = aoData[3].value;
            var length = aoData[4].value;
            var search = $stateParams.searchText ? $stateParams.searchText : aoData[5].value.value;
            var params = {
                orderby : order,
                text: search,
                start: start,
                limit: length
            }
            DataService.getFacilityData(params).then(function (response) {
                var records = {
                    'draw': 0,
                    'recordsTotal': 0,
                    'recordsFiltered': 0,
                    'data': []
                };
                if (response.data) {
                    records = {
                        'draw': draw,
                        'recordsFiltered': response.data.data.facilitiesCount,
                        'recordsTotal': response.data.data.facilitiesCount,
                        'data': response.data.data.facilitiesPaged
                    };
                }
                $scope.pageData.total =  response.data.data.facilitiesCount;
                fnCallback(records);
            });
        }

        function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
            $compile(nRow)($scope);
        }


        //STYLE TABLES
        dt.options = DTOptionsBuilder.newOptions()
            .withFnServerData(getData) // method name server call
            .withDataProp('data')// parameter name of list use in getLeads Fuction
            .withOption('processing', true) // required
            .withOption('serverSide', true)// required
            .withOption('paging', true)// required
            .withDOM(`<"row"<"col-sm-6"i><"col-sm-6"f>>
        <"table-responsive"tr><"row"<"col-sm-6"l><"col-sm-6"p>>`)
            .withBootstrap()
            .withLanguage({
                paginate: {
                    previous: "&laquo;",
                    next: "&raquo;",
                },
                search: "_INPUT_",
                searchPlaceholder: "Search…"
            })
            .withPaginationType('full_numbers')
            .withDisplayLength(15)
            .withOption('lengthChange', false)
            .withOption("responsive", true)
        dt.columns = [
            DTColumnBuilder.newColumn('name').withTitle('Name'),
            DTColumnBuilder.newColumn("services[].status").withTitle("Status").notSortable().renderWith(function (data, type, full, meta) {
                return data[0] == "F" ? '<span class="label label-primary">Functional</span>' : '<span class="label label-danger">Non Functional</span>';
            }),


            DTColumnBuilder.newColumn("village").withTitle("Village"),
            DTColumnBuilder.newColumn("district.name").withTitle("District"),
            DTColumnBuilder.newColumn("district.region.name").withTitle("Region"),
            DTColumnBuilder.newColumn("services[,].serviceType").withTitle("Facility Types").notSortable().renderWith(function (data) {
                var types = data.split(',');
                var result = "";
                if (types.length > 1) {
                    console.log(types.length);
                }
                for (var i = 0; i < types.length; i++) {
                    if (StoreService.facilityTypes[types[i]]) 
                        result += StoreService.facilityTypes[types[i]].name;
                    else 
                        result += types[i];
                    result += ((i + 1) == types.length ? "" : ", ");
                }
                return result;
            }),

            DTColumnBuilder.newColumn("services[, ].controllingAgency.name").withTitle("Controlling Agency").notSortable().renderWith(function (data) {
                return data;
            }),
            DTColumnBuilder.newColumn('contactName').withTitle('Contact Name'),
            DTColumnBuilder.newColumn("contactPhones[, ]").withTitle("Phone"),
            DTColumnBuilder.newColumn("contactEmails[, ]").withTitle("Email"),
            DTColumnBuilder.newColumn("cluster.name").withTitle("Cluster").notSortable()
            
        ];

    } else {
        // Mock
        dt.options = DTOptionsBuilder
            .fromSource("data/facilitiesData.json")
            .withDOM(`<"row"<"col-sm-6"i><"col-sm-6"f>>
        <"table-responsive"tr><"row"<"col-sm-6"l><"col-sm-6"p>>`)
            .withBootstrap()
            .withLanguage({
                paginate: {
                    previous: "&laquo;",
                    next: "&raquo;",
                },
                search: "_INPUT_",
                searchPlaceholder: "Search…"
            })
            .withPaginationType('full_numbers')
            .withDisplayLength(15)
            .withOption('lengthChange', false)
            .withOption("responsive", true)

        dt.columns = [
            DTColumnBuilder.newColumn("Name").withTitle("Name"),
            DTColumnBuilder.newColumn("Status").withTitle("Status").renderWith(function (data, type, full, meta) {
                return data == "Functional" ? '<span class="label label-primary">' + data + '</span>' : '<span class="label label-danger">' + data + '</span>';
            }),
            DTColumnBuilder.newColumn("Village").withTitle("Village"),
            DTColumnBuilder.newColumn("District").withTitle("District"),
            DTColumnBuilder.newColumn("Region").withTitle("Region"),
            DTColumnBuilder.newColumn("FacilityType").withTitle("Facility Type"),
            DTColumnBuilder.newColumn("ControllingAgency").withTitle("Controlling Agency"),
            DTColumnBuilder.newColumn("ContactName").withTitle("Contact Name"),
            DTColumnBuilder.newColumn("Phone").withTitle("Phone"),
            DTColumnBuilder.newColumn("Email").withTitle("Email").renderWith(function (data, type, full, meta) {
                return data != "N/A" ? '<a href="mailto:' + data + '">' + data + '</a>' : data;
            }),
            DTColumnBuilder.newColumn("Cluster").withTitle("Cluster")
        ];
    }

});