let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit", (e) => {
  e.preventDefault()
  createItem(ourField.value)
})

function createItem(x){
  let ourHTML = `<li>${x} <button onclick = "del(this)">Delete</button></li>`
  ourList.insertAdjacentHTML('beforeend', ourHTML)
  ourField.value = ""
  ourField.focus()
}

function del(element){
  element.parentElement.remove()
}