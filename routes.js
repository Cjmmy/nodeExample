exports.setRequestUrl=function(app) {
    const user = require('./controllers/user');
    // app.get('/login', user.login);
    // app.get('/user/addUser', user.addUser);
    // app.delete('/user', user.deleteUser);
    // app.put('/user', user.updateUser);
    app.get('/show', user.show);
};

