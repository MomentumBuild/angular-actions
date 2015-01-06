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

