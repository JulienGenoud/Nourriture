(function() {
'use strict';

angular.module('NourritureControllers')
	.controller('RecipesDashboardController', RecipesDashboardController);

RecipesDashboardController.$inject = ["$scope", 'SearchService', 'toastr',"$log", "$mdDialog", "$document", "$state"];

function RecipesDashboardController($scope, RecipeService, SearchService, toastr, $log, $mdDialog, $document, $state)
{
	//var vm = this;

}

})();
