let texto = document.getElementById("inputText");
let output = document.getElementById("output");
let outputTexto = document.getElementById('output-texto');

function apenasMinusculas(event) {
  const charCode = event.which || event.keyCode;
  const charStr = String.fromCharCode(charCode);
  if (/[^a-z]/.test(charStr)) {
    event.preventDefault();
    return false;
  }
  return true;
}

function criptografar() {
  const textoCriptografado = criptografarTexto(texto.value);
  outputTexto.innerText = textoCriptografado;
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
  window.navigator.clipboard.writeText(resposta.value);
  alert("Copiado com sucesso!");
}


