//declarar una función: calcularMayor y darle como parametros numero1, numero2
//dentro de la funcion mostrar un alert que diga cual de los numeros ingresados es mayor
//en caso de ser iguales mostrar otro alert
//invocar la funcion y enviar los argumentos con diferentes numeros para probar

const calcularMayor=(numero1, numero2) => {
    if (numero1 > numero2) {
        alert("El primer número es el mayor : " + numero1);
        console
    } else if (numero1 < numero2) {
        alert("El segunndo número es el mayor : " + numero2);
    } else {
        alert("Los números son iguales: " + numero1 + " y " + numero2);
    }
    console.log(alert);
};
calcularMayor(1, 2);
calcularMayor(3, 3);
calcularMayor(5, 4);
