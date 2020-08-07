//Procurar o botao
document.querySelector("#add-time")
//Quando clica no botao
.addEventListener('click', cloneField)
//executar uma acao
function cloneField() {
 // duplicar os campos//que campo?
const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
 //limpas os campos. QUe campos?
 const fields = newFieldContainer.querySelectorAll('input')
//para cada campo, limpar
 fields.forEach(function(field) {
     field.value = ""
 })
//colocar na pagina
document.querySelector('#schedule-items').appendChild(newFieldContainer )
}