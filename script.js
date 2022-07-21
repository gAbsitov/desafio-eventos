let inicio, final

function iniciarJuego (){
    cambiarRojo()
    inicio = new Date
}

function buscarRandom(){
    numeroRandom = (Math.random()*5000)
    return numeroRandom
}


function cambiarRojo(){
    boton1.classList.add("cambiarRojo")
}

function cambiarVerde(){
    boton1.classList.remove("cambiarRojo")
    boton1.classList.add("cambiarVerde")
}

function cambiarLila(){
    boton1.classList.remove("cambiarRojo")
    boton1.classList.add("cambiarLila")
}

const boton1 = document.getElementById("boton1")

boton1.addEventListener("click", () => {
    setTimeout(iniciarJuego, buscarRandom())
    boton1.addEventListener("click",() =>{
    final = new Date() 
    let resultado = final-inicio
    if(isNaN(resultado)){
        boton1.innerHTML += `
        <h2 class="resultado">No seas tan ansioso ! todavía no empezó el juego</h2>
        `
        colorOriginal()
    } else if(resultado<300){
        cambiarVerde()
        boton1.innerHTML += `
        <h2 class="resultado">Ganaste!! \n tu reacción fue de ${resultado} milisegundos</h2>
        `
    } else if (resultado<=500){
        cambiarLila()
        boton1.innerHTML += `
        <h2 class="resultado">Más o menos.. \n tu reacción fue de ${resultado} milisegundos</h2>
        `
    } else {
        boton1.innerHTML += `
        <h2 class="resultado">Perdiste :( \n tu reacción fue de ${resultado} milisegundos</h2>
        `
    }
    })

})




