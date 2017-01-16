/**
 * Created by zhaofeng on 7/14/16.
 */
const MainWindow = require('./main.js');
const LoginWindow = require('./login.js');
const AboutWindow = require('./about.js');

let openWinMap = {};

exports.create = function (winName) {
    let win = null;
    switch (winName) {
        case 'main':
            win = new MainWindow();
            break;
        case 'login':
            win = new LoginWindow(openWinMap['main']);
            break;
        case 'about':
            win = new AboutWindow(openWinMap['main']);
            break;
    }

    win && (openWinMap[winName] = win);

    return win;
};

exports.getWin = function (winName) {
    return openWinMap[winName];
};

exports.close = function (winName) {
    if (openWinMap[winName]) {
        openWinMap[winName].close();
        delete openWinMap[winName];
    }
};