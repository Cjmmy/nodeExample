const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const urlHelper = require("./routes");
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
const express = require('express');
const app = express();
// const mongo = require('mongodb').MongoClient;
// const config = require('./config');

urlHelper.setRequestUrl(app);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
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

var Eureka = require('eureka-client').Eureka;
const client = new Eureka({
    instance: {
        instanceId: 1,
        app: 'user',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: 'http://localhost:8888/info',
        homePageUrl: `http://localhost:8888/`,
        healthCheckUrl: `http://localhost:8888/health`,
        port: {
            '$': 8888,
            '@enabled': 'true',
        },
        vipAddress: 'test.instance.com',
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn'
        },
    },
    eureka: {
        serviceUrl: ['http://localhost:8080/cloud/apps/'],
    },
});

// let updatedListener = function(apps){
//     console.log("服务更新：" + JSON.stringify(apps));
// };
// client.onUpdated(updatedListener);
client.start(function (error) {
    console.log(error || 'Node server register completed');
});
app.get('/health', (req, res) => {
    res.json({
        status: 'UP'
    });
});
app.get('/', (req, res, next) => {
    res.json({status: true, message: "It's works!"});
});
// mongo.connect(config.url, function (err, client) {
//
//     const db = client.db(config.dbName);
//     console.log('hello');
// });

app.listen(8888);

module.exports = app;
