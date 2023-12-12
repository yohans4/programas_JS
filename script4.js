// Definir una clase Persona para representar a cada encuestado
class Persona {
    constructor(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.fechaNacimiento = fechaNacimiento;
        this.correo = correo;
        this.ciudadResidencia = ciudadResidencia;
        this.ciudadOrigen = ciudadOrigen;
        this.cancionesFavoritas = [];
    }

    agregarCancionFavorita(artista, titulo) {
        if (this.cancionesFavoritas.length < 3) {
            this.cancionesFavoritas.push({ artista, titulo });
            console.log(`Canción agregada: ${titulo} - ${artista}`);
        } else {
            console.log('Ya ha alcanzado el límite de canciones favoritas (máximo 3).');
        }
    }
}

// Función para agregar una persona al vector de personas
function agregarPersona() {
    var nombre = prompt('Ingrese el nombre:');
    var cedula = prompt('Ingrese el número de identificación (cédula):');
    var fechaNacimiento = prompt('Ingrese la fecha de nacimiento:');
    var correo = prompt('Ingrese el correo electrónico:');
    var ciudadResidencia = prompt('Ingrese la ciudad de residencia:');
    var ciudadOrigen = prompt('Ingrese la ciudad de origen:');

    var nuevaPersona = new Persona(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen);
    personas.push(nuevaPersona);

    console.log(`Persona agregada correctamente: ${nombre}`);
}

// Función para mostrar la información personal de una persona por su posición en el vector
function mostrarInformacionPersona(posicion) {
    if (posicion >= 0 && posicion < personas.length) {
        var persona = personas[posicion];
        console.log('Información de la persona:');
        console.log(`Nombre: ${persona.nombre}`);
        console.log(`Cédula: ${persona.cedula}`);
        console.log(`Fecha de Nacimiento: ${persona.fechaNacimiento}`);
        console.log(`Correo Electrónico: ${persona.correo}`);
        console.log(`Ciudad de Residencia: ${persona.ciudadResidencia}`);
        console.log(`Ciudad de Origen: ${persona.ciudadOrigen}`);
        console.log('Canciones Favoritas:');
        persona.cancionesFavoritas.forEach((cancion, index) => {
            console.log(`  ${index + 1}. ${cancion.titulo} - ${cancion.artista}`);
        });
    } else {
        console.log('La posición ingresada no es válida.');
    }
}

// Vector para almacenar las personas
var personas = [];

// Menú principal
while (true) {
    var opcion = prompt('Seleccione una opción:\n a. Agregar persona\n b. Mostrar información de una persona\n c. Salir');

    switch (opcion.toLowerCase()) {
        case 'a':
            agregarPersona();
            break;
        case 'b':
            var posicion = parseInt(prompt('Ingrese la posición de la persona que desea consultar:'));
            mostrarInformacionPersona(posicion);
            break;
        case 'c':
            alert('Programa finalizado.');
            // Salir del bucle y finalizar el programa
            return;
        default:
            alert('Opción no válida. Por favor, seleccione una opción válida.');
            break;
    }
}
