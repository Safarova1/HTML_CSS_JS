let form = document.querySelector('form')
let list = document.querySelector('#list')

form.addEventListener('submit', function (ev) {
    ev.preventDefault()

    let formData = new FormData(this)
    let formInfo = [...formData]

    let obj = {}
  
    formInfo.forEach((item) => {
        obj[item[0]] = item[1]
    })
    
  for (const key in obj) {
        const element = obj[key];
        let p = document.createElement('p')
        p.innerHTML = `${key} - ${element}`
        list.appendChild(p)
    }
})
















