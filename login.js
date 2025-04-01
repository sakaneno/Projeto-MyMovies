const usernameInput = document.getElementById("usuario")
const userSenha = document.getElementById("senha")
console.log(usernameInput)
const userLabel = document.getElementById("userLabel")
const userLabel2 = document.getElementById("userLabel2")
console.log(userLabel)
//elementos dinámicos

usernameInput.addEventListener('focus', () => {
    userLabel.classList.add("required-popup");
    //console.log('Entrando!')
})

userSenha.addEventListener('focus', () => {
    userLabel2.classList.add("required-popup");
    //console.log('Entrando!')
})

