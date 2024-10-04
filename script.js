// script.js
document.getElementById('registration-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const response = await fetch('/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, senha })
    });

    const data = await response.json();
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = data.message;

    // Opcional: Limpar o formulário
    document.getElementById('registration-form').reset();
});
