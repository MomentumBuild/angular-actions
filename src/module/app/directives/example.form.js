angular
    .module('momentum.actions')
    .directive('exampleForm', exampleForm);

function exampleForm() {
   
  return {
    restrict: 'E',
    bindToController: true,
    controller : 'actionsCtrl as Form',
    scope: {
      actionId: "@",
      action: "@",
      template: "@"
    }, 
    link: link,
    template: '<div ng-include="Form.url"></div>'
  };

  function link(scope, element, attr, ctrl) {
    ctrl.url = '/directives/' + attr.action + '.form.html';
    ctrl.newAction = {};
  }

}