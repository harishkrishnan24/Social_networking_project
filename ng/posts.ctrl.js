angular.module('app')
    .controller('PostsCtrl', function ($scope, PostService) {

        $scope.addPost = function () {
            if ($scope.postBody) {
                PostService.create({
                    username: 'dickeyxxx',
                    body: $scope.postBody
                }).then(function (post) {
                    $scope.postBody = null;
                });
            }
        };

        PostService.fetch().then(function (posts) {
            $scope.posts = posts.data;
        });

        $scope.$on('ws:new_post', function (_, post) {
            $scope.$apply(function () {
                $scope.posts.unshift(post);
            });
        });
    });