const { app, BrowserWindow } = require('electron')
const { openUrl } = require('./src/main/open-url.js')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 610,
    webPreferences: {
      preload: path.join(path.resolve(), 'src/preload.js'),
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

openUrl()

app.whenReady().then(async () => {
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