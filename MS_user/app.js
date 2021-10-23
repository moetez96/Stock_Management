var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose")
const eurekaHelper = require('./eureka-helper');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRoute = require('./routes/auth')

const dbURI = "mongodb+srv://moetez:ayari1996@cluster0.lteno.mongodb.net/user?retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on("error", (err) => {
    console.error(err)
})
db.once("open", () => {
    console.log("DB started successfully")
})

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app .use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', authRoute)
app.use('/', indexRouter);
app.use('/users', usersRouter);

const Eureka = require('eureka-js-client').Eureka;

var os = require('os');

var networkInt = os.networkInterfaces();
const results = {}
for (const name of Object.keys(networkInt)) {
    for (const net of networkInt[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}
//var localIp =  networkInt.eth0[0].address; //linux
var localIp = ""
var host = ""
if (process.platform === "win32") {
    localIp = results["vEthernet (Default Switch)"][0]
    host = 'localhost'
} else {
    localIp = results["eth0"][0]
    host = 'eurekaserver'
}
console.log(localIp);
console.log(results);


const eureka = new Eureka({
    instance: {
        app: 'user-service',
        hostName: 'localhost',
        instanceId: 'user-service:3000',
        ipAddr: localIp,
        statusPageUrl: 'http://' + localIp + ':3000',
        port: {
            '$': 3000,
            '@enabled': 'true',
        },
        vipAddress: 'user-service',
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        }
    },
    eureka: {
        host: host,
        port: 8761,
        servicePath: '/eureka/apps/'
    }
});
eureka.logger.level('debug');
eureka.start(function (error) {
    console.log(error || 'complete');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
