
function calculo() {

    var bpm = document.getElementById("bpm").value; // tomo el valor dela caja con id='bpm' y lo meto en la variante bpm
    if (bpm > 0){ 
        var pulso1 = Math.floor(60000 / (bpm * 0.25)); // 1/1
        var pulso2 = Math.floor(60000 / (bpm * 0.5)); // 1/2
        var pulso4 = Math.floor(60000 / (bpm * 1)); // 1/4
        var pulso8 = Math.floor(60000 / (bpm * 2)); // 1/8
        var pulso16 = Math.floor(60000 / (bpm * 4)); // 1/16
        var pulso32 = Math.floor(60000 / (bpm * 8)); // 1/32
        var pulso64 = Math.floor(60000 / (bpm * 16)); // 1/64

        document.getElementById('uno').innerHTML = pulso1 + ' ms.'; // busca el elemento con el id uno, ymodifico el html con la concatenacion de pulso1 mas ms.
        document.getElementById('dos').innerHTML = pulso2 + ' ms.';
        document.getElementById('cuatro').innerHTML = pulso4 + ' ms.';
        document.getElementById('ocho').innerHTML = pulso8 + ' ms.';
        document.getElementById('dieciseis').innerHTML = pulso16 + ' ms.';
        document.getElementById('treintados').innerHTML = pulso32 + ' ms.';
        document.getElementById('sesentaycuatro').innerHTML = pulso64 + ' ms.';

        pulso1 = 0;
        pulso2 = 0;
        pulso4 = 0;
        pulso8 = 0;
        pulso16 = 0;
        pulso32 = 0;
        pulso64 = 0;

    }
    else {
        alert('No olvides ingresar un valor 🤦‍♂️');
    }
}

