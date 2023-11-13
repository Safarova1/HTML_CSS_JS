let shopGoods = [
    {
        "store_name": "Moda Dünyası",
        "store_address": "Bakı şəhəri, Nizami kuçəsi 5",
        "products": [
            { "product_name": "Kişi köynəyi", "product_description": "Mavi rəngdə, 100% pamuk", "product_price": 50 },
            { "product_name": "Qadın bluzası", "product_description": "Dəri detallı, qara rəngdə", "product_price": 60 },
            { "product_name": "Kişi pantolonu", "product_description": "Qəhvəyi rəng, kənar cebi", "product_price": 75 },
            { "product_name": "Qadın eteyi", "product_description": "Qırmızı rəng, mini", "product_price": 40 },
            { "product_name": "Kişi dəsmalı", "product_description": "Nəqşdar dizayn", "product_price": 20 },
            { "product_name": "Qadın çantası", "product_description": "Əlgötürən, dəri", "product_price": 90 },
            { "product_name": "Kişi botları", "product_description": "Qış üçün, suya davamlı", "product_price": 120 },
            { "product_name": "Qadın ayaqqabıları", "product_description": "Yüksək tapan, lacivərt", "product_price": 85 },
            { "product_name": "Kişi papağı", "product_description": "Qara rəngdə, dəri", "product_price": 45 },
            { "product_name": "Qadın şalvarı", "product_description": "Göy rəngdə, kaşmir", "product_price": 70 }
        ]
    },
    {
        "store_name": "Zərif Moda",
        "store_address": "Bakı şəhəri, 28 May kuçəsi 12",
        "products": [
            { "product_name": "Kişi palto", "product_description": "Süət dəri, qara rəngdə", "product_price": 250 },
            { "product_name": "Qadın jaketi", "product_description": "Uzun, qaşqır", "product_price": 200 },
            { "product_name": "Kişi kəməri", "product_description": "Dəri, metal tokalı", "product_price": 40 },
            { "product_name": "Qadın badlonu", "product_description": "Retro stil, qızıl rəngdə", "product_price": 180 },
            { "product_name": "Kişi şortu", "product_description": "Spor stil, elastik", "product_price": 60 },
            { "product_name": "Qadın maykası", "product_description": "Boyalı nəqş, pamuklu", "product_price": 45 },
            { "product_name": "Kişi saatı", "product_description": "Qara rəngdə, analog", "product_price": 150 },
            { "product_name": "Qadın bəzək", "product_description": "Qızıl, komplekt", "product_price": 220 },
            { "product_name": "Kişi atkısı", "product_description": "Xəzəl rəng, uzun", "product_price": 35 },
            { "product_name": "Qadın bantı", "product_description": "Metal detallı, elastik", "product_price": 50 }
        ]
    },
    {
        "store_name": "Əliyev Moda Mərkəzi",
        "store_address": "Bakı şəhəri, Azadlıq prospekti 89",
        "products": [
            { "product_name": "Kişi kostyumu", "product_description": "İki parçalı, qara rəngdə", "product_price": 320 },
            { "product_name": "Qadın kombinezonu", "product_description": "Yaz üçün, açıq rəng", "product_price": 150 },
            { "product_name": "Kişi sviteri", "product_description": "Düz rəng, yüngül", "product_price": 70 },
            { "product_name": "Qadın ziyafət geyimi", "product_description": "Düzənşən, yaz üçün", "product_price": 95 },
            { "product_name": "Kişi sport formaları", "product_description": "Spandex, idman üçün", "product_price": 55 },
            { "product_name": "Qadın bikini", "product_description": "Tropik nəqş, elastik", "product_price": 45 },
            { "product_name": "Kişi çantası", "product_description": "Dizayner, əsas bölməsi", "product_price": 100 },
            { "product_name": "Qadın ətri", "product_description": "Gül ətri, uzunömürlü", "product_price": 80 },
            { "product_name": "Kişi şalı", "product_description": "Səliqəli, çoxrəngli", "product_price": 25 },
            { "product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65 }
        ]
    }
]




//elave etmek
// let list = document.querySelector('#list')
// let add = document.querySelector('#add')

// function show(){
//     shopGoods.forEach((item) => {
//         item.products.forEach((itemGooods) => {
//            let listItem = document.createElement('li')
//         //    listItem.innerText = `${itemGooods.product_name} - ${itemGooods.product_description} - ${itemGooods.product_price} AZN`
//            listItem.innerHTML = `<p>${itemGooods.product_name}</p><p>${itemGooods.product_description}</p><p><span>${itemGooods.product_price}</span> AZN</p>`  //spani en son array ucun etdim
//            list.appendChild(listItem)
//         })
//     })
// }
// show()

// add.addEventListener('click', function(){
//     list.innerHTML = ''  //listi bosaldiriq
//     shopGoods[2].products.push({"product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65})
//     show()
//     console.log(shopGoods[2].products)
// })



// // siyahidan 1ci elementi gotururem
// let firstElement = document.querySelector('#list li:first-child')
// let allList = document.querySelectorAll('#list li')



// console.log(allList[1])
// console.log(firstElement)
// console.log(firstElement.parentElement)
// console.log(firstElement.nextSibling)
// console.log(firstElement.previousSibling)
// console.log(firstElement.parentElement.firstElementChild)
// console.log(firstElement.parentElement.lastElementChild)




// let newArr = Array.from(allList)
// newArr.sort((a,b)=>a.lastElementChild.firstElementChild.innerText -b.lastElementChild.firstElementChild.innerText)  //spani bunun i=ucun etdim
// list.append(...newArr)
// console.log(newArr)


//--------------------------------------------------------------------------------------------------------------------
// sort


// let firstElement = document.querySelector('#list li:first-child')
// let allList = document.querySelectorAll('#list li')
// let sort = document.querySelector('#sort')

// let flag = false
// sort.addEventListener('click', function(){
//     let newArr = Array.from(allList)
//     if(flag === false){
//         newArr.sort((a,b) => a.lastElementChild.firstElementChild.innerText - b.lastElementChild.firstElementChild.innerText)
//         flag = true
//     }
//     else if(flag === true){
//         newArr.sort((a,b) => b.lastElementChild.firstElementChild.innerText - a.lastElementChild.firstElementChild.innerText)
//         flag = false
//     }
//     list.append(...newArr)

// })



















//--------------------------------------------------------------------------------------------------------------------

// let list = document.querySelector('#list')




// //massivi gostermek
// function show(){
//     shopGoods.forEach((item) => {
//         item.products.forEach((itemGooods) => {
//            let listItem = document.createElement('li')
//            listItem.innerHTML = `<p>${itemGooods.product_name}</p><p>${itemGooods.product_description}</p><p><span>${itemGooods.product_price}</span><span> AZN</span></p>`
//            list.appendChild(listItem)
//         })
//     })
// }
// show()









// //massive elave etmek
// let add = document.querySelector('#add')


// add.addEventListener('click', function(){
//     list.innerHTML = ''
//     shopGoods[2].products.push({"product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65})
//     console.log(shopGoods[2].products)
// })










// //massivi sortlamaq


// let sort = document.querySelector('#sort')
// let sortPointer = document.querySelector('#sort span')


// let flag = false
// sort.addEventListener('click', function(){
//     let newArr = []
//     shopGoods.forEach((item) => {
//         item.products.forEach((itemGoods) => {
//            newArr.push(itemGoods)
//         })
//     })
//     if(flag === false){
//         newArr.sort((a,b) => a.product_price - b.product_price)
//         flag = true
//         sortPointer.style = 'transform: rotate(90deg);'
//     }
//     else if(flag === true){
//         newArr.sort((a,b) => b.product_price - a.product_price)
//         flag = false
//         sortPointer.style = 'transform: rotate(-90deg);'
//     }
//     list.innerHTML = ''
//     newArr.forEach((itemGooods) => {
//         let listItem = document.createElement('li')
//         listItem.innerHTML = `<p>${itemGooods.product_name}</p><p>${itemGooods.product_description}</p><p><span>${itemGooods.product_price}</span><span> AZN</span></p>`
//         list.appendChild(listItem)
//      })
// })
























//--------------------------------------------------------------------------------------------------------------------
// indexse uygun silmek





// //teze massiv yaratdim -icine mallari elave etdim

// let newArr = []
// shopGoods.forEach((item) => {
//     item.products.forEach((itemGoods) => {
//         newArr.push(itemGoods)
//     })
// })

// //siyahima bir button elave etdim x -- onada index verdim

// let list = document.querySelector('#list')
// let add = document.querySelector('#add')

// function show() {
//     newArr.forEach((itemGooods, index) => {
//         let listItem = document.createElement('li')
//         listItem.innerHTML = `<button onclick="deleteGooods(${index})">X</button><p>${itemGooods.product_name}</p><p>${itemGooods.product_description}</p><p><span>${itemGooods.product_price}</span><span> AZN</span></p>`
//         list.appendChild(listItem)
//     })
// }

// show()



// //silmek ucun
// function deleteGooods(index) {
//     list.innerHTML = ''
//     newArr.splice(index, 1)
//     show()
// }



// //elave etmek ucun
// add.addEventListener('click', function () {
//     list.innerHTML = ''
//     newArr.push({ "product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65 })
//     show()
// })



// //sort elemek ucun
// let sort = document.querySelector('#sort')
// let sortPointer = document.querySelector('#sort span')

// let flag = false
// sort.addEventListener('click', function () {
//     if (flag === false) {
//         newArr.sort((a, b) => a.product_price - b.product_price)
//         flag = true
//         sortPointer.style = 'transform: rotate(90deg);'
//     }
//     else if (flag === true) {
//         newArr.sort((a, b) => b.product_price - a.product_price)
//         flag = false
//         sortPointer.style = 'transform: rotate(-90deg);'
//     }
//     list.innerHTML = ''
//     show()
// })














//--------------------------------------------------------------------------------------------------------------------





//v massiv vse zapisivayu
let newArr = []
shopGoods.forEach((item) => {
    item.products.forEach((itemGoods) => {
        newArr.push(itemGoods)
    })
})



//pokazivayu massiv v spiske  i sapisivayu v spisok  vse

let list = document.querySelector('#list')


function show() {
    newArr.forEach((itemGooods) => {
        let listItem = document.createElement('li')
        listItem.innerHTML = `<p>${itemGooods.product_name}</p><p>${itemGooods.product_description}</p><p><span>${itemGooods.product_price}</span><span> AZN</span></p>`
        list.appendChild(listItem)
    })
}

show()






//esli likali to 
let sort = document.querySelector('#sort')

let klik = 'artan'
sort.addEventListener('click', function () {

    if (klik == 'artan') {
        newArr.sort((a, b) => a.product_price - b.product_price)
        klik = 'azalan'
    } else {
        newArr.sort((a, b) => b.product_price - a.product_price)
        klik = 'artan'
    }
    list.innerHTML=''
    show()
})




//udalit
// let del = document.querySelector('#del')




// del.addEventListener('click', function(){

  

// })