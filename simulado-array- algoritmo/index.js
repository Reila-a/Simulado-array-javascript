btn = document.getElementById('botao');
btnP = document.getElementById('pesquisar');
tabela = document.getElementById('resposta');
div = document.getElementById('total');

let arrPessoas = [];

function cadastrar() {

    let nomeVar = document.getElementById('nome').value;
    let idadeVar = document.getElementById('idade').value;
    let sexoVar = document.getElementById('sexo').value;

    let pessoa = {
        nome: nomeVar,
        idade: idadeVar,
        sexo: sexoVar
    }
    arrPessoas.push(pessoa);

    imprimir();

    console.log(filtro);
}
btn.addEventListener('click', cadastrar);

function imprimir() {
    tabela.innerHTML = '';
    for (let i = 0; i < arrPessoas.length; i++) {
        tabela.innerHTML += `<tr>
            <td>${arrPessoas[i].nome}</td>
            <td>${arrPessoas[i].idade}</td>
            <td>${arrPessoas[i].sexo}</td>`
    }

    div.innerHTML = arrPessoas.length;
}

function filtrar() {

    let filtro = document.getElementById('filtro').value;
    
    tabela.innerHTML = '';
    for (let i = 0; i < arrPessoas.length; i++) {
        if (filtro == (arrPessoas[i].sexo).toLowerCase()) {
            tabela.innerHTML += `<tr>
                <td>${arrPessoas[i].nome}</td>
                <td>${arrPessoas[i].idade}</td>
                <td>${arrPessoas[i].sexo}</td>
            </tr>`
        }
    }
    if(filtro == 'todos'){
        imprimir();
    }
}
btnP.addEventListener('click', filtrar);