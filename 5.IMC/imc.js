function imc(){
    //Solicitar al usuario su peso en kilogramos y su altura en metros.
    let peso = parseFloat(prompt("Ingrese se peso en Kg: "));
    let altura = parseFloat(prompt("Ingrese su altura en metros: "));

    //Calcular el IMC utilizando la siguiente fórmula: IMC = peso (kg) / altura (m)^2.
    let imc = peso / (altura * altura);

    //Mostrar el IMC con dos decimales.
    //Por debajo del peso normal: IMC < 18.5 Peso normal: 18.5 ≤ IMC < 24.9 Sobrepeso: 25 ≤ IMC < 29.9
    //Obesidad grado 1: 30 ≤ IMC < 34.9 Obesidad grado 2: 35 ≤ IMC < 39.9 Obesidad grado 3: IMC ≥ 40
    let mensaje = "";
    if (imc < 18.5) {
        mensaje = `Su IMC es ${imc.toFixed(2)}. Usted está por debajo del peso normal.`;
    }
    else if (imc >= 18.5 && imc < 24.9) {
        mensaje = `Su IMC es ${imc.toFixed(2)}. Usted tiene un peso normal.`;
    }
    else if (imc >= 25 && imc < 29.9) {
        mensaje = `Su IMC es ${imc.toFixed(2)}. Usted tiene sobrepeso.`;
    }
    else if (imc >= 30 && imc < 34.9) {
        mensaje = `Su IMC es ${imc.toFixed(2)}. Usted tiene obesidad grado 1.`;
    }
    else if (imc >= 35 && imc < 39.9) {
        mensaje = `Su IMC es ${imc.toFixed(2)}. Usted tiene obesidad grado 2.`;
    }
    else {
        mensaje = `Su IMC es ${imc.toFixed(2)}. Usted tiene obesidad grado 3.`;
    }
    console.log(mensaje);
}

imc();