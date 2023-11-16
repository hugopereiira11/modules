const btn = document.getElementById('caixinha')

function chooseTheme() {
  document.body.classList.toggle('dark')
}

btn.addEventListener('click', () => {
  chooseTheme()

  localStorage.removeItem("dark")

  if (document.body.classList.contains('dark')) {
    localStorage.setItem("dark", 1)
  }
})

function darkTheme() {
  const dark = localStorage.getItem("dark")

  if (dark) {
    chooseTheme()
  }
}

darkTheme()
