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
    document.getElementById('Valor').focus();
  }
}

/*  function mostrarPares(){

    const tabela = document.getElementById('tabelaValores').getElementByTagName('tbody')[0];


}
*/
