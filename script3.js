// Función para validar que un vector esté ordenado ascendentemente
function validarOrden(vector) {
    for (var i = 1; i < vector.length; i++) {
        if (vector[i] < vector[i - 1]) {
            return false;
        }
    }
    return true;
}

// Función para leer un vector ordenado
function leerVector() {
    var vector = [];
    for (var i = 0; i < 5; i++) {
        var numero = parseInt(prompt('Ingrese el número ' + (i + 1) + ':'));
        vector.push(numero);

        // Validar orden ascendente
        while (!validarOrden(vector)) {
            alert('Error: El número ingresado debe ser mayor o igual al anterior.');
            vector.pop();
            numero = parseInt(prompt('Ingrese nuevamente el número ' + (i + 1) + ':'));
            vector.push(numero);
        }
    }
    return vector;
}

// Función para mezclar dos vectores ordenados
function mezclarVectores(vector1, vector2) {
    var resultado = [];
    var i = 0;
    var j = 0;

    while (i < vector1.length && j < vector2.length) {
        if (vector1[i] < vector2[j]) {
            resultado.push(vector1[i]);
            i++;
        } else if (vector1[i] > vector2[j]) {
            resultado.push(vector2[j]);
            j++;
        } else {
            resultado.push(vector1[i]); // Ambos son iguales, agregar uno y avanzar en ambos vectores
            i++;
            j++;
        }
    }

    // Agregar los elementos restantes de ambos vectores, si los hay
    while (i < vector1.length) {
        resultado.push(vector1[i]);
        i++;
    }

    while (j < vector2.length) {
        resultado.push(vector2[j]);
        j++;
    }

    return resultado;
}

// Programa principal
function programaMezclaVectores() {
    console.log('Ingrese el primer vector ordenado:');
    var vector1 = leerVector();

    console.log('\nIngrese el segundo vector ordenado:');
    var vector2 = leerVector();

    console.log('\nVectores ingresados:');
    console.log('Vector 1:', vector1);
    console.log('Vector 2:', vector2);

    // Mezclar y mostrar el resultado
    var resultado = mezclarVectores(vector1, vector2);
    console.log('\nLista ordenada de la mezcla de los dos vectores:');
    console.log(resultado);
}

// Ejecutar el programa
programaMezclaVectores();
