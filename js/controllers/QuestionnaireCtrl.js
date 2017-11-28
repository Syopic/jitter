
angular.module('sara')
    .constant('XlsxPopulate', window.XlsxPopulate).run(function ($rootScope) { $rootScope.XlsxPopulate = window.XlsxPopulate; })
    .controller('QuestionnaireCtrl', function ($q, $stateParams, $timeout, HIV, TB, Malaria, $uibModal, $rootScope, $scope, $compile, DTOptionsBuilder, DTColumnBuilder, ServiceData, DataFactory) {

        var dTable = this;
        $scope.disease = $stateParams.disease ? $stateParams.disease : "HIV";
        $scope.regions = [];
        $scope.draw = null;
        $scope.callBackFn = null;
        $scope.currentFile = null;

        $scope.fileChosen = false;

        var fileInput = document.getElementById('fileInput');
        var Promise = XlsxPopulate.Promise;

        $scope.getData = function (sSource, aoData, fnCallback, oSettings) {
            var draw = aoData[0].value;
            if ($scope.callBackFn) {
                refreshTable();
            } else {
                DataFactory.getRegionsData($scope.disease).then(function (response) {
                    var result = [];
                    var regionsData = response.data.data.regions;
                    for (var key in regionsData) {
                        var obj = { name: key };
                        var codes = regionsData[key];
                        for (var i = 0; i < codes.length; i++) {
                            for (prop in codes[i]) {
                                obj[prop] = codes[i][prop] ? codes[i][prop] : Math.round(Math.random() * 1000);
                            }
                        }
                        result.push(obj);
                    }
                    $scope.regions = result;
                    $scope.draw = draw;
                    $scope.callBackFn = fnCallback;
                    records = {
                        'draw': draw,
                        'recordsTotal': $scope.regions.length,
                        'data': $scope.regions
                    };
                    fnCallback(records);
                    document.getElementById('datatable_info').style.display = 'none';
                });
        }
    }

        $scope.edit = function (item) {

            var itemToEdit = item;
            var formFields = $scope.columns;

            $uibModal.open({
                animation: false,
                ariaLabelledBy: "modal-title-top",
                ariaDescribedBy: "modal-body-top",
                templateUrl: "views/editPopup.html",
                size: "md",
                controller: function ($scope) {
                    var paramsArray = [];
                    for (var index = 0; index < formFields.length; index++) {
                        paramsArray.push({ param: formFields[index].name, value: 45 });
                    }
                    $scope.params = paramsArray;
                }
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
            return generate()
                .then(function (blob) {
                    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                        window.navigator.msSaveOrOpenBlob(blob, $scope.currentFile.name);
                    } else {
                        var url = window.URL.createObjectURL(blob);
                        var a = document.createElement("a");
                        document.body.appendChild(a);
                        a.href = url;
                        a.download = $scope.currentFile.name;
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

        initTable();

        function initTable() {
            $scope.headers = ServiceData.complexHeaders[$scope.disease];

            if ($scope.disease == 'HIV') {
                $scope.headersL0 = ServiceData.complexHeaders["HIVL0"];
            }

            $scope.columns = ServiceData.diseaseIndicatorsDirectory[$scope.disease];
            dTable.columns = [
                DTColumnBuilder.newColumn("name"),
            ];
            for (var index = 0; index < $scope.columns.length; index++) {
                var column = DTColumnBuilder.newColumn($scope.columns[index].code);
                dTable.columns.push(column);
            }

            var rowCallback = function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                return nRow;
            };

            dTable.options = DTOptionsBuilder.newOptions()
                .withFnServerData($scope.getData) // method name server call
                .withDataProp('data')// parameter name of list use in getLeads Fuction
                .withOption('serverSide', true)// required
                .withDOM(`<"row"<"col-sm-6"i><"col-sm-6"f>><"table-responsive"tr><"row"<"col-sm-6"l><"col-sm-6"p>>`)
                .withBootstrap()
                .withOption('bFilter', false)
                .withOption('bProcessing', false)
                .withOption('scrollX', '100%')
                .withScroller()
                .withOption('scrollY', 'calc(100vh - 450px)')
                .withOption('rowCallback', rowCallback)



        }

        function refreshTable() {
            records = {
                'draw': $scope.draw,
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
                    console.log(value);
                    var paramsArray = [];
                    for (let i = 0; i < cells.length; i++) {
                        var obj = { "name": range.cell(i, 0).value() };
                        for (var j = 0; j < $scope.columns.length; j++) {
                            if ($scope.columns[j]) {
                                obj[$scope.columns[j].code] = range.cell(i, j + 1).value() ? range.cell(i, j + 1).value() : 0;
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
            if (!$scope.currentFile) return Promise.reject("You must select a file.");

            return XlsxPopulate.fromDataAsync($scope.currentFile);
        }

        function generate(type) {
            return getWorkbook()
                .then(function (workbook) {
                    workbook.sheet(0).cell("A1").value("This was created in the browser!").style("fontColor", "ff0000");
                    return workbook.outputAsync(type);
                })
        }

        $scope.uploadChange = function () {
            $scope.populateTable();
            $scope.fileChosen = true;
        }

    });
