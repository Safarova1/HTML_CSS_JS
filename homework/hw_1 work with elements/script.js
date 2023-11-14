let button = document.getElementById('list')
let div = document.getElementById('productList')
let element = document.querySelectorAll('.item')


let klik = false

const show = () => {

    if (klik) {
        div.style = 'display: none;'
        klik = false
    } else {
        div.style = 'display: block;'

        const style = () => {
            element.style = ' text-decoration: line-through;'
        }
        element.forEach((item) => {
            item.removeEventListener('click', style)
        })
        klik = true
    }

}



button.addEventListener('click', show)
