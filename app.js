let nombres = []; // El array para almacenar los nombres de2los amigos

function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada por su ID
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();

    // 2. Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detiene la ejecución si el campo está vacío
    }

    // 3. Actualizar el array de amigos y la lista en la página
    nombres.push(nombre); // Agrega el nombre al array
    mostrarAmigosEnPantalla(); // Llama a una nueva función para actualizar la lista visual
    
    // 4. Limpiar el campo de entrada
    inputNombre.value = "";
    inputNombre.focus(); // Opcional: mantiene el cursor en el campo de texto
}

// Nueva función para mostrar los amigos en la lista
function mostrarAmigosEnPantalla() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpia la lista antes de volver a llenarla

    // Recorre el array 'nombres' y crea un elemento de lista para cada uno
    nombres.forEach(nombre => {
        const itemLista = document.createElement('li');
        itemLista.textContent = nombre;
        lista.appendChild(itemLista);
    });
}