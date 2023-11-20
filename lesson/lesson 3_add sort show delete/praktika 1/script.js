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

let sort = document.querySelector('#sort')
let sortPointer = document.querySelector('#sort span')
let goods = document.querySelector('#goods')
let bag = document.querySelector('#bag')
let totalBag = document.querySelector('#totalBag')

let bagList = document.querySelector('#bagList')
let bagPage = document.querySelector('#bagPage')

let total = 0
let myBag = []

let newArr = []
shopGoods.forEach((item) => {
    item.products.forEach((itemGoods) => {
        newArr.push(itemGoods)
    })
})

let list = document.querySelector('#list')
let add = document.querySelector('#add')

function show() {
    newArr.forEach((itemGooods, index) => {
        let listItem = document.createElement('li')
        listItem.innerHTML = `<button class="delete" onclick="deleteGooods(${index})">X</button><p>${itemGooods.product_name}</p><p>${itemGooods.product_description}</p><p><span>${itemGooods.product_price}</span><span> AZN</span><button onclick="addGoods(${index})">ADD</button></p>`
        list.appendChild(listItem)
    })
}

show()

function deleteGooods(index) {
    list.innerHTML = ''
    newArr.splice(index, 1)
    show()
}




function showBag(){
    sum()
    myBag.forEach((item,index) => {
        let listItem = document.createElement('li')
        listItem.innerHTML = `<button class="delete" onclick="deleteBagGooods(${index})">X</button><p>${item.product_name}</p><p>${item.product_description}</p><p><span>${item.product_price}</span><span> AZN</span></p><button class="delete" onclick="encrease(${index})">-</button><button class="delete" onclick="decrease(${index})">+</button><p>${item.totalSum}</p>`
        bagList.appendChild(listItem)
    })
}



function sum(){
    total = 0
    for (let index = 0; index < myBag.length; index++) {
        const element = myBag[index];
        total += element.totalSum
    }
    totalBag.innerText = total
}


function deleteBagGooods(index) {
    bagList.innerHTML = ''
    myBag.splice(index, 1)
    showBag()
}
function addGoods(index) {
    if(myBag.includes(newArr[index])){

    }else{
        let obj = newArr[index]
        obj.count = 1
        obj.totalSum = obj.count * obj.product_price
        myBag.push(obj)
        console.log(myBag)
        bagList.innerHTML = ''
        showBag()
    }
}

function encrease(index) {
    myBag[index].count =  myBag[index].count - 1
    myBag[index].totalSum = myBag[index].count * myBag[index].product_price
    bagList.innerHTML = ''
    showBag()
    console.log(myBag)
}

function decrease(index) {
    myBag[index].count =  myBag[index].count + 1
    myBag[index].totalSum = myBag[index].count * myBag[index].product_price
    bagList.innerHTML = ''
    showBag()
    console.log(myBag)
}

add.addEventListener('click', function () {
    list.innerHTML = ''
    newArr.push({ "product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65 })
    show()
})



goods.addEventListener('click', function () {
    list.style = 'display:grid;'
    bagPage.style = 'display:none;'
})

bag.addEventListener('click', function () {
    list.style = 'display:none;'
    bagPage.style = 'display:block;'
})




let flag = 1
sort.addEventListener('click', function () {
    if (flag === 1) {
        newArr.sort((a, b) => a.product_price - b.product_price)
        flag = true
        sortPointer.style = 'transform: rotate(90deg);'
    }
    else if (flag === true) {
        newArr.sort((a, b) => b.product_price - a.product_price)
        flag = 1
        sortPointer.style = 'transform: rotate(-90deg);'
    }
    list.innerHTML = ''
    show()
})








