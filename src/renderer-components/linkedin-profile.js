document.getElementById('linkedin')
  .addEventListener('click', async() => {
    event.preventDefault()
    await window.openUrl.linkedin()
  })