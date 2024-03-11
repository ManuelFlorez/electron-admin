document.getElementById('instagram')
  .addEventListener('click', async() => {
    event.preventDefault()
    await window.openUrl.instagram()
  })