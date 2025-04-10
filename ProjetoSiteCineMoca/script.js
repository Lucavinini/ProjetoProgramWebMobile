
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

document.addEventListener('DOMContentLoaded', function() {
    renderMovies();
    
    // Adiciona evento de clique a todos os filmes após renderização
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', function() {
            const movieId = this.getAttribute('data-id');
            const movie = getAllMovies().find(m => m.id == movieId);
            showRatingModal(movie);
        });
    });
});

// Função para obter todos os filmes de todas as categorias
function getAllMovies() {
    return [...movies.nowPlaying, ...movies.popular, ...movies.topRated];
}

// Função para mostrar o modal de avaliação
function showRatingModal(movie) {
    const modal = document.createElement('div');
    modal.className = 'rating-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Avaliar ${movie.title}</h2>
            <div class="stars-container">
                <span class="star" data-value="1">★</span>
                <span class="star" data-value="2">★</span>
                <span class="star" data-value="3">★</span>
                <span class="star" data-value="4">★</span>
                <span class="star" data-value="5">★</span>
            </div>
            <p class="rating-text">Selecione sua avaliação</p>
            <button class="submit-rating">Enviar Avaliação</button>
        </div>
    `;

    document.body.appendChild(modal);

    // Variável para armazenar a avaliação selecionada
    let selectedRating = 0;

    // Função para atualizar as estrelas
    const updateStars = (rating) => {
        const stars = modal.querySelectorAll('.star');
        stars.forEach((star, index) => {
            star.classList.toggle('active', index < rating);
        });
        selectedRating = rating;
        modal.querySelector('.rating-text').textContent = 
            `Você avaliou com ${rating} estrela${rating > 1 ? 's' : ''}`;
    };

    // Eventos para as estrelas
    modal.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', (e) => {
            const value = parseInt(e.target.getAttribute('data-value'));
            updateStars(value);
        });

        star.addEventListener('mouseover', (e) => {
            if (!selectedRating) {
                const value = parseInt(e.target.getAttribute('data-value'));
                updateStars(value);
            }
        });

        star.addEventListener('mouseout', () => {
            if (!selectedRating) {
                updateStars(0);
            }
        });
    });

    // Reset ao passar o mouse fora das estrelas
    modal.querySelector('.stars-container').addEventListener('mouseleave', () => {
        if (!selectedRating) {
            updateStars(0);
        }
    });

    // Fechar modal
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    // Enviar avaliação
    modal.querySelector('.submit-rating').addEventListener('click', () => {
        if (selectedRating > 0) {
            alert(`Obrigado por avaliar "${movie.title}" com ${selectedRating} estrela${selectedRating > 1 ? 's' : ''}!`);
            document.body.removeChild(modal);
        } else {
            alert('Por favor, selecione uma avaliação antes de enviar.');
        }
    });
}


function createMovieCard(movie) {
    return `
        <div class="movie-card" data-id="${movie.id}">
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

// Adicione esta propriedade aos filmes existentes
movies.nowPlaying.forEach(movie => movie.reviews = []);
movies.popular.forEach(movie => movie.reviews = []);
movies.topRated.forEach(movie => movie.reviews = []);

// Função de busca
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    
    if(searchTerm.length < 2) {
        resultsContainer.style.display = 'none';
        return;
    }

    const allMovies = getAllMovies();
    const filteredMovies = allMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm)
    );

    showSearchResults(filteredMovies);
});

function showSearchResults(movies) {
    const container = document.getElementById('searchResults');
    container.innerHTML = '';
    
    if(movies.length === 0) {
        container.innerHTML = '<div class="search-result-item">Nenhum filme encontrado</div>';
        container.style.display = 'block';
        return;
    }

    movies.forEach(movie => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `
            <div class="search-result-poster" style="background-image: url('${movie.poster}')"></div>
            <div>
                <h4>${movie.title}</h4>
                <small>${movie.year}</small>
            </div>
        `;
        
        div.addEventListener('click', () => showReviewModal(movie));
        container.appendChild(div);
    });
    
    container.style.display = 'block';
}

// Modal de crítica expandido
function showReviewModal(movie) {
    const modal = document.createElement('div');
    modal.className = 'rating-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${movie.title}</h2>
            <div class="review-form">
                <div class="stars-container">
                    ${Array.from({length: 5}, (_, i) => 
                        `<span class="star" data-value="${i+1}">★</span>`
                    ).join('')}
                </div>
                <textarea class="review-text" placeholder="Escreva sua crítica..."></textarea>
                <button class="submit-rating">Enviar Crítica</button>
            </div>
            <div class="reviews-list">
                ${movie.reviews.length > 0 ? 
                    '<h3>Críticas</h3>' + 
                    movie.reviews.map(review => `
                        <div class="review-item">
                            <div class="review-meta">
                                <span>${review.author || 'Anônimo'}</span>
                                <span>${new Date(review.date).toLocaleDateString()}</span>
                            </div>
                            <div class="stars">
                                ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                            </div>
                            <p>${review.text}</p>
                        </div>
                    `).join('') 
                    : '<p>Nenhuma crítica ainda. Seja o primeiro!</p>'}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.getElementById('searchResults').style.display = 'none';

    let selectedRating = 0;
    const stars = modal.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.dataset.value);
            stars.forEach((s, i) => 
                s.classList.toggle('active', i < selectedRating)
            );
        });
    });

    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    modal.querySelector('.submit-rating').addEventListener('click', () => {
        const reviewText = modal.querySelector('.review-text').value.trim();
        
        if(selectedRating === 0) {
            alert('Por favor, selecione uma avaliação com estrelas');
            return;
        }

        if(reviewText.length < 20) {
            alert('A crítica deve ter pelo menos 20 caracteres');
            return;
        }

        const review = {
            rating: selectedRating,
            text: reviewText,
            date: new Date(),
            author: localStorage.getItem('username') || 'Anônimo'
        };

        movie.reviews.unshift(review);
        localStorage.setItem(movie.id, JSON.stringify(movie.reviews));
        
        // Atualiza o modal com a nova crítica
        const reviewsList = modal.querySelector('.reviews-list');
        const reviewItem = createReviewItem(review);
        reviewsList.insertAdjacentHTML('afterbegin', reviewItem);
        
        // Limpa o formulário
        modal.querySelector('.review-text').value = '';
        selectedRating = 0;
        stars.forEach(star => star.classList.remove('active'));
    });
}

function createReviewItem(review) {
    return `
        <div class="review-item">
            <div class="review-meta">
                <span>${review.author}</span>
                <span>${new Date(review.date).toLocaleDateString()}</span>
            </div>
            <div class="stars">
                ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
            </div>
            <p>${review.text}</p>
        </div>
    `;
}

// Carrega reviews do localStorage ao iniciar
function loadReviews() {
    const allMovies = getAllMovies();
    allMovies.forEach(movie => {
        const storedReviews = localStorage.getItem(movie.id);
        if(storedReviews) {
            movie.reviews = JSON.parse(storedReviews);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderMovies();
    loadReviews();
});
