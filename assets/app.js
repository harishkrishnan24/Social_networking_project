var app = angular.module('app', []);

app.controller('PostsCtrl', function ($scope, PostService) {

    $scope.addPost = function () {
        if ($scope.postBody) {
            PostService.create({
                username: 'dickeyxxx',
                body: $scope.postBody
            }).then(function (post) {
                $scope.posts.unshift(post.data);
                $scope.postBody = null;
            });
        }
    };

    PostService.fetch().then(function (posts) {
        $scope.posts = posts.data;
    });
});

app.service('PostService', function ($http) {

    this.fetch = function () {
        return $http.get('/api/posts');
    };

    this.create = function (post) {
        return $http.post('/api/posts', post);
    };
});