
const button = document.getElementById('button');

button.addEventListener('click', (alan) => {
    alan.preventDefault();

    const nomeUsuario = document.getElementById('nome');
    const sobreNomeUsuario = document.getElementById('sobre-nome');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if(nomeUsuario.value === ''){
        nomeUsuario.classList.add('erroinput');
    }else{
        nomeUsuario.classList.remove('erroinput');
    }

    if(sobreNomeUsuario.value === ''){
        sobreNomeUsuario.classList.add('erroinput');
    }else{
        sobreNomeUsuario.classList.remove('erroinput')
    };
    
    if(email.value === ''){
        email.classList.add('erroinput');
    }else{
        email.classList.remove('erroinput');
    }

    if(password.value === ''){
        password.classList.add('erroinput');
    }else{
        password.classList.remove('erroinput');
    }

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || (email.value.indexOf('.') - email.value.indexOf("@") == 1)){
        email.classList.add('erroinput');
    }else{
        email.classList.remove('erroinput');
    }

    if(!isNaN(email.value) == true && email.value.length == 11){
        email.classList.remove('erroinput');
    }

    if(password.value.length <= 5){
        password.classList.add('erroinput');
    }else{
        password.classList.remove('erroinput');
    }
});