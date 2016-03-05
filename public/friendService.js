angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: user,
      })
    },

    getFriends: function() {
    	 $http({
        method: 'GET',
        url: 'http://localhost:3000/login'
      }).then(function(response) {
        return response.data;
      })
    }
  }
});
