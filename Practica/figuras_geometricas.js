const prompt = require('prompt-sync')();

// Código cuadrado
console.group("Cuadrado");

    const lado = prompt("Ingrese longitud del lado del cuadrado: ");
    console.log(`Los lados del cuadrado miden ${lado} cm`)

    function perimetroCuadrado(lado){
        return lado * 4;
    }
    const perimetro = perimetroCuadrado(lado);

    console.log("El perimetro del cuadrado es igual a "+perimetro+" cm");

    const areaCuadrado = function(lado){
        console.log("El area del cuarado es igual a "+lado*lado+" cm^2");
    }

    areaCuadrado(lado);

console.groupEnd();

// Código triangulo
console.group("Triangulo");

    const ladoTriangulo1 = prompt("Ingrese el lado 1 del triángulo: ");
    const ladoTriangulo2= prompt("Ingrese el lado 2 del triángulo: ");
    const ladoTriangulo3 = prompt("Ingrese el lado 3 del triángulo: ");

    console.log(`Los lados del triángulo mide: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y ${ladoTriangulo3} cm`);

    const alturaTriangulo = prompt("Ingrese la altura del triángulo: ");

    console.log(`La altura del triángulo es de ${alturaTriangulo} cm`);

    function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, ladoTriangulo3) {
        return ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
    }
    console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");
      
    function areaTriangulo(ladoTriangulo3, alturaTriangulo) {
        return (ladoTriangulo3 * alturaTriangulo) / 2;
    }
    console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código círculo
console.group("Circulo");
    const radioCirculo = prompt("Ingrese el radio del círculo: ");
    console.log("El radio del círculo es igual a "+radioCirculo+" cm");

    function diametroCirculo(radioCirculo) {
        return radioCirculo * 2;
    }
      
      // PI
    const PI = Math.PI;
    console.log("PI es: " + PI);
      
    // Circunferencia
    function perimetroCirculo(radioCirculo) {
        const diametro = diametroCirculo(radioCirculo);
        return diametro * PI;
    }
      
      // Área
    function areaCirculo(radioCirculo) {
        return (radioCirculo * radioCirculo) * PI;
    }
console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  }
  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
  }