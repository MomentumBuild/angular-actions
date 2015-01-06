angular
    .module('momentum.petition')
    .directive('petitionForm', petitionForm);

function petitionForm() {
   
  return {
    restrict: 'E',
    bindToController: true,
    controller : 'petitionCtrl as pf',
    replace: true,
    templateUrl: '/directives/form.html',
    scope: {
      actionId: "@"
    },
    link: link
  };

  function link(scope, element, attr, ctrl) {
    ctrl.newpetition = {};
  }

}