angular
  .module('momentum.actions', ['ngLodash']);
angular
  .module('momentum.actions')
  .controller('actionsCtrl', actionsCtrl);

actionsCtrl.$inject = ['$scope', 'Action', 'lodash', '$rootScope'];
  
function actionsCtrl( $scope, Action, lodash, $rootScope ) {
    
    var vm = this;

    vm.feed = function() {
      console.log(vm.action, vm.campaignId, vm.actionId);
      Action.feed(vm.campaignId, vm.actionId)
        .success(function(data) {
          console.log(data);
          vm.actions = data;
        })
    }

    vm.create = function() {
      console.log(vm.action, vm.actionId, vm.newAction);
      Action.create(vm.action, vm.actionId, vm.newAction)
        .success(function(data) {
          console.log(data);
          $rootScope.$broadcast('newAction', data);
          vm.newAction = {};
          // $scope.createForm.$setPristine();
          // $alert({ content: "Action created successfully" });
        });
    }
  
}


angular
  .module('momentum.actions')
  .factory('Action', Action);

Action.$inject = ['$http'];

function Action($http) {

    var root = 'http://localhost:1337';

    return {
      info: info,
      create: create,
      feed: feed,
      // campaign: campaign,
      // all: all
    };

    function info(campaignId, actionId) {
        return $http.get(root + '/campaign/' + campaignId + '/action/' + actionId);
    }

    function create(action, actionId, record) {
        return $http.post(root + '/' + action + '/' + actionId, record);
    }

    function feed(campaignId, actionId) {
        return $http.get(root + '/campaign/' + campaignId + '/action/' + actionId + '/feed');
    }

    // function campaign(id) {
    //     return $http.get('/actions/' + id + '/campaign');
    // }

    // function all(id) {
    //     return $http.get('/actions/' + id + '/all');
    // }

}
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