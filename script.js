// Dados de filmes (simulando uma API)
const movies = {
    nowPlaying: [
        { id: 1, title: "Duna: Parte Dois", rating: 4.8, year: 2024, poster: "https://via.placeholder.com/200x300?text=Duna+Parte+Dois" },
        { id: 2, title: "Kung Fu Panda 4", rating: 4.2, year: 2024, poster: "https://via.placeholder.com/200x300?text=Kung+Fu+Panda+4" },
        { id: 3, title: "Os Mercenários 4", rating: 3.5, year: 2024, poster: "https://via.placeholder.com/200x300?text=Os+Mercenários+4" },
        { id: 4, title: "Madame Teia", rating: 2.9, year: 2024, poster: "https://via.placeholder.com/200x300?text=Madame+Teia" },
        { id: 5, title: "Wonka", rating: 4.1, year: 2023, poster: "https://via.placeholder.com/200x300?text=Wonka" },
        { id: 6, title: "Aquaman 2", rating: 3.2, year: 2023, poster: "https://via.placeholder.com/200x300?text=Aquaman+2" },
        { id: 7, title: "Napoleão", rating: 3.8, year: 2023, poster: "https://via.placeholder.com/200x300?text=Napoleão" }
    ],
    popular: [
        { id: 8, title: "Oppenheimer", rating: 4.7, year: 2023, poster: "https://via.placeholder.com/200x300?text=Oppenheimer" },
        { id: 9, title: "Barbie", rating: 4.3, year: 2023, poster: "https://via.placeholder.com/200x300?text=Barbie" },
        { id: 10, title: "Interestelar", rating: 4.9, year: 2014, poster: "https://via.placeholder.com/200x300?text=Interestelar" },
        { id: 11, title: "O Poderoso Chefão", rating: 4.9, year: 1972, poster: "https://via.placeholder.com/200x300?text=O+Poderoso+Chefão" },
        { id: 12, title: "Clube da Luta", rating: 4.8, year: 1999, poster: "https://via.placeholder.com/200x300?text=Clube+da+Luta" },
        { id: 13, title: "Cidade de Deus", rating: 4.8, year: 2002, poster: "https://via.placeholder.com/200x300?text=Cidade+de+Deus" },
        { id: 14, title: "Parasita", rating: 4.6, year: 2019, poster: "https://via.placeholder.com/200x300?text=Parasita" }
    ],
    topRated: [
        { id: 15, title: "Um Sonho de Liberdade", rating: 4.9, year: 1994, poster: "https://via.placeholder.com/200x300?text=Um+Sonho+de+Liberdade" },
        { id: 16, title: "O Cavaleiro das Trevas", rating: 4.9, year: 2008, poster: "https://via.placeholder.com/200x300?text=O+Cavaleiro+das+Trevas" },
        { id: 17, title: "A Lista de Schindler", rating: 4.9, year: 1993, poster: "https://via.placeholder.com/200x300?text=A+Lista+de+Schindler" },
        { id: 18, title: "Pulp Fiction", rating: 4.8, year: 1994, poster: "https://via.placeholder.com/200x300?text=Pulp+Fiction" },
        { id: 19, title: "Forrest Gump", rating: 4.8, year: 1994, poster: "https://via.placeholder.com/200x300?text=Forrest+Gump" },
        { id: 20, title: "O Senhor dos Anéis: O Retorno do Rei", rating: 4.9, year: 2003, poster: "https://via.placeholder.com/200x300?text=O+Senhor+dos+Anéis" },
        { id: 21, title: "Coringa", rating: 4.7, year: 2019, poster: "https://via.placeholder.com/200x300?text=Coringa" }
    ]
};

// Função para criar cards de filmes
function createMovieCard(movie) {
    return `
        <div class="movie-card">
            <div class="movie-poster" style="background-image: url('${movie.poster}')"></div>
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="movie-rating">★ ${movie.rating}</span>
                </div>
            </div>
        </div>
    `;
}

// Função para renderizar os filmes
function renderMovies() {
    const nowPlayingContainer = document.getElementById('now-playing');
    const popularContainer = document.getElementById('popular-movies');
    const topRatedContainer = document.getElementById('top-rated');

    movies.nowPlaying.forEach(movie => {
        nowPlayingContainer.innerHTML += createMovieCard(movie);
    });

    movies.popular.forEach(movie => {
        popularContainer.innerHTML += createMovieCard(movie);
    });

    movies.topRated.forEach(movie => {
        topRatedContainer.innerHTML += createMovieCard(movie);
    });
}

// Chamada inicial para renderizar os filmes
document.addEventListener('DOMContentLoaded', renderMovies);