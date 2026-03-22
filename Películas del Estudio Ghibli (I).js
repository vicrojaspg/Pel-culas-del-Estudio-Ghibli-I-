const contenedor = document.getElementById("contenedor");

// fetch
fetch("https://ghibliapi.vercel.app/films")
    .then(response => response.json())
    .then(data => {

        // recorrer datos
        data.forEach(pelicula => {

            // crear tarjetas
            contenedor.innerHTML += `
                <div class="col-md-4 col-lg-3 mb-4">
                    <div class="card h-100">
                        <img src="${pelicula.image}" alt="${pelicula.title}">
                        <div class="card-body">
                            <h5 class="card-title">${pelicula.title}</h5>
                            <p><strong>Director:</strong> ${pelicula.director}</p>
                            <p><strong>Año:</strong> ${pelicula.release_date}</p>
                            <p><strong>Puntuación:</strong> ${pelicula.rt_score}</p>
                        </div>
                    </div>
                </div>
            `;
        });

    })
    .catch(error => {
        console.error("Error:", error);
    });