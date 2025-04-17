


    const paisescapitales ={
    Argentina: "Buenos Aires", 
    Brasil: "Brasilia",
    Chile: "Santiago",
    Peru: "Lima",
    Colombia: "Bogotá",
    Ecuador: "Quito",
    Uruguay: 'Montevideo',
    };

    export const seleccionarCapi= () => { 
  
    const supais = document.getElementById('pais');
    const sucapital = document.getElementById('capi');
    
    const paissi = supais.value;

    sucapital.innerHTML = '<option value="">--Elige una Capital--</option>';
    
        if (paissi) {
            sucapital.disabled = false;
    
            const capital = paisescapitales[paissi];

            const option = document.createElement('option');
            option.value = capital;
            option.textContent = capital;
            sucapital.appendChild(option);
    
            console.log(`País seleccionado: ${paissi}`);
            console.log(`Capital seleccionada: ${capital}`);
        } else {
            sucapital.disabled = true;
        }

}    