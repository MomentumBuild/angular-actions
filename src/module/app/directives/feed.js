angular
    .module('momentum.actions')
    .directive('actionsFeed', actionsFeed);

function actionsFeed() {
   
  return {
    restrict: 'E',
    bindToController: true,
    controller : 'actionsCtrl as Feed',
    transclude: 'element',
    scope: {
      campaignId: "@",
      actionId: "@",
      action: "@",
      template: "@",
      server: "@"
    },  
    link: link
  };

  function link(scope, element, attr, ctrl, transclude) {
    ctrl.newAction = {};
    ctrl.actions = [];
    ctrl.feed();

    transclude(scope, function (clone) {
              element.after(clone);
    })

    // Listern for new actions and add to records
    scope.$on('newAction', function(event, data) { 
      ctrl.actions.push(data);
    });
  }

}