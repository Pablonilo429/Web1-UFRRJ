// function validarCPF() {

//     if(document.getElementsByName("cpf") == null || document.getElementsByName("cpf") == ''){
//         alert("Insira um CPF!");
//     }

//     var cpf = document.getElementsByName("cpf").value;
//     exp = /\.|\-/g;
//     cpf = cpf.toString().replace(exp, "");

//     var digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10));
//     var soma1 = 0,
//         soma2 = 0;
//     var vlr = 11;

//     for (i = 0; i < 9; i++) {
//         soma1 += eval(cpf.charAt(i) * (vlr - 1));
//         soma2 += eval(cpf.charAt(i) * vlr);
//         vlr--;
//     }
//     soma1 = (soma1 * 10) % 11 == 10 ? 0 : (soma1 * 10) % 11;
//     soma2 = ((soma2 + 2 * soma1) * 10) % 11;

//     var digitoGerado = soma1 * 10 + soma2;
//     if (digitoGerado != digitoDigitado) alert("CPF Invalido!");

// }
function teste(){
  console.log("teste");
}


function ValidarCPF(Objcpf) {
  
  if (Objcpf.value == null || Objcpf.value == "") {
    
    return false;
  }
  var cpf = Objcpf.value;
  exp = /\.|\-/g;
  cpf = cpf.toString().replace(exp, "");
  var digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10));
  var soma1 = 0,
    soma2 = 0;
  var vlr = 11;

  for (i = 0; i < 9; i++) {
    soma1 += eval(cpf.charAt(i) * (vlr - 1));
    soma2 += eval(cpf.charAt(i) * vlr);
    vlr--;
  }
  soma1 = (soma1 * 10) % 11 == 10 ? 0 : (soma1 * 10) % 11;
  soma2 = ((soma2 + 2 * soma1) * 10) % 11;

  var digitoGerado = soma1 * 10 + soma2;
  if (digitoGerado != digitoDigitado) alert("CPF Invalido!");

}

function verificanull() {
  if (
    document.getElementById("nome").value == null ||
    document.getElementById("nome").value == ""
  ) {
    alert("Campo nome vazio!");
  }
  if (document.getElementById("nome").length < 3) {
    alert("Nome inválido!");
  }
  if (
    document.getElementById("data").value == null ||
    document.getElementById("data").value == ""
  ) {
    alert("Campo data vazio!");
  }
  if (
    document.getElementById("cpf").value == null ||
    document.getElementById("cpf").value == ""
  ) {
    alert("Campo CPF vazio!");
  }
  if (
    document.getElementById("rg").value == null ||
    document.getElementById("rg").value == ""
  ) {
    alert("Campo RG vazio!");
  }
  if (
    document.getElementById("telefone").value == null ||
    document.getElementById("telefone").value == ""
  ) {
    alert("Campo telefone vazio!");
  }
  if (
    document.getElementById("matricula").value == null ||
    document.getElementById("matricula").value == ""
  ) {
    alert("Campo matricula vazio!");
  }
  if (
    document.getElementById("curso").value == null ||
    document.getElementById("curso").value == ""
  ) {
    alert("Campo curso vazio!");
  }
  if (
    document.getElementById("email").value == null ||
    document.getElementById("email").value == ""
  ) {
    alert("Campo data vazio!");
  }
  
  
}

function verificanome(input) {
  if (input.length > 100) alert("Ultrapassou o limite de caracteres!");
}

function maxLencpf(input) {
  if (input.value.length > 11) {
    input.value = input.value.slice(0, 11);
  }
}

function maxlen(input) {
  if (input.length > 100) alert("Ultrapassou o limite de caracteres!");
}

function validarsenha(){
  var senha = document.getElementById("senha").value;
  var rep_senha = document.getElementById("repsenha").value;
  
  // if(senha == "" || senha.length <= 5){
  //   alert('Preencha o campo senha com minimo 6 caracteres');
  //   return false;
  // }
  
  // if(rep_senha == "" || rep_senha.length <= 5){
  //   alert('Preencha o campo senha com minimo 6 caracteres');
  //   return false;
  // }
  
  if (senha != rep_senha) {
    alert('Senhas diferentes');
    return false;
  }
}