const btnAvancar = document.querySelector(".modal__action");
const modal = document.getElementById("modal");
const imgMedico = document.querySelector(".modal__select-avatar").attributes[0].nodeValue
const inputDescricao = document.querySelector(".modal__input")
const nomeMedico = document.querySelector(".modal__select-name")
const tipoMedico = document.querySelector(".modal__select-function")
const imgMedicoSrc = document.querySelector(".modal__select-avatar")
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

const arrows = document.querySelectorAll(".modal__select-icons svg")

let p = 0

arrows.forEach(arrow => {
    arrow.addEventListener("click", e => {
        if(p < 0) {
            p = 0
        } else {
            if(e.target.classList[0] === "arrowUp") {
                p++
            } else {
                p--
            }
        }
        console.log(p)
        if(p == 0) {
            nomeMedico.textContent = "Dr. Sarah Santos"
            tipoMedico.textContent = "Cardiologista"
            imgMedicoSrc.src = "img/Rectangle 209.png"
        }

        if(p == 1) {
            nomeMedico.textContent = "Dr. Carlos Magno"
            tipoMedico.textContent = "Psiquiatra"
        }
    })
})