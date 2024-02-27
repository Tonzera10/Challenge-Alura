let texto = document.getElementById("inputText");
texto.addEventListener('input', apenasMinusculasSemCaracteres);
let output = document.getElementById("output");
let outputTexto = document.getElementById('output-texto');
let outputOriginal = document.getElementById('conteudo-original');
let outputSubstituto = document.getElementById('conteudo-substituto');

function apenasMinusculasSemCaracteres(event) {
  const inputValue = event.target.value.toLowerCase(); 
  const cleanValue = inputValue.replace(/[^a-z\s]/g, ''); 
  event.target.value = cleanValue; 
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
  swal('Copiado!', 'Texto copiado com sucesso!', 'success');
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
