class Celular{

	constructor( color, peso, ram, marca, resolucion )
{ 
		this.color = color;
		this.peso = peso;
		this.ram = ram;
		this.marca = marca;
		this.resolucion = resolucion;
		this.encendido = false;
	}

	PresionarBotonEncendido()
      {
	    if(this.encendido == false){
		alert("Celular encendido");
		this.encendido = true
	    }
    else{
		alert("Celular apagado");
		this.encendido = false;
	    }
	}

	TomarFoto()
{
	    if(this.encendido == true){
		alert(`Foto tomada con una resolución de: ${this.resolucion}`);
	    }
    else{
		alert("No se puede tomar una foto porque el celular esta apagado");
	    }
	}

	InfoCelular()
{
		return `
		Color: <b> ${this.color} </b><br>
		Peso: <b> ${this.peso} </b><br>
		Ram: <b> ${this.ram} </b><br>
		Marca: <b> ${this.marca} </b><br>
		Resolucion: <b> ${this.resolucion} </b><br>
		`;
	}
}

//Con esto creamos un nuevo Celular
Celular1= new Celular("Negro", "50g", "16gb", "Samsung", "1920x1080");
Celular2= new Celular("Blanco", "80g", "30gb", "iPhone", "4K");
Celular3= new Celular("Rosado", "65g", "8gb", "Motorola", "Full HD");

//Llamamos a las funciones
Celular1.PresionarBotonEncendido();
Celular1.TomarFoto();

Celular2.TomarFoto();

//Al nosotros usar el document.write para mostrar la info es necesario usar el backtick para poder
//Llamar al método y mostrar la información en la pagina

document.write(`
	${Celular1.InfoCelular()}<br><br>
	${Celular2.InfoCelular()}<br><br>
	${Celular3.InfoCelular()}<br><br>
`)