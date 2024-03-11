const { app, BrowserWindow, ipcMain, shell, session } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(path.resolve(), 'preload.js')
    }
  })

  win.loadFile('index.html')
}

ipcMain.handle('open-url:github', () => {
  shell.openExternal('https://github.com/ManuelFlorez')
})

ipcMain.handle('open-url:project', () => {
  shell.openExternal('github-project')
})

app.whenReady().then(async () => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  app.on('active', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})