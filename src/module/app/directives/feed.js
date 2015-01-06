angular
    .module('momentum.actions')
    .directive('actionsFeed', actionsFeed);

actionsFeed.$inject = ['$templateCache'];

function actionsFeed($templateCache) {
   
  return {
    restrict: 'E',
    bindToController: true,
    controller : 'actionsCtrl as Feed',
    transclude: 'element',
    scope: {
      campaignId: "@",
      actionId: "@",
      action: "@",
      template: "@"
    },  
    link: link
  };

  function link(scope, element, attr, ctrl, transclude) {
    ctrl.newAction = {};
    ctrl.actions = [];
    ctrl.feed();

    // if(attr.template === 'true'){
    //   var template = $templateCache.get('/directives/' + attr.action + '.feed.html');
    //   var templateElement = angular.element(template);
    //   transclude(scope, function (clone) {
    //             element.after(templateElement.append(clone));
    //   })
    // } else {
      transclude(scope, function (clone) {
                element.after(clone);
      })
    // }

    // Listern for new actions and add to records
    scope.$on('newAction', function(event, data) { 
      ctrl.actions.push(data);
    });
  }

}