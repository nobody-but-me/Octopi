
import { app, BrowserWindow } from 'electron';


const createWindow = () => {
    const window = new BrowserWindow({
	autoHideMenuBar: true,
	transparent: true,
	resizable: false,
	frame: false,
	height: 500,
	width: 500,
    });
    window.setAlwaysOnTop(true, 'pop-up-menu');
    window.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
	    createWindow();
	}
    });
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
	app.quit();
    }
});
