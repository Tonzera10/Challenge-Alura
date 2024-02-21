let texto = document.getElementById("inputText");
let output = document.getElementById("output");
let outputTexto = document.getElementById('output-texto');
let outputOriginal = document.getElementById('conteudo-original');
let outputSubstituto = document.getElementById('conteudo-substituto');

function apenasMinusculas(event) {
  const charCode = event.which || event.keyCode;
  const charStr = String.fromCharCode(charCode);
  if (/[^a-z\s]/.test(charStr)) {
    event.preventDefault();
    return false;
  }
  return true;
}

function criptografar() {
  const textoCriptografado = criptografarTexto(texto.value);
  outputTexto.innerText = textoCriptografado;
  substituirOutput();
}

function criptografarTexto(texto) {
  return texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
}

function descriptografar() {
  const textoDescriptografado = descriptografarTexto(texto.value);
  outputTexto.innerText = textoDescriptografado;
  substituirOutput();
}

function descriptografarTexto(texto) {
  return texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
}

function copiar() {
  window.navigator.clipboard.writeText(outputTexto.value);
  Swal.fire({
    title: "Copiado!",
    text: "Você copiou o texto.",
    icon: "success"
  });
}

function substituirOutput() {
  if(texto.value == ""){
    outputOriginal.style.display = "flex";
    outputOriginal.style.flexDirection = "column";
    outputSubstituto.style.display = "none";
  } else {
    outputOriginal.style.display = "none";
    outputSubstituto.style.display = "flex";
  }
}
