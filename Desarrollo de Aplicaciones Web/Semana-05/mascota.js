class Mascota{

	constructor( nombre, edad, especie, raza, talla, peso, nomDuenho)
{ 
		this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
		this.raza = raza;
		this.talla = talla;
		this.peso = peso;
		this.duenho = false;
		this.nomDuenho = nomDuenho;
    }

	AdoptarMascota(nomb)
      {
	    if(this.duenho == false){
		alert("¡Mascota adoptada!");
        this.duenho = true
        this.nomDuenho = nomb
	    }
    else{
		alert("Mascota ya tiene dueño.");
	    }
	}

	VacunarMascota()
{
	    if(this.duenho == true){
		alert(`Mascota de: ${this.nomDuenho} \nEdad: ${this.edad} \nTalla: ${this.talla} \nPeso: ${this.peso}`);
	    }
    else{
		alert("No se puede vacunar a la mascota.");
	    }
	}

	InfoMascota()
{
		return `
		Nombre: <b> ${this.nombre} </b><br>
		Edad: <b> ${this.edad} </b><br>
		Especie: <b> ${this.especie} </b><br>
		Raza: <b> ${this.raza} </b><br>
		Talla: <b> ${this.talla} </b><br>
		Peso: <b> ${this.peso} </b><br>
		Dueño: <b> ${this.nomDuenho} </b><br>
		`;
	}
}

//Con esto creamos un nuevo Celular
Mascota1= new Mascota("Lotso", 2, "Gato", "Siberiano", "0.60m", "5kg", "");
Mascota2= new Mascota("Lotso", 2, "Gato", "Siberiano", "0.60m", "5kg", "");

//Llamamos a las funciones
Mascota1.AdoptarMascota("Luisa");
Mascota1.VacunarMascota();

Mascota2.VacunarMascota();

//Al nosotros usar el document.write para mostrar la info es necesario usar el backtick para poder
//Llamar al método y mostrar la información en la pagina

document.write(`
	<br>
	${Mascota1.InfoMascota()}<br><br>
	${Mascota2.InfoMascota()}<br><br>
`)