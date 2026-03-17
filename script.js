// Função para trocar de página
function changePage(pageId) {
    // 1. Remove classe 'active' de todas as seções e links
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));

    // 2. Adiciona classe 'active' na página e link selecionado
    document.getElementById(pageId).classList.add('active');
    document.querySelector(`[data-page="${pageId}"]`).classList.add('active');

    // 3. Se for a página de dados, inicia o contador
    if (pageId === 'dados') {
        startCounters();
    }
}

// Evento de clique no Menu
document.getElementById('main-nav').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const page = e.target.getAttribute('data-page');
        changePage(page);
    }
});

// Saída de Emergência
function panic() { window.location.replace("https://www.google.com"); }
document.getElementById('btnSairRapido').addEventListener('click', panic);
window.addEventListener('keydown', (e) => { if (e.key === "Escape") panic(); });

// Animação dos números
function startCounters() {
    document.querySelectorAll('.counter').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = target / 50;
        
        const update = () => {
            if (count < target) {
                count += speed;
                counter.innerText = Math.ceil(count);
                setTimeout(update, 20);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
}