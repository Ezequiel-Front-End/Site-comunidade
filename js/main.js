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

const validEmail = (email) => {
    const regex = new RegExp("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}");

    if (regex.test(email)) {
        return true;
    }

    return false;
}

myForm.addEventListener('submit', (event) => {
    let nome = myForm.nome.value;
    let email = myForm.email.value;
    let mensagem = myForm.mensagem.value;
    let erro = document.querySelectorAll(".erro");

    nome == "" ? erro[0].style.display = "block" : erro[0].style.display = "none";
    validEmail(email) == "" ? erro[1].style.display = "block" : erro[1].style.display = "none";
    mensagem == "" ? erro[2].style.display = "block" : erro[2].style.display = "none";


    if (nome != "" && validEmail(email) && mensagem !== "") {
        sucessSubmit(nome);

    }

    event.preventDefault();

});


