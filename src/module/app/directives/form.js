angular
    .module('momentum.actions')
    .directive('actionsForm', actionsForm);

actionsForm.$inject = ['$templateCache', '$compile'];

function actionsForm($templateCache, $compile) {
   
  return {
    restrict: 'E',
    bindToController: true,
    controller : 'actionsCtrl as Form',
    // templateUrl: '/directives/petition.form.html',
    transclude: 'element',
    scope: {
      actionId: "@",
      action: "@",
      template: "@"
    }, 
    link: link
  };

  function link(scope, element, attr, ctrl, transclude) {
 
    ctrl.newAction = {};

    transclude(scope, function (clone) {
              element.after(clone);
    })

  }

}