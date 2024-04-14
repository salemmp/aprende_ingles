const is = document.getElementById("is")
const input= document.getElementById("input-respuesta")
const paginacion=document.getElementById("paginacion")
const btn =document.getElementById("btn")
const container= document.getElementById("container")

let respuestas=[]
let indice=0
let contador=1
let aciertos=0
let nombre="salem"

let respuestas_correctas=[
    "ORGULLOSO",
    "ENVIDIOSO",
    "SECO",
    "MOJADO",
    "TORCIDO",
    "FEO",
    "ANCHO",
    "ESTRECHO",
    "FINO",
    "AMABLE",
    "DELGADO",
    "IMPERTINENTE",
    "HERIDO",
    "SABROSO",
    "APESTOS"
    
]

let palabras=[
   "PROUD",
   "JEALOUS",
   "DRY",
   "WET",
   "CROOCKED",
   "UGLY",
   "WIDE",
   "NARROW",
   "THIN",
   "KIND",
   "SLIM",
   "RUDE",
   "HURT",
   "TASTY",
   "STINKY"

]


function procesar(){
    if(input.value==""){
        alert("llena el formulario")
        
    }else{
        respuestas.push(input.value.toUpperCase())
        input.value=""
        contador++
        indice++
    
        if(indice+1 > palabras.length){
            comparar()

        }else{
            paginacion.innerText= contador+" / "+respuestas_correctas.length
            is.innerHTML= `<span class="resaltar">${palabras[indice].toUpperCase()}</span>` + " is?"
    }}


function comparar(){
    for (let i = 0; i < respuestas.length; i++) {
        if (respuestas[i]==respuestas_correctas[i]) {
            aciertos++
        }}

    alert("Has acertado: "+aciertos+ " / "+ respuestas.length)
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }

    mostrarEstadisticas()
    }
    
}

function mostrarEstadisticas(){


    container.innerHTML+="<h1>Resultados:</h1>"
    container.innerHTML+='<table id="tabla"></table>'
    const tabla=document.getElementById("tabla")
    tabla.innerHTML+='<tr id="tabla_mostrar"></tr>'
    const tr=document.getElementById("tabla_mostrar")

    for (let i = 0; i < respuestas_correctas.length; i++) {
        if (respuestas[i]==respuestas_correctas[i]){
            tabla.innerHTML+=`<tr><td class="respuestas_correctas">${palabras[i].toUpperCase()}<td class="respuestas_correctas">${respuestas[i]}<td></td></tr>`
        }else{
            tabla.innerHTML+=`<tr><td class="respuestas_incorrectas">${palabras[i].toUpperCase()}<td class="respuestas_incorrectas">${respuestas[i]}<td></td></tr>`
        }

        
    }

    container.innerHTML+=`<span class="total_aciertos">${aciertos}/${respuestas_correctas.length}<span>`
    container.innerHTML+="<a href='index.html'><button>Siguiente</button></a>"
    toastr.success(`hola ${nombre}!Se han subido los resultados al registro`,"Sistema",{
        "progressBar": true,
        "positionClass": "toast-bottom-right",
        "timeOut": "5000",
        "extendedTimeOut": "5000",
        "closeButton": true
    })
}



input.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        procesar()
    }
})
btn.addEventListener("click",procesar)


is.innerHTML= `<span class="resaltar">${palabras[indice].toUpperCase()}</span>` + " is?"
paginacion.innerText= contador+" / "+ respuestas_correctas.length