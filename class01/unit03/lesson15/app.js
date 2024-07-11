document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(tab => {
        tab.addEventListener("click", function() {
            const target = this.getAttribute("data-tab");

            tabLinks.forEach(link => link.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            this.classList.add("active");
            const content = document.getElementById(target);
            content.classList.add("active");

            loadTabContent(target, content);
        });
    });

    function loadTabContent(target, content) {
        const url = `lista_jogos/${target}.json`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let html = '<h2>Jogos da ' + target + '</h2><ul>';
                data.jogos.forEach(jogo => {
                    html += `<li>${jogo.time1} vs ${jogo.time2}</li>`;
                });
                html += '</ul>';
                content.innerHTML = html;
            })
            .catch(error => {
                console.error('Erro ao carregar os dados:', error);
                content.innerHTML = '<p>Erro ao carregar os dados. Por favor, tente novamente mais tarde.</p>';
            });
    }

    // Carregar a primeira aba ao carregar a página
    loadTabContent("rodada1", document.getElementById("rodada1"));
});
