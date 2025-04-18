const radios = document.querySelectorAll('input[name="Materia"]');
    const resu = document.getElementById("resu");

    radios.forEach(radio => {
      radio.addEventListener("change", function() {
        if (this.checked) {
          resu.textContent = `Materia seleccionada -> ${this.value}`;
          console.log(`Seleccionaste: ${this.value}`);
        }
      });
    });