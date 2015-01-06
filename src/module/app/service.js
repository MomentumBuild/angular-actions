angular
  .module('momentum.actions')
  .factory('Action', Action);

Action.$inject = ['$http'];

function Action($http) {

    if($location.host().indexOf("localhost") > -1) var root = 'http://localhost:1337';
    else var root = 'http://www.momentum.build';

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