import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos os botoes que existe com a classe check

// Clicar no botao marcar como lido, abre a modal
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    //adicionar escuta
    button.addEventListener("click", (event) =>{
        handleClick(event, true)
        //event.preventDefault()       
    })
})

//Pegar quando o marcar como lido for clicado

// Clicar no botao delete, abre a modal
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => {
        handleClick(event, false)
        //event.preventDefault()
    })    
})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const form = document.querySelector('.modal form')
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id
     

    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)
    
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    //abrir Modal
    modal.open()
}
