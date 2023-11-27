const inputData = document.querySelector("#selectedDate")
const btnAvanca = document.querySelector(".btnAvanca")
const listaContainer = document.querySelectorAll(".main__column")
let lista = localStorage.agendamento ? JSON.parse(localStorage.agendamento) : []
let listaCompleta = localStorage.agendamentoCompleto ? JSON.parse(localStorage.agendamentoCompleto) : []

btnAvanca.addEventListener("click", e => {
    let consulta = {
        valorData: inputData.value,
    }
    salvarLocal(consulta)
})

function salvarLocal(consulta) {
    lista.push(consulta)
    localStorage.setItem("agendamento", JSON.stringify(lista))
}

function mostrarConsulta(){
    listaCompleta.forEach(element => {
        const card = document.createElement("div")
        card.classList.add("card")
        const btnDelete = document.createElement("button")
        btnDelete.classList.add("btnDelete")
        btnDelete.innerHTML = "X"
        const btnFimAgenda = document.createElement("button")
        btnFimAgenda.classList.add("btnAgenda")
        btnFimAgenda.innerHTML = "Finalizar agenda"
        card.innerHTML = `
            <div class="card__header">
                <img class="card__avatar" src="${element.imgMedico}" alt="imagem do medico">
                <div class="card__header-group">
                    <div class="card__name">${element.nomeMedico}</div>
                    <div class="card__type">${element.tipoMedico}</div>
                </div>
            </div>
            <div class="card__line">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M19.88 20.94C18.93 21.64 17.68 22 16.19 22H7.80997C7.56997 22 7.32998 21.99 7.09998 21.96L14 15.06L19.88 20.94Z" fill="#292D32"></path>
                    <path opacity="0.4" d="M22 7.81V16.19C22 17.68 21.64 18.93 20.94 19.88L15.06 14L21.96 7.1C21.99 7.33 22 7.57 22 7.81Z" fill="#292D32"></path>
                    <path opacity="0.4" d="M15.06 14L20.94 19.88C20.65 20.3 20.3 20.65 19.88 20.94L14 15.06L7.10001 21.96C6.46001 21.92 5.88001 21.79 5.35001 21.59C3.21001 20.81 2 18.91 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C18.91 2 20.81 3.21 21.59 5.35C21.79 5.88 21.92 6.46 21.96 7.1L15.06 14Z" fill="#292D32"></path>
                    <path d="M15.06 14L20.94 19.88C20.65 20.3 20.3 20.65 19.88 20.94L14 15.06L7.09998 21.96C6.45998 21.92 5.87998 21.79 5.34998 21.59L5.73996 21.2L21.59 5.35C21.79 5.88 21.92 6.46 21.96 7.1L15.06 14Z" fill="#292D32"></path>
                    <path d="M12.24 7.93C11.86 6.28 10.4 5.54 9.11999 5.53C7.83999 5.53 6.38 6.27 6 7.92C5.58 9.75 6.69999 11.28 7.70999 12.24C8.10999 12.62 8.60999 12.8 9.11999 12.8C9.62999 12.8 10.13 12.61 10.53 12.24C11.54 11.28 12.66 9.75 12.24 7.93ZM9.14999 9.49C8.59999 9.49 8.14999 9.04 8.14999 8.49C8.14999 7.94 8.58999 7.49 9.14999 7.49H9.16C9.71 7.49 10.16 7.94 10.16 8.49C10.16 9.04 9.69999 9.49 9.14999 9.49Z" fill="#292D32"></path>
                </svg>
                <span>${element.localEndereco}</span>
            </div>
            <div class="card__line">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.75 3.56V2C16.75 1.59 16.41 1.25 16 1.25C15.59 1.25 15.25 1.59 15.25 2V3.5H8.74998V2C8.74998 1.59 8.40998 1.25 7.99998 1.25C7.58998 1.25 7.24998 1.59 7.24998 2V3.56C4.54998 3.81 3.23999 5.42 3.03999 7.81C3.01999 8.1 3.25999 8.34 3.53999 8.34H20.46C20.75 8.34 20.99 8.09 20.96 7.81C20.76 5.42 19.45 3.81 16.75 3.56Z" fill="#292D32"></path>
                    <path opacity="0.4" d="M20 9.84C20.55 9.84 21 10.29 21 10.84V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V10.84C3 10.29 3.45 9.84 4 9.84H20Z" fill="#292D32"></path>
                    <path d="M8.5 15C8.24 15 7.98 14.89 7.79 14.71C7.61 14.52 7.5 14.26 7.5 14C7.5 13.74 7.61 13.48 7.79 13.29C8.07 13.01 8.51 12.92 8.88 13.08C9.01 13.13 9.12 13.2 9.21 13.29C9.39 13.48 9.5 13.74 9.5 14C9.5 14.26 9.39 14.52 9.21 14.71C9.02 14.89 8.76 15 8.5 15Z" fill="#292D32"></path>
                    <path d="M12 15C11.74 15 11.48 14.89 11.29 14.71C11.11 14.52 11 14.26 11 14C11 13.74 11.11 13.48 11.29 13.29C11.38 13.2 11.49 13.13 11.62 13.08C11.99 12.92 12.43 13.01 12.71 13.29C12.89 13.48 13 13.74 13 14C13 14.26 12.89 14.52 12.71 14.71C12.66 14.75 12.61 14.79 12.56 14.83C12.5 14.87 12.44 14.9 12.38 14.92C12.32 14.95 12.26 14.97 12.2 14.98C12.13 14.99 12.07 15 12 15Z" fill="#292D32"></path>
                    <path d="M15.5 15C15.24 15 14.98 14.89 14.79 14.71C14.61 14.52 14.5 14.26 14.5 14C14.5 13.74 14.61 13.48 14.79 13.29C14.89 13.2 14.99 13.13 15.12 13.08C15.3 13 15.5 12.98 15.7 13.02C15.76 13.03 15.82 13.05 15.88 13.08C15.94 13.1 16 13.13 16.06 13.17C16.11 13.21 16.16 13.25 16.21 13.29C16.39 13.48 16.5 13.74 16.5 14C16.5 14.26 16.39 14.52 16.21 14.71C16.16 14.75 16.11 14.79 16.06 14.83C16 14.87 15.94 14.9 15.88 14.92C15.82 14.95 15.76 14.97 15.7 14.98C15.63 14.99 15.56 15 15.5 15Z" fill="#292D32"></path>
                    <path d="M8.5 18.5C8.37 18.5 8.24 18.47 8.12 18.42C7.99 18.37 7.89 18.3 7.79 18.21C7.61 18.02 7.5 17.76 7.5 17.5C7.5 17.24 7.61 16.98 7.79 16.79C7.89 16.7 7.99 16.63 8.12 16.58C8.3 16.5 8.5 16.48 8.7 16.52C8.76 16.53 8.82 16.55 8.88 16.58C8.94 16.6 9 16.63 9.06 16.67C9.11 16.71 9.16 16.75 9.21 16.79C9.39 16.98 9.5 17.24 9.5 17.5C9.5 17.76 9.39 18.02 9.21 18.21C9.16 18.25 9.11 18.3 9.06 18.33C9 18.37 8.94 18.4 8.88 18.42C8.82 18.45 8.76 18.47 8.7 18.48C8.63 18.49 8.57 18.5 8.5 18.5Z" fill="#292D32"></path>
                    <path d="M12 18.5C11.74 18.5 11.48 18.39 11.29 18.21C11.11 18.02 11 17.76 11 17.5C11 17.24 11.11 16.98 11.29 16.79C11.66 16.42 12.34 16.42 12.71 16.79C12.89 16.98 13 17.24 13 17.5C13 17.76 12.89 18.02 12.71 18.21C12.52 18.39 12.26 18.5 12 18.5Z" fill="#292D32"></path>
                    <path d="M15.5 18.5C15.24 18.5 14.98 18.39 14.79 18.21C14.61 18.02 14.5 17.76 14.5 17.5C14.5 17.24 14.61 16.98 14.79 16.79C15.16 16.42 15.84 16.42 16.21 16.79C16.39 16.98 16.5 17.24 16.5 17.5C16.5 17.76 16.39 18.02 16.21 18.21C16.02 18.39 15.76 18.5 15.5 18.5Z" fill="#292D32"></path>
                </svg>
                <span>${element.valorData}, ${element.valorHorario}</span>
            </div>
            <div class="card__attachment">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.06 11.82L20.9 11.6C20.62 11.26 20.29 10.99 19.91 10.79C19.4 10.5 18.82 10.35 18.22 10.35H5.77001C5.17001 10.35 4.60001 10.5 4.08001 10.79C3.69001 11 3.34001 11.29 3.05001 11.65C2.48001 12.38 2.21001 13.28 2.30001 14.18L2.67001 18.85C2.80001 20.26 2.97001 22 6.14001 22H17.86C21.03 22 21.19 20.26 21.33 18.84L21.7 14.19C21.79 13.35 21.57 12.51 21.06 11.82ZM14.39 17.34H9.60001C9.21001 17.34 8.90001 17.02 8.90001 16.64C8.90001 16.26 9.21001 15.94 9.60001 15.94H14.39C14.78 15.94 15.09 16.26 15.09 16.64C15.09 17.03 14.78 17.34 14.39 17.34Z" fill="#292D32"></path>
                    <path opacity="0.4" d="M3.38 11.31C3.6 11.11 3.82 10.93 4.08 10.79C4.59 10.5 5.17 10.35 5.77 10.35H18.23C18.83 10.35 19.4 10.5 19.92 10.79C20.18 10.93 20.41 11.11 20.62 11.32V10.79V9.82C20.62 6.25 19.53 5.16 15.96 5.16H13.58C13.14 5.16 13.13 5.15 12.87 4.81L11.67 3.2C11.1 2.46 10.65 2 9.22001 2H8.04C4.47 2 3.38 3.09 3.38 6.66V10.8V11.31Z" fill="#292D32"></path>
                </svg>
                <span>${element.valorDescricao}</span>                    
            </div>
        `
        
        !element.fimAgenda ? card.appendChild(btnFimAgenda) : ""

        card.appendChild(btnDelete)
        
        btnFimAgenda.addEventListener("click", e => {
            const descricao = e.target.parentNode.children[3].children[1].textContent
            const indice = listaCompleta.filter(element => element.valorDescricao == descricao)
            indice.forEach(element => {
                element.fimAgenda = true
                listaCompleta = [...listaCompleta]
            })
            listaContainer[0].appendChild(card)
            btnFimAgenda.remove()
            localStorage.setItem("agendamentoCompleto", JSON.stringify(listaCompleta))
        })

        element.fimAgenda ? listaContainer[0].appendChild(card) : listaContainer[1].appendChild(card)

        btnDelete.addEventListener("click", e => {
            const confirmar = confirm("Confirme novamente para remover a consulta")
            if(confirmar) {
                card.remove()
                const descricao = e.target.parentNode.children[3].children[1].textContent
                const indice = listaCompleta.filter(element => element.valorDescricao == descricao)
                listaCompleta.splice(indice, 1)
                localStorage.setItem("agendamentoCompleto", JSON.stringify(listaCompleta))
            } else {
                return
            }
        })
    })
}
localStorage.agendamentoCompleto ? mostrarConsulta() : ""