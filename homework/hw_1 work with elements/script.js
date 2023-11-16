// zadaca1  -1ci usul


let geyimler_siyahi = ['Körpə Geyimi', 'Uşaq Geyimləri', 'Gənclərin Geyimi']

let button = document.getElementById('list')
let div = document.getElementById('productList')
let element = document.querySelectorAll('.item')


let list_element = document.querySelector('ul')
list_element.innerHTML = ''

geyimler_siyahi.forEach((item) => {
    let listItem = document.createElement('li')
    listItem.innerHTML = `${item} `
    list_element.appendChild(listItem)
})


let klik = false


const show = () => {

    if (klik) {
        div.style = 'display: none;'

    } else {
        div.style = 'display: block;'


        let element = document.querySelectorAll('li')

        element.forEach((item) => {

            item.style.textDecoration = 'none'

            let sec = false
           


            const secim = (event) => {
                let count = 0
                
                element.forEach((item) => {
                    if (item.style.textDecoration != 'none') {
                        count++
                    }
                    
                })
                

               

                if (count == 0) {
                    event.target.style = 'text-decoration: line-through;'
                    

                } else  {
                    event.target.style = 'text-decoration: none;'
                }
                sec = !sec
            }
            
            item.addEventListener('click', secim)

            


        })

    }

    klik = !klik
   
}


button.addEventListener('click', show)







// zadaca1  -2ci usul

// let button = document.getElementById('list')
// let div = document.getElementById('productList')
// let element = document.querySelectorAll('.item')


// let klik = false

// const show = () => {

//     if (klik) {

//         div.style = 'display: none;'

//     } else {

//         div.style = 'display: block;'

//         let list_element = document.querySelectorAll('li')
//         let sec = false

//         const secim = (event) => {
//             if (sec) {
//                 event.target.style = 'text-decoration: none;'
//                 list_element.forEach((item) => {
//                     item.removeEventListener('click', secim)
//                 })

//             } else {
//                 event.target.style = 'text-decoration: line-through;'
//             }
//             sec = !sec
//         }

//         list_element.forEach((item) => {
//             item.addEventListener('click', secim)

//         })
//     }

//     klik = !klik
// }


// button.addEventListener('click', show)