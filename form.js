const formName = document.getElementById('form-name')
const welcome = document.getElementById('welcome')
const logout = document.getElementById('logout')
const audio = document.getElementById('audio')

formName.addEventListener('submit', (pag) => {
  pag.preventDefault()

  let userName = document.getElementById('name')

  localStorage.setItem("name", userName.value)

  userName.value = ""

  check()

})

function check() {
  let nameStorage = localStorage.getItem("name")
  let uName = document.getElementById('nome')

  if (nameStorage) {
    formName.style.display = "none"
    welcome.style.display = "block"
    logout.style.display = "block"
    audio.style.display ="block"

    uName.textContent = nameStorage
  } else {
    formName.style.display = "block"
    welcome.style.display = "none"
    logout.style.display = "none"
    audio.style.display = "none"
  }
}

logout.addEventListener('click', () => {
  localStorage.removeItem("name")

  check()
})

check()
