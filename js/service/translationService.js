angular.module('ira').controller('translationService',  function() {  
    
            this.getTranslation = function($scope, language) {

                var languageFilePath = 'data/lang_' + language + '.json';
                //$getJSON(languageFilePath)
                console.log(languageFilePath);
                $.getJSON(languageFilePath, function (data) {
                    //$scope.translation = data;
                   // $translateProvider.translations('en', {data});
                });
               
            };

           

        });