const { ipcMain, shell } = require('electron')
const { facebook, github, instagram, linkedin, project, twitter } = require('../data/index.js')

const openUrl = () => {
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
}

module.exports = {
  openUrl
}
