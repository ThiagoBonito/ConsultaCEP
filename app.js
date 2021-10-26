import ConsultaCEP from './geraCEP.js'

let btnCalcula = document.querySelector('#btnCep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#uf');
let cep = document.querySelector('#cep');
let resultado = document.querySelector('#resultado');

btnCalcula.addEventListener("click",procuraCep);

function mostraResultado(flagMostrar){
    resultado.style.visibility = flagMostrar? "visible" : "hidden";
}
function cepOk(busca){
    mostraResultado(true);
    rua.innerHTML = busca.logradouro + " " + busca.complemento;
    bairro.innerHTML = busca.bairro;
    cidade.innerHTML = busca.localidade+ " (0" + busca.ddd + ")" + " - " + busca.uf;
}
function cepFalha(erro){
    mostraResultado(false);
}

function procuraCep() {
    mostraResultado(false);
    let busca = new ConsultaCEP();
    busca.consultarCep(cep.value, cepOk, cepFalha); 
}
