// Seletor, Selecionando dos inputs, inputs vira um array com os inputs username e password
const inputs = document.querySelectorAll('.input');

//Selecionando o botão
const button = document.querySelector('.login_button');

// inputs[0].addEventListener('click', () => console.log('testando'));
// inputs[1].addEventListener('click', () => console.log('testando'));

const handleFocus = ({ target }) => {
    //Resgatando o span que é o irmão anterior
    const span = target.previousElementSibling;
    //Criando a classe ao focar
    span.classList.add('span-active')
}

const handleFocusOut = ({ target }) => {
    if(target.value === ''){
        //Resgatando o span que é o irmão anterior
        const span = target.previousElementSibling;
        // Removendo a classe ao desfocar
        span.classList.remove('span-active')
    }
}

const handleChange = () => {
    const[username, password] = inputs;

    if(username && password.value.length >= 8){
        button.removeAttribute('disabled')
    }else{
        button.setAttribute('disabled', '')
    }
}

// Transição ao focar no input
inputs.forEach((input) =>input.addEventListener('focus', handleFocus));
// Transição ao desfocar
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
// Ativando o botão ao checar os inputs
inputs.forEach((input) =>input.addEventListener('input', handleChange));


