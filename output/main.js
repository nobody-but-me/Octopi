"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { app, BrowserWindow } = require('electron');
const electron_1 = require("electron");
class MAIN {
    static _on_window_all_closed() {
        if (process.platform !== 'darwin') {
            MAIN._application.quit();
        }
    }
    static _on_close() {
        delete MAIN._window;
    }
    static _on_ready() {
        MAIN._window = new electron_1.BrowserWindow({
            autoHideMenuBar: true,
            transparent: true,
            resizable: false,
            frame: false,
            height: 250,
            width: 250,
        });
        MAIN._window.setAlwaysOnTop(true, 'pop-up-menu');
        MAIN._window.loadFile('index.html');
        MAIN._window.on('closed', () => {
            MAIN._on_close();
        });
    }
    static _main() {
        MAIN._application = electron_1.app;
        MAIN._application.on('window-all-closed', MAIN._on_window_all_closed);
        MAIN._application.on('ready', MAIN._on_ready);
    }
}
MAIN._path = require('path');
exports.default = MAIN;
MAIN._main();
