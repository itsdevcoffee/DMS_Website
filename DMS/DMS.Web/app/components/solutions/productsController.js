﻿(function () {
    angular.module("DMSApp").controller("productsController", ['$mdDialog', 'smoothScroll', productsController]);

    function productsController($mdDialog, smoothScroll) {
        var vm = this;

        vm.comingEnergypro = comingEnergypro;
        vm.comingExecView = comingExecView;
        vm.closeModal = closeModal;

        function closeModal($event) {
            if ($event) {
                $event.preventDefault();
            }
            $mdDialog.cancel();
        }

        function comingEnergypro(ev) {
            $mdDialog.show({
                controller: "productsController as vm",
                templateUrl: 'App/components/solutions/templates/comingSoonEnergyPro.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }

        function comingExecView(ev) {
            $mdDialog.show({
                controller: "productsController as vm",
                templateUrl: 'App/components/solutions/templates/comingSoonExecutiveView.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }

        smoothScroll.scrollToTop();
    }
})();