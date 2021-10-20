// Or, if you're not using a transpiler:
const Eureka = require('eureka-js-client').Eureka;

exports.registerWithEureka = () => {
// example configuration
    const client = new Eureka({
        // application instance information
        instance: {
            app: 'user-service',
            hostName: 'localhost',
            ipAddr: '127.0.0.1',
            port: 3000,
            vipAddress: 'MS-user',
            dataCenterInfo: {
                '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
                name: 'MyOwn',
            },
        },
        eureka: {
            // eureka server host / port
            hostName: 'localhost',
            host: '127.0.0.1',
            port: 8761,
        },
    });

    function exitHandler(options, exitCode) {
        if (options.cleanup) {
        }
        if (exitCode || exitCode === 0) console.log(exitCode);
        if (options.exit) {
            client.stop();
        }
    }

    client.on('deregistered', () => {
        process.exit();
        console.log('after deregistered');
    })

    client.on('started', () => {
        console.log("eureka host  " + "127.0.0.1");
    })

    process.on('SIGINT', exitHandler.bind(null, {exit: true}));
};
