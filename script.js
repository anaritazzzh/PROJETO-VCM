function changePage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
    const link = document.querySelector(`nav a[data-page="${pageId}"]`);
    if (link) link.classList.add('active');

    if (pageId === 'dados') startCounters();
}

document.getElementById('main-nav').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        changePage(e.target.getAttribute('data-page'));
    }
});

function interagirContato(tipo) {
    if (tipo === '180') {
        alert("O Disque 180 é uma central de atendimento que oferece escuta qualificada, orientação e encaminha denúncias para a rede de proteção. É gratuito e anônimo.");
    } else if (tipo === '190') {
        alert("O Ligue 190 é o contato de EMERGÊNCIA da Polícia Militar. Use imediatamente se você ou alguém estiver sofrendo agressão AGORA.");
    }
}

function panic() { window.location.replace("https://www.google.com"); }
document.getElementById('btnSairRapido').addEventListener('click', panic);
window.addEventListener('keydown', (e) => { if (e.key === "Escape") panic(); });

function startCounters() {
    document.querySelectorAll('.counter').forEach(c => {
        const target = +c.getAttribute('data-target');
        let count = 0;
        const speed = target / 40;
        c.innerText = "0";

        const update = () => {
            if (count < target) {
                count += speed;
                c.innerText = Math.ceil(count);
                setTimeout(update, 30);
            } else {
                c.innerText = target;
            }
        };
        update();
    });
}