// Función para validar la edad en el rango de 1 a 120 años
function validarEdad(edad) {
    return edad >= 1 && edad <= 120;
}

// Función para obtener el tipo de edad
function obtenerTipoEdad(edad) {
    if (edad < 18) {
        return 'Menor de Edad';
    } else if (edad < 60) {
        return 'Mayor de Edad';
    } else {
        return 'Adulto Mayor';
    }
}

// Función principal
function programaEdades() {
    // Vector para almacenar las edades
    var edades = [];

    // Ciclo para ingresar las edades y validar
    for (var i = 0; i < 10; i++) {
        var edad = parseInt(prompt('Ingrese la edad de la persona ' + (i + 1) + ':'));
        
        // Validar la edad
        while (!validarEdad(edad)) {
            alert('Error: La edad debe estar en el rango de 1 a 120 años.');
            edad = parseInt(prompt('Ingrese nuevamente la edad de la persona ' + (i + 1) + ':'));
        }

        // Almacenar la edad en el vector
        edades.push(edad);
    }

    // Inicializar variables para el análisis de edades
    var menoresEdad = 0;
    var mayoresEdad = 0;
    var adultosMayores = 0;
    var edadMasBaja = edades[0];
    var edadMasAlta = edades[0];
    var sumaEdades = 0;

    // Calcular estadísticas
    for (var i = 0; i < edades.length; i++) {
        sumaEdades += edades[i];

        if (edades[i] < 18) {
            menoresEdad++;
        } else if (edades[i] < 60) {
            mayoresEdad++;
        } else {
            adultosMayores++;
        }

        // Actualizar edad más baja y edad más alta
        if (edades[i] < edadMasBaja) {
            edadMasBaja = edades[i];
        }

        if (edades[i] > edadMasAlta) {
            edadMasAlta = edades[i];
        }
    }

    // Calcular promedio de edades
    var promedioEdades = sumaEdades / edades.length;

    // Mostrar resultados
    console.log('Cantidad de personas menores de edad: ' + menoresEdad);
    console.log('Cantidad de personas mayores de edad: ' + mayoresEdad);
    console.log('Cantidad de adultos mayores: ' + adultosMayores);
    console.log('Edad más baja: ' + edadMasBaja);
    console.log('Edad más alta: ' + edadMasAlta);
    console.log('Promedio de edades: ' + promedioEdades.toFixed(2));
}

// Ejecutar el programa
programaEdades();
