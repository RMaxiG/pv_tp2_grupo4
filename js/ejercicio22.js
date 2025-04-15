const texto2 = document.getElementById('texto');
const resultado = document.getElementById('resultado');

texto2.addEventListener('input', function() {
 resultado.textContent = texto2.value;

if (texto2.value.length > 20) {
resultado.style.backgroundColor = 'green';
} else {
resultado.style.backgroundColor = '';
}
});