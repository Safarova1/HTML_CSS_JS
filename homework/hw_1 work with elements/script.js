let button = document.getElementById('list')
let div = document.getElementById('productList')
let element = document.querySelectorAll('.item')


let klik = false

const show = () => {

    if (klik) {
        div.style = 'display: none;'


    } else {
        div.style = 'display: block;'

        let list_element = document.querySelectorAll('li')



//obyektle parametrini yoxluyub active olub olmadugunu yoxla
        // let sec = false

        // const secim = (event) => {

        //     if (sec) {
        //         event.target.style = 'text-decoration: none;'
                

        //         list_element.forEach((item) => {
        //             item.removeEventListener('click', secim)
        //         })

        //     } else {
        //         event.target.style = 'text-decoration: line-through;'
                

        //     }
        //     sec = !sec
        //     secim()

        // }

      



    }
    klik = !klik

}



button.addEventListener('click', show)
