
// const { app, BrowserWindow } = require('electron');
import { app, BrowserWindow } from 'electron';


export default class MAIN {
    static _window?: BrowserWindow;
    static _application: typeof app;
    static _path = require('path');
    private static _on_window_all_closed() {
	if (process.platform !== 'darwin') {
	    MAIN._application.quit();
	}
    }
    private static _on_close() {
	delete MAIN._window;
    }
    private static _on_ready() {
	MAIN._window = new BrowserWindow({
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
	MAIN._application = app;
	MAIN._application.on('window-all-closed', MAIN._on_window_all_closed);
	MAIN._application.on('ready', MAIN._on_ready);
    }
}
MAIN._main();

