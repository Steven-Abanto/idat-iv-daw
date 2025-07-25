function OcultarElemento(){
    //    $("#Contenedor").hide()
          $("#Contenedor").css("visibility", "hidden");
}
    
function MostrarElemento(){
    //    $("#Contenedor").show()
    $("#Contenedor").css("visibility", "visible");
}

function CambiarRojo(){
    $("#Contenedor").attr('class','')
    $("#Contenedor").addClass('ContenedorRojo')
}

function CambiarAzul(){
    $("#Contenedor").attr('class','')
    $("#Contenedor").addClass('ContenedorAzul')
}