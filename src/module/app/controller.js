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

