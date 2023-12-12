// Definición de las constantes de la tabla
const PI = 3.141592653589793;
const RECTANGLE_AREA = "rectángulo";
const RECTANGLE_PERIMETER = "rectángulo";
const SQUARE_AREA = "cuadrado";
const SQUARE_PERIMETER = "cuadrado";
const TRIANGLE_AREA = "triángulo";
const TRIANGLE_PERIMETER = "triángulo";
const CIRCLE_AREA = "círculo";
const CIRCLE_PERIMETER = "círculo";

// Definición de las funciones para calcular el área y el perímetro
function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

function calcularPerimetroRectangulo(base, altura) {
  return 2 * (base + altura);
}

function calcularAreaCuadrado(lado) {
  return lado * lado;
}

function calcularPerimetroCuadrado(lado) {
  return 4 * lado;
}

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function calcularPerimetroTriangulo(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}

function calcularAreaCirculo(radio) {
  return PI * radio * radio;
}

function calcularPerimetroCirculo(radio) {
  return 2 * PI * radio;
}

// Definición de la función principal
function main() {
  // Definición de las variables
  let figura = prompt("¿Qué figura quieres calcular? (rectángulo, cuadrado, triángulo, círculo)");
  let base = parseFloat(prompt("¿Cuál es la base de la figura?"));
  let altura = parseFloat(prompt("¿Cuál es la altura de la figura?"));
  let radio = parseFloat(prompt("¿Cuál es el radio de la figura?"));

  // Selección de la función adecuada
  switch (figura) {
    case RECTANGLE_AREA:
      console.log("El área del rectángulo es de " + calcularAreaRectangulo(base, altura) + " unidades cuadradas");
      break;
    case RECTANGLE_PERIMETER:
      console.log("El perímetro del rectángulo es de " + calcularPerimetroRectangulo(base, altura) + " unidades");
      break;
    case SQUARE_AREA:
      console.log("El área del cuadrado es de " + calcularAreaCuadrado(base) + " unidades cuadradas");
      break;
    case SQUARE_PERIMETER:
      console.log("El perímetro del cuadrado es de " + calcularPerimetroCuadrado(base) + " unidades");
      break;
    case TRIANGLE_AREA:
      console.log("El área del triángulo es de " + calcularAreaTriangulo(base, altura) + " unidades cuadradas");
      break;
    case TRIANGLE_PERIMETER:
      console.log("El perímetro del triángulo es de " + calcularPerimetroTriangulo(base, altura, altura) + " unidades");
      break;
    case CIRCLE_AREA:
      console.log("El área del círculo es de " + calcularAreaCirculo(radio) + " unidades cuadradas");
      break;
    case CIRCLE_PERIMETER:
      console.log("El perímetro del círculo es de " + calcularPerimetroCirculo(radio) + " unidades");
      break;
    default:
      console.log("Figura no válida");
  }
}

// Ejecución de la función principal
main();
