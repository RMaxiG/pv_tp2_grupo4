//Ej. 5 Declarar 2 variables: horas y minutos 
//asignarles valores 
//Realizar la conversión para expresar esas horas y minutos en SEGUNDOS
//Mostrar por consola el resultado de la conversión en SEGUNDOS
let horas=5;
let minutos=30;
let segundos=0;
//let segundos=horas*3600+minutos*60;
    console.log("La cantidad de horas es: "+ horas + "y la cantidad de minutos es "+ minutos);
    segundos = horas * 3600 + minutos * 60;
const convertirSegundos = (segundos) => { 
    console.log("La cantidad en segundos es "+ (segundos));
};
convertirSegundos(segundos);
