export default function Modal(){
    
    const modalWraper = document.querySelector('.modal-wraper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
        //Funcionalidade de atribuir a classe active para a modal

        modalWraper.classList.add("active")
    }
    function close(){
        //Funcionalidade de remover a classe active a modal
        modalWraper.classList.remove("active")
    }

    return{
        open,
        close
    }
}