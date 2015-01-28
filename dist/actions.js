angular
  .module('momentum.actions', []);
angular
  .module('momentum.actions')
  .controller('actionsCtrl', actionsCtrl);

actionsCtrl.$inject = ['$scope', 'Action', '$rootScope'];
  
function actionsCtrl( $scope, Action, $rootScope ) {
    
    var vm = this;

    vm.feed = function() {
      console.log(vm.server, vm.campaignId, vm.actionId);
      Action.feed(vm.server, vm.campaignId, vm.actionId)
        .success(function(data) {
          console.log(data);
          vm.actions = data;
        })
    }

    vm.create = function() {
      console.log(vm.server, vm.action, vm.actionId, vm.newAction);
      Action.create(vm.server, vm.action, vm.actionId, vm.newAction)
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

Action.$inject = ['$http', '$location'];

function Action($http, $location) {

    return {
      info: info,
      create: create,
      feed: feed,
      // campaign: campaign,
      // all: all
    };

    function info(server, campaignId, actionId) {
        return $http.get(server + '/campaign/' + campaignId + '/action/' + actionId);
    }

    function create(server, action, actionId, record) {
        return $http.post(server + '/' + action + '/' + actionId, record);
    }

    function feed(server, campaignId, actionId) {
        return $http.get(server + '/campaign/' + campaignId + '/action/' + actionId + '/public');
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