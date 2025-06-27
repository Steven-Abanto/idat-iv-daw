class Bicicleta{

	constructor( marca, modelo, anhoFab, tamanho, precio, cant)
{ 
		this.marca = marca;
        this.modelo = modelo;
        this.anhoFab = anhoFab;
		this.tamanho = tamanho;
		this.precio = precio;
		this.cant = cant;
    }

	CalcularPrecio()
      {
		var precioTot = 0;
		var result = "Precio total: S/"
		var mensFin = ""
		
	    if(this.cant <= 0){
		alert("¡Cantidad no permitida!")
	    }
	    else {
			precioTot = this.cant * this.precio
		 
			if (precioTot < 500){
				mensFin = "El monto es accesible.\n" + result + precioTot
			} 
			if (precioTot == 500){
				mensFin = "Te alcanza a las justas.\n" + result + precioTot
			} 
			if (precioTot > 500){
				mensFin = "No te alcanza.\n" + result + precioTot
			}
		return (mensFin)
	    }
	}
}

function MostrarPrecio(){
	mrc = $("#Marca").val()
	mdl = $("#Marca").val()
	afb = $("#AnhoFab").val()
	tmn = $("#Tamanho").val()
	prc = 100
	cnt = $("#Cantidad").val()

	$("#Contenedor").hide()
	bici1 = new Bicicleta(mrc,mdl,afb,tmn,prc,cnt)
	var texto = bici1.CalcularPrecio();
	$("#lblTotal").text(texto)
}


var boton = $("#btnProcesar")
boton.on("click",MostrarPrecio)