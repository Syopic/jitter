angular.module('sara')
    .constant('XlsxPopulate', window.XlsxPopulate).run(function ($rootScope) { $rootScope.XlsxPopulate = window.XlsxPopulate; })
    .controller('DatatableCtrl', function ($rootScope, $scope, $stateParams, $state, $uibModal, $rootScope, $scope, DTOptionsBuilder, DTColumnBuilder, ServiceData, DataFactory) {

        var dTable = this;

        // $scope.continent = $stateParams.continent ? $stateParams.continent : "Africa";
        // $scope.country = $stateParams.country ? $stateParams.country : "Kenya";
        // $scope.disease = $stateParams.disease ? $stateParams.disease : "HIV";
        // $scope.type = $stateParams.type ? $stateParams.type : "SARA";
        // $scope.year = $stateParams.year ? $stateParams.year : "2010";
        $scope.mode = $stateParams.mode ? $stateParams.mode : 1; //view mode 1 - edit, 0 - view

        $scope.continent = $rootScope.continent ? $rootScope.continent : ($stateParams.continent ? $stateParams.continent : "Africa");
        $scope.country = $rootScope.country ? $rootScope.country : ($stateParams.country ? $stateParams.country : "Malawi");
        $scope.disease = $scope.disease ? $scope.disease : ($stateParams.disease ? $stateParams.disease : "HIV");
        $scope.type = $rootScope.type ? $rootScope.type : ($stateParams.type ? $stateParams.type : "SARA");
        $scope.year = $rootScope.year ? $rootScope.year : ($stateParams.year ? $stateParams.year : "2010");
        $scope.years = ServiceData.collections.Years;
        $scope.selectedYear = $scope.year;
        $scope.selectedDisease = $scope.disease;
        $scope.selectedHFA = $scope.type;

        $rootScope.disease = $scope.disease;
        $rootScope.type = $scope.type;
        $rootScope.year = $scope.year;
        $rootScope.mode = $scope.mode;
        $rootScope.country = $scope.country;
        $rootScope.continent = $scope.continent;

        updateSate();

        $scope.callBackFn = null;
        $scope.currentFile = null;
        $scope.currentTemplate = null;
        $scope.isSendingDataEnable = false;
        $scope.isPendinggData = false;
        $scope.callBack = {}
        $scope.statusText = "";

        $scope.selectedContinent = null;
        $scope.selectedCountry = null;
        $scope.selectedHFAType = null;
        $scope.selectedDisease = $scope.disease;
        $scope.selectedYear = $scope.year;

        $scope.continents = [];
        $scope.countries = [];

        $scope.hfaTypes = [];
        $scope.diseases = ServiceData.collections.Diseases;
        $scope.years = ServiceData.collections.Years;

        $scope.regions = {};
        $scope.regions.HIV = [];
        $scope.regions.TB = [];

        dTable.HIV = {};
        dTable.TB = {};
        dTable.Malaria = {};

        dTable.HIV.dtInstance = {};
        dTable.TB.dtInstance = {};
        dTable.Malaria.dtInstance = {};


        $scope.fileChosen = false;

        var fileInput = document.getElementById('fileInput');
        var Promise = XlsxPopulate.Promise;

        $scope.headers = {};
        $scope.columns = {};

        $scope.headers.HIVL0 = ServiceData.complexHeaders["HIVL0"];
        $scope.headers.HIV = ServiceData.complexHeaders["HIV"];
        $scope.headers.TB = ServiceData.complexHeaders["TB"];
        $scope.headers.Malaria = ServiceData.complexHeaders["Malaria"];
        $scope.columns.HIV = ServiceData.diseaseIndicatorsDirectory["HIV"];
        $scope.columns.TB = ServiceData.diseaseIndicatorsDirectory["TB"];
        $scope.columns.Malaria = ServiceData.diseaseIndicatorsDirectory["Malaria"];



        $scope.getData = function (sSource, aoData, fnCallback, oSettings) {
            var draw = aoData[0].value;
            var params = {
                disease: $scope.disease,
                type: $scope.type,
                country: $scope.country,
                year: $scope.year
            }
            $scope.statusText = "Pending data ...";
            $scope.isPendinggData = true;
            DataFactory.getRegions(params).then(function (response) {
                if (response.data.result) {
                    $scope.regions[$scope.disease] = response.data.data.regions;
                    $scope.statusText = "Done";
                    records = {
                        'data': $scope.regions[$scope.disease]
                    };
                    fnCallback(records);
                } else {
                    $scope.statusText = response.data.message;
                }
                $scope.isPendinggData = false;
            });
        }

        $scope.getDataHIV = function (sSource, aoData, fnCallback, oSettings) {
            $scope.callBack.HIV = fnCallback;
            if ($scope.disease == "HIV") $scope.getData(sSource, aoData, fnCallback, oSettings);
        }

        $scope.getDataTB = function (sSource, aoData, fnCallback, oSettings) {
            $scope.callBack.TB = fnCallback;
            if ($scope.disease == "TB") $scope.getData(sSource, aoData, fnCallback, oSettings);
        }

        $scope.getDataMalaria = function (sSource, aoData, fnCallback, oSettings) {
            $scope.callBack.Malaria = fnCallback;
            if ($scope.disease == "Malaria") $scope.getData(sSource, aoData, fnCallback, oSettings);
        }


        initTable("HIV", $scope.getDataHIV);
        initTable("TB", $scope.getDataTB);
        initTable("Malaria", $scope.getDataMalaria);

        function initTable(type, getDataFn) {
            var dt = dTable[type];
            var dc = $scope.columns[type];

            var rowCallback = function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                $('td', nRow).unbind('click');
                $('td', nRow).bind('click', function () {
                    //if ($scope.mode == 1) {
                    $scope.$apply(function () {
                        $scope.edit(aData);
                    });
                    //}
                });
                return nRow;
            };
            dt.options = DTOptionsBuilder.newOptions()
                .withFnServerData(getDataFn)
                .withOption('serverSide', true)
                //.withDOM(`<"row"<"col-sm-6"><"col-sm-6">><"table-responsive"tr><"row"<"col-sm-6"l><"col-sm-6"p>>`)
                .withDOM('ftr')
                .withBootstrap()
                //.withScroller()
                .withOption('bFilter', false)
                .withOption('scrollX', '100%')
                .withOption('sortable', false)
                .withOption('bSort', false)
                //.withOption('scrollY', type == 'HIV' ? 'calc(100vh - 630px)' : 'calc(100vh - 510px)')
                .withOption('rowCallback', rowCallback)

            dt.columns = [
                DTColumnBuilder.newColumn("name").notSortable().withOption('sWidth', '200px')
            ];
            for (var i = 0; i < dc.length; i++) {
                var column = DTColumnBuilder.newColumn("indexes." + i + ".value").notSortable();
                dt.columns.push(column);
            }
        }

        $scope.edit = function (data) {

            var itemToEdit = data;
            var isEditable = $scope.mode == 1;
            var formFields = $scope.columns[$scope.disease];
            var modalInstance = $uibModal.open({
                animation: false,
                ariaLabelledBy: "modal-title-top",
                ariaDescribedBy: "modal-body-top",
                templateUrl: "views/editPopup.html",
                size: "md",
                controller: function ($scope, $uibModalInstance) {
                    $scope.isEditable = isEditable;
                    $scope.name = itemToEdit.name;
                    $scope.data = itemToEdit;
                    var paramsArray = [];
                    for (var index = 0; index < formFields.length; index++) {
                        paramsArray.push({ param: formFields[index].name, code: formFields[index].code, value: itemToEdit.indexes[index].value });
                    }
                    $scope.params = paramsArray;

                    $scope.save = function () {
                        if ($scope.isEditable) {
                            for (var i = 0; i < $scope.data.indexes.length; i++) {
                                $scope.data.indexes[i] = { code: formFields[i].code, value: $scope.params[i].value };
                            }
                            $uibModalInstance.close($scope.data);
                        }
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
                $scope.isSendingDataEnable = true;
                $scope.statusText = "Data changed";
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
                    });
            } else {
                return $scope.createObject();
            }

        }

        $scope.createObject = function () {
            return generate()
                .then(function (blob) {
                    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                        window.navigator.msSaveOrOpenBlob(blob, $scope.currentFile.name);
                    } else {
                        var url = window.URL.createObjectURL(blob);
                        var a = document.createElement("a");
                        document.body.appendChild(a);
                        a.href = url;
                        a.download = $scope.country + "_" + $scope.disease + "_" + $scope.type + "_" + $scope.year + ".xlsx";
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
                data: {
                    "year": $scope.year,
                    "nameDisease": $scope.disease,
                    "nameHFAType": $scope.type,
                    "nameCountry": $scope.country,
                    "regions": $scope.regions[$scope.disease]
                }
            };
            $scope.isSendingDataEnable = false;
            $scope.statusText = "Sending data to server ...";
            DataFactory.postRegions(postData).then(function (response) {
                $scope.statusText = "All data saved";
            });
        }

        function refreshTable() {
            records = {
                'data': $scope.regions[$scope.disease]
            };
            $scope.callBack[$scope.disease](records);
        }

        function populate(type) {

            return getWorkbook($scope)
                .then(function (workbook) {
                    $scope.continent = workbook.sheet(0).cell("U1").value() != "<Continent>" ? workbook.sheet(0).cell("U1").value() : $scope.year;
                    $scope.country = workbook.sheet(0).cell("A1").value() != "<Country Name>" ? workbook.sheet(0).cell("A1").value() : $scope.country;
                    $scope.type = workbook.sheet(0).cell("F1").value() != "<HFA type>" ? workbook.sheet(0).cell("F1").value() : $scope.type;
                    $scope.disease = workbook.sheet(0).cell("K1").value() != "<Disease>" ? workbook.sheet(0).cell("K1").value() : $scope.disease;
                    $scope.year = workbook.sheet(0).cell("P1").value() != "<Year>" ? workbook.sheet(0).cell("P1").value() : $scope.year;

                    $scope.selectedContinent = $scope.continents.filter(c => c.name == $scope.continent)[0];
                    $scope.selectedCountry = $scope.countries.filter(c => c.name == $scope.country)[0];
                    $scope.selectedHFAType = $scope.hfaTypes.filter(c => c.name == $scope.type)[0];
                    $scope.selectedDisease = $scope.disease;
                    $scope.selectedYear = $scope.year + "";

                    $scope.isSendingDataEnable = true;
                    $scope.statusText = "Data changed";
                    $scope.$apply();
                    updateSate();

                    var tColumns = ServiceData.diseaseIndicatorsDirectory[$scope.disease];

                    var tRange = "A5:BF200";
                    if ($scope.disease == "HIV") tRange = "A6:BF200"; else
                        if ($scope.disease == "Malaria") tRange = "A5:AD200"; else
                            if ($scope.disease == "TB") tRange = "A5:X200";
                    const range = workbook.sheet(0).range(tRange);
                    var cells = range.cells();
                    var paramsArray = [];
                    for (let i = 0; i < cells.length; i++) {
                        var name = range.cell(i, 0).value();
                        if (name) {
                            var obj = { "name": range.cell(i, 0).value(), "indexes": [] };
                            for (var j = 0; j < tColumns.length; j++) {
                                if (tColumns[j]) {
                                    obj.indexes[j] = { "code": tColumns[j].code, "value": range.cell(i, j + 1).value() ? range.cell(i, j + 1).value() : "" }
                                }
                            }
                            paramsArray.push(obj);
                        }
                    }

                    $scope.regions[$scope.disease] = paramsArray;
                    $scope.$apply();
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
                    var tRange = "A5:BF200";

                    if ($scope.disease == "HIV") tRange = "A6:BF200"; else
                        if ($scope.disease == "Malaria") tRange = "A5:AD200"; else
                            if ($scope.disease == "TB") tRange = "A5:X200";

                    var range = workbook.sheet(0).range(tRange);
                    workbook.sheet(0).cell("U1").value($scope.continent);
                    workbook.sheet(0).cell("A1").value($scope.country);
                    workbook.sheet(0).cell("F1").value($scope.type);
                    workbook.sheet(0).cell("K1").value($scope.disease);
                    workbook.sheet(0).cell("P1").value($scope.year);

                    var cells = range.cells();
                    for (var i = 0; i < $scope.regions[$scope.disease].length; i++) {
                        if ($scope.regions[$scope.disease][i].name) {
                            range.cell(i, 0).value($scope.regions[$scope.disease][i].name);
                            for (var j = 0; j < $scope.columns[$scope.disease].length; j++) {
                                range.cell(i, j + 1).value($scope.regions[$scope.disease][i].indexes[j].value);
                            }
                        }
                    }
                    return workbook.outputAsync(type);
                })
        }

        $scope.uploadChange = function () {
            $scope.populateTable();
            $scope.fileChosen = true;
        }

        function updateSate(isUpdate = false) {
            $state.go('root.datatable', { continent: $scope.continent, country: $scope.country, disease: $scope.disease, type: $scope.type, year: $scope.year, mode: $scope.mode }, { notify: isUpdate });
        }

        DataFactory.getContinents().then(function (response) {
            $scope.continents = response.data.continents;
            $scope.selectedContinent = $scope.continents.filter(c => c.name == $scope.continent)[0];
        });

        DataFactory.getHFATypes().then(function (response) {
            $scope.hfaTypes = response.data.hfaTypes;
            $scope.selectedHFAType = $scope.hfaTypes.filter(c => c.name == $scope.type)[0];
        });

        $scope.$watch('selectedContinent', function () {
            if ($scope.selectedContinent) {
                DataFactory.getCountries($scope.selectedContinent.name).then(function (response) {
                    $scope.countries = response.data.countries;
                    $scope.selectedCountry = $scope.countries.filter(c => c.name == $scope.country)[0];
                    if (!$scope.selectedCountry) $scope.selectedCountry = $scope.countries[0];
                });
            }
        });

        $scope.applyForm = function () {
            $scope.continent = $scope.selectedContinent.name;
            $scope.country = $scope.selectedCountry.name;

            $scope.type = $scope.selectedHFAType.name;
            $scope.disease = $scope.selectedDisease;
            $scope.year = $scope.selectedYear;
            $scope.isSendingDataEnable = false;

            $rootScope.disease = $scope.disease;
            $rootScope.type = $scope.type;
            $rootScope.year = $scope.year;
            $rootScope.mode = $scope.mode;
            $rootScope.country = $scope.country;
            $rootScope.continent = $scope.continent;

            updateSate(true);
        };
        // $scope.$watch('disease', function () {
        //     $rootScope.disease = $scope.disease;
        // })
        // $scope.$watch('type', function () {
        //     $rootScope.type = $scope.type;
        // })
        // $scope.$watch('year', function () {
        //     $rootScope.year = $scope.year;
        // })
        // $scope.$watch('mode', function () {
        //     $rootScope.mode = $scope.mode;
        // })
        // $scope.$watch('country', function () {
        //     $rootScope.country = $scope.country;
        // })
        // $scope.$watch('continent', function () {
        //     $rootScope.continent = $scope.continent;
        // })





    });
