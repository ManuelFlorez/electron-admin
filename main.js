const { app, BrowserWindow, ipcMain, shell } = require('electron')
const path = require('node:path')
const { facebook, github, instagram, linkedin, project, twitter } = require('./src/data/index.js')

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

ipcMain.handle('open-url:github', () => {
  shell.openExternal(github)
})

ipcMain.handle('open-url:project', () => {
  shell.openExternal(project)
})

ipcMain.handle('open-url:facebook', () => {
  shell.openExternal(facebook)
})

ipcMain.handle('open-url:twitter', () => {
  shell.openExternal(twitter)
})

ipcMain.handle('open-url:linkedin', () => {
  shell.openExternal(linkedin)
})

ipcMain.handle('open-url:instagram', () => {
  shell.openExternal(instagram)
})

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