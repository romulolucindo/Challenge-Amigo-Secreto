const listaNomes = [];
const nomesSorteados = [];

function adicionarAmigo() {
  const inputNome = document.getElementById("amigo");
  const nome = inputNome.value.trim();

  // Verifica se o nome não está vazio e não foi adicionado
  if (nome !== "" && !listaNomes.includes(nome)) {
    listaNomes.push(nome); // Adiciona o nome ao array
    inputNome.value = ""; // Limpa o campo de entrada
    atualizarLista();
  } else if (listaNomes.includes(nome)) {
    alert('Esse Nome já foi adicionado');
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

function sortearAmigo() {
  if (listaNomes.length === 0) {
    alert("Precisamos de pelo menos 1 nome para sortear");
    return;
  }

  let nomeDisponivel = null; // Usar 'let' para que a variável possa ser alterada

  // Laço para encontrar um nome não sorteado
  for (let i = 0; i < listaNomes.length; i++) {
    if (!nomesSorteados.includes(listaNomes[i])) {
      nomeDisponivel = listaNomes[i];
      break; // Encontrou um nome não sorteado
    }
  }

  // Se todos os nomes foram sorteados, exibe alerta
  if (nomeDisponivel === null) {
    alert("Todos os nomes já foram sorteados!");
    return;
  }

  // Sorteia o nome encontrado
  nomesSorteados.push(nomeDisponivel); // Adiciona o nome sorteado à lista de nomes sorteados

  // Exibe o nome sorteado
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>${nomeDisponivel}</li>`;
  console.log(nomeDisponivel); // Exibe no console para conferirmos
}
