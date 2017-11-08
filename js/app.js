"use strict";

angular
  .module("ira", [
    "ngSanitize",
    "ngAnimate",
    "ui.router",
    "ui.bootstrap",
    "oc.lazyLoad",
    "pascalprecht.translate"  
    
  ])
  .config(["$translateProvider",function($translateProvider){
    
    var ru_translations = {
       
        "Dashboard" : "Графики",
        "Medical_Institutions" : "Мед. учреждения"
        
    
    }
    
  //   function(){
      
  //     $.getJSON('data/lang_ru.json', function (ru_data) {
      
  //     //var ru_translations = ru_data;
  //   });
  //   return ru_data;
  // }
  console.log("APP_ ",ru_translations);
  var en_translations = {  
    "Dashboard" : "Dashboard",
    "Medical_Institutions" : "Medical Institutions"
   
}
  //  function(){
  // $.getJSON('data/lang_en.json', function (data) {
      
  //     var en_translations = data;
  //   });
  //   return en_data;
  // }

    $translateProvider.translations('ru',ru_translations);
    // $translateProvider.translations('en',en_translations);
    $translateProvider.translations('en',en_translations);
    // $translateProvider.translations('sp',sp_translations);
    
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');
    
  }]);