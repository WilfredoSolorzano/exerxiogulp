const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >=2;
}

form.addEventListener('submit', function(e){
    
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposto = document.getElementById('valor-deposito');
    const mensagemSucesso = `montate de: <b>${valorDeposto.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> -conta: <b>${numeroContaBeneficiario.value}</b>`;
    
    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido){
        const conteinerMensagemSucesso = document.querySelector('.mensagem-suesso');
        conteinerMensagemSucesso.innerHTML = mensagemSucesso;
        conteinerMensagemSucesso.style.display ='block';

        nomeBeneficiario.value = " ";
        numeroContaBeneficiario.value = " ";
        valorDeposto.value = "";
    }else{
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-menseger').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup',function(e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido){
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-menseger').style.display = 'block';
    }else{
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-menseger').style.display = 'none';
    }
})