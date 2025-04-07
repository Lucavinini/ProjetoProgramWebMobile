
document.addEventListener("DOMContentLoaded", function () {
    const username = "Lucavinini"; // 👈 troque aqui!
    const lista = document.getElementById("repositorios");
  
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(repos => {
        repos.slice(0, 5).forEach(repo => {
          const li = document.createElement("li");
          li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
          lista.appendChild(li);
        });
      })
      .catch(error => {
        console.error("Erro ao carregar repositórios:", error);
        if (lista) {
          lista.innerHTML = "<li>Não foi possível carregar os repositórios.</li>";
        }
      });
  });