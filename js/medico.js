const btnAvancar = document.querySelector(".modal__action");
const modal = document.getElementById("modal");
const imgMedico = document.querySelector(".modal__select-avatar").attributes[0].nodeValue
const inputDescricao = document.querySelector(".modal__input")
let agendaLocalParse = JSON.parse(localStorage.agendamento) 

inputDescricao.addEventListener("keydown", e => {
    if(e.key === "Enter") {
        criaAgendaCompleta()
    }
})

btnAvancar.addEventListener("click", e=>{
    criaAgendaCompleta()
}) 

function criaAgendaCompleta(){
    let lista = JSON.parse(localStorage.agendamento)
    const descricao = inputDescricao.value
    const nomeMedico = document.querySelector(".modal__select-name").textContent
    const tipoMedico = document.querySelector(".modal__select-function").textContent

    lista.forEach(element => {
        let consultaCompleta = {
            valorData: element.valorData,
            valorHorario: element.valorHorario,
            valorDescricao: descricao,
            nomeMedico: nomeMedico,
            imgMedico: imgMedico,
            tipoMedico: tipoMedico,
            fimAgenda: false
        }        
        let listaCompleta = localStorage.agendamentoCompleto ? JSON.parse(localStorage.agendamentoCompleto) : []
        listaCompleta.push(consultaCompleta)
        localStorage.setItem("agendamentoCompleto", JSON.stringify(listaCompleta))
    });
    window.location="index.html"
}