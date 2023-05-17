const form = document.querySelector("#form");
// selecionar cada imput sao valores indepedentes
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const telefoneInput = document.querySelector("#telefone");
const jobSelect = document.querySelector("#job");

// const menssageTextarea = document.querySelector("#menssage");
// funcçao do input piscar
// Da foco a um campo de input quando a pagina é recarregada:
window.onload = function () {
  document.getElementById("name").focus();
};

// função validação
form.addEventListener("submit", (event) => {
  //    validar antes de enviar
  event.preventDefault();

  // verifica se o nome está vazio o
  if (nameInput.value === "") {
    alert("Por favor, preencha seu nome com o sobrenome");
    return;
  }
  // se o email está preenchido e se é valido
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha seu email");
    return;
  }
  // verifica se o nome está vazio o
  if (!validateTelefone(telefoneInput.value, 8)) {
    alert("O numero de telefone precisa de no mínio de 8 dígitos");
    return;
  }

  if (jobSelect.value === "") {
    alert("Por favor, escolha o turno que quer ser atendido.");
    return;
  }

  // verifica se a mensagem está preenchida
  // if (menssageTextarea.value === "") {
  //   alert("Por favor escreva uma mensagem.");
  //   return;
  // }

  //  se todos os campos estiverem corretamente preenchido envie o formulário (form)
  form.submit();
});

// função que valida email
function isEmailValid(email) {
  // cria uma regex para validar o email
  const emailRegex = new RegExp(
    // usuario12@host.com.br
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}
// função que valida a senha
function validateTelefone(numero, minDigits) {
  if (numero.length >= minDigits) {
    return true;
  }
  return false;
}
