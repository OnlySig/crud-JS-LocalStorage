const btnAvancar = document.querySelector(".modal__action");
const modal = document.getElementById("modal");
const imgMedico = document.querySelector(".modal__select-avatar")
const inputDescricao = document.querySelector(".modal__input")
const nomeMedico = document.querySelector(".modal__select-name")
const tipoMedico = document.querySelector(".modal__select-function")
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
            imgMedico: imgMedico.attributes[0].nodeValue,
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
            return
        } else {
            if(e.target.classList[0] === "arrowUp") {
                if(p == 6) {
                    p = 0
                } else {
                    p++
                }
            } else {
                p--
            }
        }
        console.log(p)
        const pathDown = document.querySelector(".pathArrowDown")

        if(p == 0) {
            pathDown.classList.remove("pathArrowDown-active")
            nomeMedico.textContent = "Dr. Sarah Santos"
            tipoMedico.textContent = "Cardiologista"
            imgMedico.src = "img/Rectangle 209.png"
        }

        if(p == 1) {    
            pathDown.classList.add("pathArrowDown-active")
            nomeMedico.textContent = "Dr. Carlos Magno"
            tipoMedico.textContent = "Psiquiatra"
            imgMedico.src = "img/psiquiatra.jpg"
        }

        if(p == 2) {
            nomeMedico.textContent = "Dr. Antônio Veigar"
            tipoMedico.textContent = "Clínico geral"
            imgMedico.src = "img/clinicoGeral.png"
        }
        
        if(p == 3) {
            nomeMedico.textContent = "Dr. Cristiana Amolim"
            tipoMedico.textContent = "Dermatologista"
            imgMedico.src = "img/dermatologista.jpeg"
        }

        if(p == 4) {
            nomeMedico.textContent = "Dr. Amelia Castro Pereira"
            tipoMedico.textContent = "Endocrinologista"
            imgMedico.src = "img/endocrinologista.webp"
        }

        if(p == 5) {
            nomeMedico.textContent = "Dr. Nathan Philipe"
            tipoMedico.textContent = "Infectologista"
            imgMedico.src = "img/infectologista.png"
        }

        if(p == 6) {
            nomeMedico.textContent = "Dr. Marco da Costa"
            tipoMedico.textContent = "Neurologista"
            imgMedico.src = "img/neurologista.webp"
        }
    })
})