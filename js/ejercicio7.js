let nombres = ["Rodrigo", "Juan", "German", "Ana", "Paula", "Ezequiel", "Mauro"];
let Nletras = 0;
let Nombre;
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length>Nletras) {
        Nletras= nombres[i].length;
        Nombre = nombres[i];
    }
}
console.log("El nombre mas largo es: " + Nombre);