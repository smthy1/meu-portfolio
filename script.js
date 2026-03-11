const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos!");
        return
    }

    if(!emailRegex.test(email)){
        alert("Digite um email válido!");
        return
    }

    alert("Mensagem enviada com sucesso!");
    formulario.reset();
});

const temaBtn = document.getElementById("temaBtn");

temaBtn.onclick = () => {
    document.body.classList.toggle("dark");
}