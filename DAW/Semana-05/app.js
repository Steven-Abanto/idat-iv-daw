/* for(i= 0; i <100 ; i++){
    console.log("Iteración n°: " + (i+1))
} */

/*
function OperacionesBasicas(){
    let n1 = document.getElementById("inValor1").value
    let n2 = document.getElementById("inValor2").value

    let resultado = n1 * n2;
    console.log("Resultado: " + resultado)
} */

function OperacionesBasicas(){
    // 1. Obtener los elementos
    // 2. Obtener los valores
    // 3. Realizar las operaciones
    // Operaciones:
    // -> Concatenar, Restar, Multiplicar, Dividir
    // -> Mostrar el resultado
    
    var e1 = document.getElementById("inValor1");
    var e2 = document.getElementById("inValor2");
    var opc = document.getElementById("selOpc").value;
    
    var v1 = e1.value
    var v2 = e2.value

    console.log(opc)
    
    switch (opc){
        case "1": 
            var res = v1 + v2
            break;
        case "2": 
            var res = v1 - v2
            break;
        case "3": 
            var res = v1 * v2
            break;
        case "4": 
            var res = v1 / v2
            break;
    }

    alert("Resultado: " + res)
}

function validarDatos(){
        var anhoNac = document.getElementById("AnhoNac").value
        var salario = document.getElementById("Salario").value
        var nombre = document.getElementById("Nombre").value
        var apellido = document.getElementById("Apellido").value

        if (salario > 5000){
            alert("Persona gana más de 5000.")
            return
        }

        var edad = 2025 - anhoNac
        if (edad < 18){
            alert("Persona es menor de edad.")
            return
        }

        alert("Nombre: " + nombre + 
              "\nApellido: " + apellido + 
              "\nEdad: " + edad + 
              "\nSalario: " + salario)
}


var boton = document.getElementById("btnProcesar")
boton.addEventListener("click",validarDatos)


var inAnho = document.getElementById("AnhoNac")
/* inAnho.addEventListener("change",MostarConsola)
//inAnho.addEventListener("input",MostarConsola) */

inAnho.addEventListener("keyup",function(event){
    var valor = event.target.value
    MostarConsola(valor)
//    var press = event.key
//    MostarConsola(press)
})

function MostarConsola(valor){
    console.log("El nuevo valor es: " + valor)
}