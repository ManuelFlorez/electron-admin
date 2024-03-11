const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
})

contextBridge.exposeInMainWorld('openUrl', {
  github: () => ipcRenderer.invoke('open-url:github'),
  project: () => ipcRenderer.invoke('open-url:project')
})