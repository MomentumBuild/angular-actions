angular
  .module('momentum.petition', ['ngLodash']);
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


angular
  .module('momentum.petition')
  .factory('Petition', Petition);

Petition.$inject = ['$http'];

function Petition($http) {

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

    function create(actionId, record) {
        return $http.post(root + '/petition/' + actionId, record);
    }

    function feed(campaignId, actionId) {
        return $http.get(root + '/campaign/' + campaignId + '/action/' + actionId + '/feed');
    }

    // function campaign(id) {
    //     return $http.get('/petition/' + id + '/campaign');
    // }

    // function all(id) {
    //     return $http.get('/petition/' + id + '/all');
    // }

}