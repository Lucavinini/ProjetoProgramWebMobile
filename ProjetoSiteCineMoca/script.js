
// Dados de filmes atualizados com URLs funcionais
const movies = {
    nowPlaying: [
        { id: 1, title: "Duna: Parte Dois", rating: 4.8, year: 2024, poster: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" },
        { id: 2, title: "Kung Fu Panda 4", rating: 4.2, year: 2024, poster: "https://upload.wikimedia.org/wikipedia/pt/7/7f/Kung_Fu_Panda_4_poster.jpg" },
        { id: 3, title: "Os Mercenários 4", rating: 3.5, year: 2024, poster: "https://m.media-amazon.com/images/S/pv-target-images/abe7bf51f9126cd4e43ca9dbd2c5978da41606128e4488ddbbe84e88fb1f5903.jpg" },
        { id: 4, title: "Madame Teia", rating: 2.9, year: 2024, poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCMhj0iCBYLho10Dt3-puUzb2DMJKZ4wKztmC0kLA4KipJ3q1t" },
        { id: 5, title: "Wonka", rating: 4.1, year: 2023, poster: "https://m.media-amazon.com/images/M/MV5BNDM4NTk0NjktZDJhMi00MmFmLTliMzEtN2RkZDY2OTNiMDgzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg" },
        { id: 6, title: "Aquaman 2", rating: 3.2, year: 2023, poster: "https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-aquaman-2-o-reino-perdido-a-pop-arte-poster/poparteskins2/pos-03490-30x45cm/f3508291c3597fb9d85e71474eca637d.jpeg" },
        { id: 7, title: "Napoleão", rating: 3.8, year: 2023, poster: "https://brentwood-theatre.co.uk/wp-content/uploads/2024/03/napoleon.jpg" }
    ],
    popular: [
        { id: 8, title: "Oppenheimer", rating: 4.7, year: 2023, poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1000_.jpg" },
        { id: 9, title: "Barbie", rating: 4.3, year: 2023, poster: "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg" },
        { id: 10, title: "Interestelar", rating: 4.9, year: 2014, poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg" },
        { id: 11, title: "O Poderoso Chefão", rating: 4.9, year: 1972, poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg" },
        { id: 12, title: "Clube da Luta", rating: 4.8, year: 1999, poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg" },
        { id: 13, title: "Cidade de Deus", rating: 4.8, year: 2002, poster: "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg" },
        { id: 14, title: "Parasita", rating: 4.6, year: 2019, poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg" }
    ],
    topRated: [
        { id: 15, title: "Um Sonho de Liberdade", rating: 4.9, year: 1994, poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg" },
        { id: 16, title: "O Cavaleiro das Trevas", rating: 4.9, year: 2008, poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg" },
        { id: 17, title: "A Lista de Schindler", rating: 4.9, year: 1993, poster: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg" },
        { id: 18, title: "Pulp Fiction", rating: 4.8, year: 1994, poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg" },
        { id: 19, title: "Forrest Gump", rating: 4.8, year: 1994, poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg" },
        { id: 20, title: "O Senhor dos Anéis: O Retorno do Rei", rating: 4.9, year: 2003, poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg" },
        { id: 21, title: "Coringa", rating: 4.7, year: 2019, poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" }
    ]
};

// Função para criar cards de filmes com fallback para imagem
function createMovieCard(movie) {
    return `
        <div class="movie-card">
            <div class="movie-poster" style="background-image: url('${movie.poster}'), url('https://via.placeholder.com/200x300?text=Capa+Não+Disponível')"></div>
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
