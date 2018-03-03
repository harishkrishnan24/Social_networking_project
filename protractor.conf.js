exports.config = {
    framework: 'mocha',
    specs: ['test/e2e/**/*.spec.js'],
    mochaOpts: {
        enableTimeouts: false
    },
    onPrepare: function () {
        process.env.port = 3001;
        require('./server');
    }
};