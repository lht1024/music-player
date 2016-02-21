/**
 * Created by ssthouse on 2016/2/21.
 */
var app = require("app");
var BrowserWindow = require("browser-window");

var mainWindow = null;

app.on("ready", function () {
    if (mainWindow) {
        return;
    }
    mainWindow = new BrowserWindow({
        width: 800,
        height: 500,
        frame: false,
        resizable: false
    });

    mainWindow.loadURL("file://" + __dirname + "/main/index.html");
})