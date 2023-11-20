let send = document.querySelector('#send')
let form = document.querySelector('form')


let inputs = document.querySelector('.userName')



form.addEventListener('submit', function (ev) {
    ev.preventDefault()  //sehife yenilenir

    let formDate = new FormData(this)
    let forInfo = [...formDate]

    let obj = {}

    forInfo.forEach((item) => {
        obj[item[0]] = item[1]
    })


    console.log(forInfo)
    console.log('rabotayet')
    console.log(obj)
})









