// Tipo string
var x ='bob';
// Um array
let animais = ['dog', 'cat','bird',24,35]
const button = document.getElementById("sendButton");
const mensagem_tela = document.getElementById("mensagem_tela");
const elemento = document.getElementById('meuElemento');
const formulario = document.getElementById('meuFormulario');
const campoTexto = document.getElementById('name');
const elementoDuploClique = document.getElementById('meuElementoDuploClique');

// Adiciona um evento de clique ao botão, pega elemento pelo ID
// ouvintes de eventos em JavaScript addEventListener click
button?.addEventListener("click", () => {
    alert(`Mensagem enviada!, ${x}!`);
    mensagem_tela.innerHTML = `Seja Bem-Vindo, ${x}`;
});
// addEventListener mouseover
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
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    alert(`Formulário enviado!, ${campoTexto.value}!`);
});

//Obtendo conteudo de um imput
campoTexto.addEventListener('input', function() {
    console.log('Conteúdo do campo de texto: ' + campoTexto.value);
});

window.addEventListener('resize', function() {
    console.log('A janela foi redimensionada. Nova largura: ' + window.innerWidth);
});

window.addEventListener('load', function() {
    console.log('A página foi totalmente carregada.');
});

elementoDuploClique.addEventListener('dblclick', function() {
    alert('Elemento clicado duas vezes!');
});


