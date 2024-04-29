document.addEventListener('DOMContentLoaded', function() {
    // Obtener el ID del personaje de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const personajeId = urlParams.get('id');

    // URL del recurso del personaje
    const personajeUrl = `https://rickandmortyapi.com/api/character/${personajeId}`;

    // Llamar a la función para mostrar los detalles del personaje
    mostrarDetallesPersonajePorId(personajeId);
});

// Función para cargar los detalles del personaje por ID
function mostrarDetallesPersonajePorId(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('nombre').textContent = data.name;
            document.getElementById('imagen').src = data.image;
            document.getElementById('especie').textContent = `Especie: ${data.species}`;
            document.getElementById('genero').textContent = `Género: ${data.gender}`;
            document.getElementById('estado').textContent = `Estado: ${data.status}`;
            document.getElementById('origen').textContent = `Origen: ${data.origin.name}`;
            document.getElementById('ubicacion').textContent = `Ubicación: ${data.location.name}`;
        })
        .catch(error => console.error('Error al cargar los detalles del personaje:', error));
}
