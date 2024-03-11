document.getElementById('github-project')
  .addEventListener('click', async() => {
    event.preventDefault()
    await window.openUrl.project()
  })