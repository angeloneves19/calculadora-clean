function showNumber(numero) {
    let tela = document.getElementById('tela');
    tela.value = tela.value + numero;
}

function limpar() {
    let tela = document.getElementById('tela');
    tela.value = '';
}

function showResult() {
    let tela = document.getElementById('tela')
    tela.value = eval(tela.value);
}