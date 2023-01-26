"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { app, electron, BrowserWindow } = require("electron");
const my_driver_1 = require("./my_driver");
const button = document.getElementById("btn");
button.addEventListener("click", driverTest);
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
    async function driverTest() {
        let my_driver = new my_driver_1.MyDriver();
        my_driver.startChrome();
        await my_driver.driver.get("https://google.com");
        await my_driver.driver.sleep(1000);
        await my_driver.driver.quit();
    }
    driverTest();
});




//# sourceMappingURL=index.js.map