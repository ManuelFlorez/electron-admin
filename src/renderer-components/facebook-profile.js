document.getElementById('facebook')
  .addEventListener('click', async() => {
    event.preventDefault()
    await window.openUrl.facebook()
  })