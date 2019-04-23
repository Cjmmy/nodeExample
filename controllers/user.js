// exports.login = function (req, res, next) {
//     res.render('./show',{title: 'login'});
// };

// exports.addUser = function (req, res) {
//     res.render('./show',{title: 'add'});
//
// };
//
// exports.deleteUser = function (req, res, next) {
//     res.render('./show', {title: 'delete'});
// };
// exports.updateUser = function (req, res, next) {
//     res.render('./show',{title: 'update'});
// };
exports.show = function (req, res, next) {
    res.render('./show', {rank1: '军官', number1: 36, rank2: '士兵', number2: 66, rank3: '后勤', number3: 6});
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.end(JSON.stringify({'军官':26,'士兵':66, '后勤': 6}));
};