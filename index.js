"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { app, electron, BrowserWindow } = require("electron");
const my_driver_1 = require("./my_driver");
let mainWindo;
app.on('ready', function() {
    mainWindo = new BrowserWindow({
        width: 600,
        height: 600
    });
    mainWindo.loadFile('index.html');
    mainWindo.on('closed', function() {
        mainWindo = null;
    });
});

//# sourceMappingURL=index.js.map