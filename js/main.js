AOS.init();

const myForm = document.getElementById("myForm");
const sucessSubmit = (nome) => {
    Swal.fire({
        title: "Sucesso!",
        text: `Parabens, ${nome}! Formulario Enviado!`,
        icon: "success"
    });

}

myForm.addEventListener('submit', (event) => {
    let nome = myForm.nome.value
    sucessSubmit(nome);

    event.preventDefault();
});
