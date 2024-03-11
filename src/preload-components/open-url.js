const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('openUrl', {
  github: () => ipcRenderer.invoke('open-url:github'),
  facebook: () => ipcRenderer.invoke('open-url:facebook'),
  twitter: () => ipcRenderer.invoke('open-url:twitter'),
  linkedin: () => ipcRenderer.invoke('open-url:linkedin'),
  instagram: () => ipcRenderer.invoke('open-url:instagram'),
  project: () => ipcRenderer.invoke('open-url:project')
})