document.addEventListener('DOMContentLoaded', function() {
    // Llamar a la función para cargar los personajes
    cargarPersonajes();

    // Evento de click en la lista de personajes
    const listaPersonajes = document.getElementById('personajes');
    if (listaPersonajes) {
        listaPersonajes.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                const personajeId = event.target.getAttribute('data-id');
                window.location.href = `personaje.html?id=${personajeId}`;
            }
        });

        // Evento de hover
        listaPersonajes.addEventListener('mouseover', function(event) {
            if (event.target.tagName === 'LI') {
                event.target.style.backgroundColor = 'lightgray';
            }
        });

        listaPersonajes.addEventListener('mouseout', function(event) {
            if (event.target.tagName === 'LI') {
                event.target.style.backgroundColor = 'transparent';
            }
        });
    }
});


function cargarPersonajes() {
    const listaPersonajes = document.getElementById('personajes');
    if (listaPersonajes) {
        listaPersonajes.innerHTML = '';
        let totalPages = 1;
        let currentPage = 1;

        function cargarPaginaPersonajes(page) {
            fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
                .then(response => response.json())
                .then(data => {
                    const personajes = data.results;
                    personajes.forEach(personaje => {
                        const item = document.createElement('li');
                        item.textContent = personaje.name;
                        item.setAttribute('data-id', personaje.id);
                        listaPersonajes.appendChild(item);
                    });

                    if (data.info && data.info.pages) {
                        totalPages = data.info.pages;
                    }

                    //COMO SOLO CARGA DE 20 EN 20 PORQUE CARGA POR PAGINAS ASI CARGO TODOS LOS PERSONAJES
                    if (currentPage < totalPages) {
                        currentPage++;
                        cargarPaginaPersonajes(currentPage);
                    }
                })
                .catch(error => console.error('Error al cargar los personajes:', error));
        }


        cargarPaginaPersonajes(currentPage);
    }
}
