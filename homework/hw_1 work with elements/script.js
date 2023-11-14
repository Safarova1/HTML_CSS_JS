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




        // let allList = document.querySelector('#item li')
        // allList.forEach((item){
        //     console.log(item)
        // })








        // let chooseItem = document.getElementById('item')

        // const bas = (event) => {
        //     console.log(event.target)

        //     event.target.style = 'background-color:red;'
        //     chooseItem.forEach((item) => {
        //         item.removeEventListener('click', bas)
        //     })
        // }


        // chooseItem.forEach((item) => {

        //     item.addEventListener('click', bas)
        // })




        // const style = () => {
        //     item.style = ' text-decoration: line-through;'
        // }
        // chooseItem.forEach((item) => {
        //     item.removeEventListener('click', style)
        // })



        // const choose = () => {
        //     item.target.style = 'background-color: pink;'

        //     if (flag) {
        //         console.log(flag)
        //         chooseItem.removeEventListener('click', choose)
        //     }
        // }
        klik = true
    }

}



button.addEventListener('click', show)
