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