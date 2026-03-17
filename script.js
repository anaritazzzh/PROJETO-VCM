// script.js
document.getElementById('btnEmergencia').addEventListener('click', function() {
    alert("Ligue imediatamente para o 180 ou 190 em caso de emergência!");
    // Você pode redirecionar para uma página de recursos úteis
    window.location.href = "https://www.gov.br/mdh/pt-br/assuntos/denuncie-violencia-contra-a-mulher";
});

// Exemplo de "Saída Rápida" (tecla Esc redireciona para o Google para segurança)
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        window.location.href = "https://www.google.com";
    }
});