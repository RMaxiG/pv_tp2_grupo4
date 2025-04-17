let color;
const numA = () => Math.floor(Math.random() * 256);
const colorA = () => color = "rgb(" + numA() + "," + numA() + "," + numA() + ")";
document.getElementById('CambioC').addEventListener('click', () => document.body.style.backgroundColor = colorA());
document.getElementById('CambioC').addEventListener('click', () => setTimeout(() => {alert("El color de fondo cambió a: " + color );}, 50));