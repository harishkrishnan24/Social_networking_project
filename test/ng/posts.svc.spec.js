describe('posts.svc', function () {
    beforeEach(module('app'));
    var PostsSvc, $httpBackend;

    beforeEach(inject(function (PostService, _$httpBackend_) {
        PostsSvc = PostService;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function () {
        $httpBackend.flush();
    });

    describe('#fetch', function () {
        beforeEach(function () {
            $httpBackend.expect('GET', '/api/posts').respond([{
                    username: 'dickeyxxx',
                    body: 'first post'
                },
                {
                    username: 'dickeyxxx',
                    body: 'second post'
                }
            ]);
        });
        it('get 2 posts', function () {
            PostsSvc.fetch().success(function (posts) {
                expect(posts).to.have.length(2);
            });
        });

    });
});