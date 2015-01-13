angular
    .module('momentum.actions')
    .directive('actionsForm', actionsForm);

function actionsForm() {
   
  return {
    restrict: 'E',
    bindToController: true,
    controller : 'actionsCtrl as Form',
    transclude: 'element',
    scope: {
      actionId: "@",
      action: "@",
      template: "@",
      server: "@"
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