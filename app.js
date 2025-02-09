//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
/*
1º Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".

2º Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.

3º Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.

4º Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.
*/
// Array para guardar os nomes dos amigos
const listaNomes = []; // Array para armazenar os nomes

function adicionarAmigo() {
  const inputNome = document.getElementById("amigo"); // Captura o input
  const nome = inputNome.value.trim(); // Pega o valor digitado e remove espaços extras

  if (nome !== "") {
    listaNomes.push(nome); // Adiciona o nome ao array
    inputNome.value = ""; // Limpa o campo de entrada
    atualizarLista();
  } else {
    alert("Digite um nome válido!");
  }
}
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa a lista antes de atualizar

  listaNomes.forEach(nome => {
    const li = document.createElement("li"); // Cria um novo <li>
    li.textContent = nome; // Define o texto do <li> como o nome do amigo
    lista.appendChild(li); // Adiciona o <li> à lista
  });
}
function sortearNomes() {
  if (listaNomes.length === 0) {
    alert("Precisamos de pelo menos 1 nome para sortear");
    return;
  }
}
