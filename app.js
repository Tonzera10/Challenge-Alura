let texto = document.querySelector("input");
let resposta = document.querySelector("textarea");
let output = document.getElementById("output");
let imagem = document.getElementById("imagem-output");
let txtOutput = document.getElementById("texto-output");
let botaoCopiar = document.getElementById("botao-copiar");

function converter() {
  if (texto.value == "") {
    alert("Por favor, digite  algo para ser convertido!");
  } else {
    output.style.display = "flex";
    output.style.flexDirection = "column";
    output.style.justifyContent = "space-beetween";
    resposta.style.display = "block";
    imagem.style.display = "none";
    txtOutput.style.display = "none";
    botaoCopiar.style.display = "block";
  }
}

function criptografar() {
  console.log("cliquei");
  // switch (texto.value) {
  //     case texto.value.includes('e'):
  //         texto.replace("e","enter");
  //     case texto.value.includes('i'):
  //         texto.replace("i","imes");
  //     case texto.value.includes('a'):
  //         texto.replace("a","ai");
  //     case texto.value.includes('o'):
  //         texto.replace("o","ober");
  //     case texto.value.includes('u'):
  //         texto.replace("u","ufat");
  //     default:
  //         break;
  // };
  // resposta = texto.value;
  // converter();
}

function descriptografar() {
  switch (texto.value) {
    case texto.value.includes("enter"):
      texto.replace("enter", "e");
    case texto.value.includes("imes"):
      texto.replace("imes", "i");
    case texto.value.includes("ai"):
      texto.replace("ai", "a");
    case texto.value.includes("ober"):
      texto.replace("ober", "o");
    case texto.value.includes("ufat"):
      texto.replace("ufat", "u");
    default:
      break;
  }
  resposta = texto.value;
  converter();
}

function copiar() {
  window.navigator.clipboard.writeText(resposta.value);
  alert("Copiado com sucesso!");
}
