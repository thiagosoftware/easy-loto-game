function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('gerarNumeros').addEventListener('click', function() {
    var numerosAleatorios = [];
    var quadradosDiv = document.getElementById('quadrados');
    quadradosDiv.innerHTML = '';

    while (numerosAleatorios.length < 15) {
        var numero = getRandomInt(1, 25);
        if (!numerosAleatorios.includes(numero)) {
            numerosAleatorios.push(numero);
        }
    }

    var linhaDiv;
    numerosAleatorios.forEach(function(numero, index) {
        if (index % 5 === 0) {
            linhaDiv = document.createElement('div');
            linhaDiv.className = 'linha';
            quadradosDiv.appendChild(linhaDiv);
        }
        var quadrado = document.createElement('div');
        quadrado.className = 'quadrado';
        quadrado.textContent = numero;
        linhaDiv.appendChild(quadrado);
    });
});
