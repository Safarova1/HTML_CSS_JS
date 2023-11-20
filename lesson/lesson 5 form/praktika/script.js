let form = document.querySelector('form')
let inputs = document.querySelectorAll('.input')


let send = document.querySelector('#send')
let list = document.querySelector('#list')







// let pass = document.querySelector('.inputpassword')


// console.log(pass)
// if(pass.password in'ASDFGHJKLQWERTYUIOPZXCVBNM'){

// }else{
//     alert('sehvlik var')
// }





form.addEventListener('submit', function (ev) {
    ev.preventDefault()   // sehife yenilenmesin





    let formData = new FormData(this)
    let formInfo = [...formData]





//     formInfo = formInfo.map((item) => {

//         if (item[0] === 'password') {
//             let el = [item[0][0].toUpperCase() + item[0].slice(1), item[1]]

//             console.log(el)
//             return el
//         }else{
//             return item
//         }

        
//         console.log(item)
//     })


// console.log(formInfo)







    let obj = {}

    formInfo.forEach((item) => {
        obj[item[0]] = item[1]
    })

    console.log(obj)
    for (const key in obj) {
        const element = obj[key];
        let p = document.createElement('p')
        p.innerHTML = `<span>${key}</span><span>${element}</span>`
        list.appendChild(p)
    }




    

})