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