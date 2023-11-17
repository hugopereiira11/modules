const formName = document.getElementById('form-name')
const welcome = document.getElementById('welcome')
const logout = document.getElementById('logout')
const container = document.querySelector('.container')
const list = document.querySelector('.list')

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
    container.style.display = "block"

    uName.textContent = nameStorage
  } else {
    formName.style.display = "block"
    welcome.style.display = "none"
    logout.style.display = "none"
    container.style.display = "none"

  }
}

logout.addEventListener('click', () => {
  localStorage.removeItem("name")

  check()
})

check()

/* fetch("list.json").then((response) => {
  response.json().then((dados) => {
    dados.usuarios.map((usuario) => {
      list.innerHTML += `
      <li>${usuario.nome} - ${usuario.idade} anos - ${usuario.func}</li>
      `
    })
  })
}) */

fetch("list.json").then((response) => {
  response.json().then((dados) => {
    dados.usuarios.map((usuario) => {
      list.innerHTML += `
      <tr>
      <td>${usuario.nome}</td>
      <td>${usuario.idade}</td>
      <td>${usuario.func}</td>
      </tr>
      `
    })
  })
})
