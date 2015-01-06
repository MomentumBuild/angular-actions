angular
    .module('momentum.actions')
    .directive('exampleFeed', exampleFeed);

function exampleFeed() {
   
  return {
    restrict: 'E',
    bindToController: true,
    controller : 'actionsCtrl as Feed',
    scope: {
      campaignId: "@",
      actionId: "@",
      action: "@",
    },  
    link: link,
    template: '<div ng-include="Feed.url"></div>'
  };

  function link(scope, element, attr, ctrl) {
    ctrl.url = '/directives/' + attr.action + '.feed.html';
    ctrl.newAction = {};
    ctrl.actions = [];
    ctrl.feed();  
  
    // Listern for new actions and add to records
    scope.$on('newAction', function(event, data) { 
      ctrl.actions.push(data);
    });
  }

}