let button = document.getElementById('list')

let klik = true

const show = () => {
    let div = document.getElementById('productList')

    if (klik==true) {
        div.style = 'display: none;'
    } else {
        div.style = 'display: block;'  
    }

    klik = false
}

button.addEventListener('click', show)
