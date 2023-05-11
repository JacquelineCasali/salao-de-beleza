const form = document.querySelector("#form");
// selecionar cada imput sao valores indepedentes
const nameInput = document.querySelector("#name");
const telefoneInput = document.querySelector("#telefone");

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const menssageTextarea = document.querySelector("#menssage");

// função validação
form.addEventListener("submit", (event) => {
  //    validar antes de enviar
  event.preventDefault();

  // verifica se o nome está vazio o
  if (nameInput.value === "") {
    alert("Por favor, preencha seu nome");
    return;
  }

  // verifica se o nome está vazio o
  if ((telefoneInput.value, 8)) {
    alert("O numero de telefone precisa de no mínio de 8 dígitos");
    return;
  }

  // se o email está preenchido e se é valido
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha seu email");
    return;
  }
  // verificar se a senha está preenchida e com 8 caracteres
  if (!validatePassword(passwordInput.value, 8)) {
    alert("A senha precisa de no mínio de 8 dígitos");
    return;
  }

  // verifica se o plano  foi selecionado
  if (jobSelect.value === "") {
    alert("Por favor, escolha um plano.");
    return;
  }
  // verifica se a mensagem está preenchida
  if (menssageTextarea.value === "") {
    alert("Por favor escreva uma mensagem.");
    return;
  }

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

// função que valida a senha
function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    return true;
  }
  return false;
}

// confere senha

function confereSenha() {
  const senha = document.querySelector("input[name=senha]");
  const confirma = document.querySelector("input[name=confirma]");

  if (confirma.value === senha.value) {
    confirma.setCustomValidity("");
  } else {
    confirma.setCustomValidity("As senhas não confere");
  }
}
