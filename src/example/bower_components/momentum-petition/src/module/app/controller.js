angular
  .module('momentum.petition')
  .controller('petitionCtrl', petitionCtrl);

petitionCtrl.$inject = ['$scope', 'Petition', 'lodash', '$rootScope'];
  
function petitionCtrl( $scope, Petition, lodash, $rootScope ) {
    
    var vm = this;

    vm.feed = function() {
      Petition.feed(vm.campaignId, vm.actionId)
        .success(function(data) {
          vm.petitions = data;
        })
    }

    vm.create = function() {
      Petition.create(vm.actionId, vm.newpetition)
        .success(function(data) {
          $rootScope.$broadcast('newPetition', data);
          vm.newpetition = {};
          // $scope.createForm.$setPristine();
          // $alert({ content: "Action created successfully" });
        });
    }
  
}

