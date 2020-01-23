//var url = 'https://fantasy.premierleague.com/api/bootstrap-static/'
var baseUrl = 'https://reqres.in/api/'

app.service('dataService', function ($http) {

    this.GetUsers = function () {
        return $http.get(baseUrl + 'users?page=1')
            .then(function (response) {
                return response.data;
            });
    }

    this.GetUser = function (id) {
        return $http.get(baseUrl + 'users/' + id)
            .then(function (response) {
                return response.data;
            });
    }

    this.SaveUser = function (user) {
        return $http.post(baseUrl + 'users',user)
            .then(function (response) {
                return response.data;
            });
    }   
    
});