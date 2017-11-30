angular.module('sara')
    .constant('XlsxPopulate', window.XlsxPopulate).run(function ($rootScope) { $rootScope.XlsxPopulate = window.XlsxPopulate; })
    .controller('DatatableCtrl', function ($q, $stateParams, $timeout, $uibModal, $rootScope, $scope, $compile, DTOptionsBuilder, DTColumnBuilder, ServiceData, DataFactory) {

        var dTable = this;

        $scope.disease = $stateParams.disease ? $stateParams.disease : "HIV";
        $scope.type = $stateParams.type ? $stateParams.type : "SARA";
        $scope.country = $stateParams.country ? $stateParams.country : "Kenya";
        $scope.year = $stateParams.year ? $stateParams.year : "2010";

        $scope.regions = [];
        $scope.callBackFn = null;
        $scope.currentFile = null;
        $scope.currentTemplate = null;

        $scope.fileChosen = false;

        var fileInput = document.getElementById('fileInput');
        var Promise = XlsxPopulate.Promise;

        $scope.getData = function (sSource, aoData, fnCallback, oSettings) {
            var draw = aoData[0].value;
            var params = {
                disease: $scope.disease,
                type: $scope.type,
                country: $scope.country,
                year: $scope.year
            }
            DataFactory.getRegionsData(params).then(function (response) {
                var result = [];
                var regionsData = response.data.data.regions;
                $scope.regions = regionsData;
                $scope.callBackFn = fnCallback;
                records = {
                    'data': $scope.regions
                };
                fnCallback(records);
            });
        }

        $scope.edit = function (data) {

            var itemToEdit = data;
            var formFields = $scope.columns;

            var modalInstance = $uibModal.open({
                animation: false,
                ariaLabelledBy: "modal-title-top",
                ariaDescribedBy: "modal-body-top",
                templateUrl: "views/editPopup.html",
                size: "md",
                controller: function ($scope, $uibModalInstance) {
                    $scope.name = itemToEdit.name;
                    $scope.data = itemToEdit;
                    var paramsArray = [];
                    for (var index = 0; index < formFields.length; index++) {
                        paramsArray.push({ param: formFields[index].name, code: formFields[index].code, value: itemToEdit.indexes[index].value});
                    }
                    $scope.params = paramsArray;

                    $scope.save= function () {
                        for (var i = 0; i < $scope.data.indexes.length; i++) {
                            $scope.data.indexes[i] = {code: formFields[i].code, value: $scope.params[i].value};
                        }

                        $uibModalInstance.close($scope.data);
                    };
                    
                    $scope.close = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (data) {
                refreshTable();
            }, function () {
                console.log('Modal dismissed');
            });
        };

        

        $scope.populateTable = function () {
            return populate()
                .then(function (blob) {

                })
                .catch(function (err) {
                    alert(err.message || err);
                    throw err;
                });
        }

        $scope.generateBlob = function () {
            if (!$scope.currentFile) {
               return DataFactory.getTemplate($scope.disease).then(
                    function (response) { 
                        $scope.currentTemplate = response.data;
                        return $scope.createObject();
                        //XlsxPopulate.fromDataAsync(response.data)
                    });
            } else {
                return $scope.createObject();
            }
           
        }

        $scope.createObject = function() {
            return generate()
            .then(function (blob) {
                if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(blob, $scope.currentFile.name);
                } else {
                    var url = window.URL.createObjectURL(blob);
                    var a = document.createElement("a");
                    document.body.appendChild(a);
                    a.href = url;
                    a.download = $scope.country + "_" + $scope.disease + "_" + $scope.type  + "_" + $scope.year + ".xlsx";
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                }
            })
            .catch(function (err) {
                alert(err.message || err);
                throw err;
            });
        }

        $scope.sendData = function () {
            var postData = {
                data:{
                    "year": $scope.year,
                    "nameDisease": $scope.disease,
                    "nameHFAType": $scope.type,
                    "nameCountry": $scope.country,
                    "regions": $scope.regions
                }
            };
            DataFactory.sendRegionsData(postData).then(function (response) {
                console.log(response);
            });
        }

        

        initTable();

        function initTable() {
            $scope.headers = ServiceData.complexHeaders[$scope.disease];
            
            if ($scope.disease == 'HIV') {
                $scope.headersL0 = ServiceData.complexHeaders["HIVL0"];
            }

            $scope.columns = ServiceData.diseaseIndicatorsDirectory[$scope.disease];
            dTable.columns = [
                DTColumnBuilder.newColumn("name").notSortable()
            ];
            for (var index = 0; index < $scope.columns.length; index++) {
                var column = DTColumnBuilder.newColumn("indexes." + index + ".value").notSortable();
                dTable.columns.push(column);
            }

            var rowCallback = function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                $('td', nRow).unbind('click');
                $('td', nRow).bind('click', function () {
                    $scope.$apply(function () {
                        //console.log('Editing ' + aData);
                        $scope.edit(aData);
                    });
                });
                return nRow;
            };

            dTable.options = DTOptionsBuilder.newOptions()
                .withFnServerData($scope.getData) // method name server call
                .withOption('serverSide', true)// required
                .withDOM(`<"row"<"col-sm-6"><"col-sm-6">><"table-responsive"tr><"row"<"col-sm-6"l><"col-sm-6"p>>`)
                .withBootstrap()
                .withOption('scrollX', '100%')
                .withScroller()
                
                .withOption('sortable', false)
                .withOption('bDeferRender', true)
                .withOption('scrollY', $scope.disease == 'HIV' ? 'calc(100vh - 500px)' : 'calc(100vh - 383px)')
                .withOption('rowCallback', rowCallback)
        }

        function refreshTable() {
            records = {
                'data': $scope.regions
            };
            $scope.callBackFn(records);
        }

        function populate(type) {
            
            return getWorkbook()
                .then(function (workbook) {
                    const range = workbook.sheet(0).range("A5:BF51");
                    const value = workbook.sheet(0).cell("A1").value();

                    var cells = range.cells();
                    var paramsArray = [];
                    for (let i = 0; i < cells.length; i++) {
                        var obj = { "name": range.cell(i, 0).value() , "indexes":[]};
                        for (var j = 0; j < $scope.columns.length; j++) {
                            if ($scope.columns[j]) {
                                obj.indexes[j] = {"code":$scope.columns[j].code,"value" : range.cell(i, j + 1).value() ? range.cell(i, j + 1).value() : ""}
                            }
                        }
                        paramsArray.push(obj);
                    }

                    $scope.regions = paramsArray;
                    refreshTable();
                    return workbook.outputAsync(type);
                })
        }

        function getWorkbook() {
            $scope.currentFile = fileInput.files[0];
            if ($scope.currentFile)
                return XlsxPopulate.fromDataAsync($scope.currentFile);
            else if ($scope.currentTemplate)
                return XlsxPopulate.fromDataAsync($scope.currentTemplate);
            else
                return Promise.reject("You must select a file.");
        }

        function generate(type) {
            return getWorkbook()
                .then(function (workbook) {
                    const range = $scope.disease == "HIV" ? workbook.sheet(0).range("A6:BF51") : workbook.sheet(0).range("A5:BF51");
                    workbook.sheet(0).cell("A1").value($scope.country);
                    workbook.sheet(0).cell("F1").value($scope.type);
                    workbook.sheet(0).cell("K1").value($scope.disease);
                    workbook.sheet(0).cell("P1").value($scope.year);

                    var cells = range.cells();
                    for (var i = 0; i < $scope.regions.length; i++) {
                        range.cell(i, 0).value($scope.regions[i].name);
                        for (var j = 0; j < $scope.columns.length; j++) {
                            range.cell(i, j + 1).value($scope.regions[i].indexes[j].value);
                        }
                    }

                   // workbook.sheet(0).cell("A1").value("This was created in the browser!").style("fontColor", "ff0000");
                    return workbook.outputAsync(type);
                })
        }

        $scope.uploadChange = function () {
            $scope.populateTable();
            $scope.fileChosen = true;
        }
      
    });
