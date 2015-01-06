angular
    .module('momentum.petition')
    .directive('petitionFeed', petitionFeed);

function petitionFeed() {
   
  return {
    restrict: 'E',
    bindToController: true,
    controller : 'petitionCtrl as pc',
    replace: true,
    templateUrl: '/directives/feed.html',
    scope: {
      campaignId: "@",
      actionId: "@",
    },  
    link: link
  };

  function link(scope, element, attr, ctrl) {
    ctrl.newpetition = {};
    ctrl.petitions = [];
    ctrl.feed();

    // Listern for new petition and add to records
    scope.$on('newPetition', function(event, data) { 
      ctrl.petitions.push(data);
    });
  }

}