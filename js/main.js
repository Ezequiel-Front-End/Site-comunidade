AOS.init();

const myForm = document.getElementById("myForm");
const sucessSubmit = (nome) => {
    Swal.fire({
        title: "Sucesso!",
        text: `Parabens, ${nome}! Formulario Enviado!`,
        icon: "success"
    });


    setTimeout(() => {
        window.location.reload();

    }, 2000)

}

myForm.addEventListener('submit', (event) => {
    let nome = myForm.nome.value;
    let email = myForm.email.value;
    let mensagem = myForm.mensagem.value;
    let erro = document.querySelectorAll(".erro");

    nome == "" ? erro[0].style.display = "block" : erro[0].style.display = "none";
    email == "" ? erro[1].style.display = "block" : erro[1].style.display = "none";
    mensagem == "" ? erro[2].style.display = "block" : erro[2].style.display = "none";


    if (nome != "" && email != "" && mensagem !== "") {
        sucessSubmit(nome);

    }

    event.preventDefault();

});
