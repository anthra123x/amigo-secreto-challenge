let nombres = [];

function agregarAmigo() {
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    nombres.push(nombre);
    mostrarAmigosEnPantalla();
    inputNombre.value = "";
    inputNombre.focus();
}

function mostrarAmigosEnPantalla() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < nombres.length; i++) {
        const itemLista = document.createElement('li');
        itemLista.textContent = nombres[i];
        lista.appendChild(itemLista);
    }
}

function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (nombres.length === 0) {
        alert("Agregue al menos un amigo para poder sortear.");
        return;
    }
    
    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    
    // 3. Obtener el nombre sorteado
    const nombreSorteado = nombres[indiceAleatorio];

    // 4. Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El amigo sorteado es: ${nombreSorteado}!`;
}

mostrarAmigosEnPantalla();