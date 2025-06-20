function OcultarElemento(){
//    $("#Contenedor").hide()
      $("#Contenedor").css("visibility", "hidden");
}

function MostrarElemento(){
//    $("#Contenedor").show()
$("#Contenedor").css("visibility", "visible");
}

function ObtenerValor(){
    var valor = $("#txtNombre").val()
    $("#lblResultado").text(valor)
}


function validarDatos(){
        var anhoNac = $("#AnhoNac").val()
        var salario = $("#Salario").val()
        var nombre = $("#Nombre").val()
        var apellido = $("#Apellido").val()

        if (salario > 5000){
            alert("Persona gana más de 5000.")
            return
        }

        var edad = 2025 - anhoNac

        if (edad < 18){
            alert("Persona es menor de edad.")
            return
        }

        var texto = 
`Nombre: ${nombre}
Apellido: ${apellido}
Edad: ${edad}
Salario: S/${salario}`
        
        $("#lblDatos").text(texto)
}

var boton = $("#btnProcesar")
boton.on("click",validarDatos)
