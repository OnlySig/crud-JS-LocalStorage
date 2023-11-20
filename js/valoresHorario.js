const btnAvanca = document.querySelector(".btnAvanca")
const elementoModal = document.querySelectorAll(".modal__time")
let agendaLocalParse = JSON.parse(localStorage.agendamento)

elementoModal.forEach(card => {
    card.addEventListener("click", e => {
        elementoModal.forEach(element => {
            if(element.classList[1]){
                element.classList.remove("is-active")
            }
        })
        e.target.classList.add("is-active")
    })
})

btnAvanca.addEventListener("click", e => {
    elementoModal.forEach(element => {
        if(element.classList[1]) {
            let data = element.textContent
            agendaLocalParse.forEach(local => {
                if(local.valorHorario == null) {
                    let lista = []
                    let consulta = {
                        valorData: local.valorData,
                        valorHorario: data,
                    }
                    lista.push(consulta)
                    console.log(lista)
                    localStorage.setItem("agendamento", JSON.stringify(lista))
                }
            })
        }
    })

})