let login = document.getElementById('login')
let password = document.getElementById('password')
let phone = document.getElementById('phone')

let mylogin = document.getElementById('mylogin')
let mypassword = document.getElementById('mypassword')
let myphone = document.getElementById('myphone')

let button = document.getElementById("registr")
let empty = document.getElementById("empty")


document.addEventListener('keydown', function (ev) {

    let reg1 = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/

    if (reg1.test(login.value)) {
        mylogin.innerText = ''
        deyer1 = true
    } else {
        mylogin.innerText = 'Please enter a valid login.'
        deyer1 = false
    }




    let reg2 = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/

    if (reg2.test(password.value)) {
        mypassword.innerText = ''
        deyer2 = true
    } else {
        mypassword.innerText = 'Please enter a valid password.'
        deyer2 = false
    }



    let reg3 = /^\+\d{12}$/

    if (reg3.test(phone.value)) {
        myphone.innerText = ''
        deyer3 = true
    } else {
        myphone.innerText = 'Please enter a valid phone.'
        deyer3 = false
    }


})




button.addEventListener('click', function (ev) {
    ev.preventDefault()
    

    if (deyer1 == true && deyer2 == true && deyer3 == true) {
        empty.innerText = 'Registration completed successfully'
    }else {
        empty.innerText = 'Please try again'
    }
});
