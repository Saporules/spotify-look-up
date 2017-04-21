'use strict';
angular.module('searchModule').
  component('searchModule', {
    templateUrl: 'search-module/search-module.template.html',
    controller: function SearchModuleController() {
      this.greeting = "Hello World!";
    }
  });
