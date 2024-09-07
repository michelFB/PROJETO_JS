// Tipo string
var x ='bob';
// Um array
let animais = ['dog', 'cat','bird',24,35]


// Adiciona um evento de clique ao botão, pega elemento pelo ID
// ouvintes de eventos em JavaScript addEventListener click
const button = document.getElementById("sendButton");
button?.addEventListener("click", () => {
    alert(`Mensagem enviada!, ${x}!`);
});

// addEventListener mouseover
const elemento = document.getElementById('meuElemento');
elemento.addEventListener('mouseover', function() {
    elemento.style.backgroundColor = 'red';
});
elemento.addEventListener('mouseout', function() {
    elemento.style.backgroundColor =  '#555';
});

// Registro de teclas pressionadas
document.addEventListener('keydown', function(event) {
    console.log('Tecla pressionada: ' + event.key);
});

// Submit em formulário
const formulario = document.getElementById('meuFormulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    alert(`Formulário enviado!, ${campoTexto.value}!`);
});

//Obtendo conteudo de um imput
const campoTexto = document.getElementById('name');
campoTexto.addEventListener('input', function() {
    console.log('Conteúdo do campo de texto: ' + campoTexto.value);
});

window.addEventListener('resize', function() {
    console.log('A janela foi redimensionada. Nova largura: ' + window.innerWidth);
});

window.addEventListener('load', function() {
    console.log('A página foi totalmente carregada.');
});

const elementoDuploClique = document.getElementById('meuElementoDuploClique');
elementoDuploClique.addEventListener('dblclick', function() {
    alert('Elemento clicado duas vezes!');
});