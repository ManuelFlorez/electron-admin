document.getElementById('twitter')
  .addEventListener('click', async() => {
    event.preventDefault()
    await window.openUrl.twitter()
  })