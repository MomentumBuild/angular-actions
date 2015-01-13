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
        return $http.get(server + '/campaign/' + campaignId + '/action/' + actionId + '/feed');
    }

    // function campaign(id) {
    //     return $http.get('/actions/' + id + '/campaign');
    // }

    // function all(id) {
    //     return $http.get('/actions/' + id + '/all');
    // }

}