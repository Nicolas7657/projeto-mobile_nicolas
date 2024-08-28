let vetor = [];

function adicionarValor() {

  const valor = Number(document.getElementById('valor').value);

  if (!isNaN(valor)) {
      vetor.push(valor);

      const tabela = document.getElementById('tabelaValores').getElementsByTagName('tbody')[0];

      const novalinha = tabela.insertRow();
      const celula = novalinha.insertCell(0);
      celula.textContent = valor;

      document.getElementById('valor').value = '';
      document.getElementById('valor').focus();
    }
}

function mostrarPares() {

    const tabelaPares = document.getElementById('tabelaPares').getElementsByTagName('tbody')[0];

    tabelaPares.innerHTML = ''; // Limpa a tebela antes de adicionar novos Valores

    vetor.forEach(valor => {

            const novoValor = valor + 5;

            const novaLinha = tabelaPares.insertRow();
            const celula = novaLinha.insertCell(0);
            celula.textContent = novoValor;


    });
  }
