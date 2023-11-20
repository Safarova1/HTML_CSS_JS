// --------------------------------------------------------
// zadaca1 - inputun deyerini objecte yazdim


// let send = document.querySelector('#send')
// let form = document.querySelector('form')


// let inputs = document.querySelector('.userName')



// form.addEventListener('submit', function (ev) {
//     ev.preventDefault()  //sehife yenilenir
   
//     //1ci usul
//     let formDate = new FormData(this)
//     let forInfo = [...formDate]

//     let obj = {}
//     forInfo.forEach((item) => {
//         obj[item[0]] = item[1]
//     })

//     // console.log([...formData.entries()])--2ci usul

//     console.log(forInfo)
//     console.log('rabotayet')
//     console.log(obj)
// })





// --------------------------------------------------------
// zadaca 2 -deyerini -asagidai dive yaziriq

// let send = document.querySelector('#send')
// let list = document.querySelector('#list')

// let form = document.querySelector('form')

// let inputs = document.querySelectorAll('.userName')


// form.addEventListener('submit', function(ev) {
//     ev.preventDefault()
//     let formData = new FormData(this)
//     let formInfo = [...formData]
//     let obj = {}
//     console.log([...formData.entries()])
//     formInfo.forEach((item) => {
//         obj[item[0]] = item[1]
//     })

//     for (const key in obj) {       
//         const element = obj[key];          
//         let p = document.createElement('p')
//         p.innerHTML = `<span>${key}</span>---<span>${element}</span>`
//         list.appendChild(p)
// }
// })






// --------------------------------------------------------
// zadaca 3 -


let send = document.querySelector('#send')
let list = document.querySelector('#list')

let form = document.querySelector('form')

let inputs = document.querySelectorAll('.userName')





form.addEventListener('submit', function(ev) {
    ev.preventDefault()
    let formData = new FormData(this)
    let formInfo = [...formData]
    formInfo = formInfo.map((item) => {
        let element = item
        return element
    })
    let obj = {}
    
    formInfo.forEach((item) => {
        obj[item[0]] = item[1]
    })

    for (const key in obj) {       
            const element = obj[key];          
            let p = document.createElement('p')
            p.innerHTML = `<span>${key}</span><span>${element}</span>`
            list.appendChild(p)
    }
})











