document.getElementById('github')
  .addEventListener('click', async() => {
    event.preventDefault()
    await window.openUrl.github()
  })