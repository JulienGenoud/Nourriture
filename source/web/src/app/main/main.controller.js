(function() {
'use strict';

angular
	.module('NourritureControllers')
	.controller('MainController', MainController);

	MainController.$inject = ['$sessionStorage', '$localStorage', "$log", 'UserService'];

	function MainController($sessionStorage, $localStorage, $log, UserService)
	{
		var vm = this;

		vm.authenticated = UserService.is_authenticated;
		$log.log(vm.authenticated);
	}

})();
