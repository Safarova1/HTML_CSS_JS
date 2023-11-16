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







let my_home = []

shopGoods.forEach((item) => {
    item.products.forEach((itemGoods) => {
        my_home.push(itemGoods)
    })
})












// eshyalarim

let home = document.querySelector('#home')
let list_home = document.querySelector('#list_home')








function show() {
    my_home.forEach((items, index) => {
        let list_hitem = document.createElement('li')
        list_hitem.innerHTML = `
        <p>${items.product_name}</p>
        <p>${items.product_description}</p>
        <p>${items.product_price} AZN</p>
        <p><button class="add" onclick="add_bag(${index})">sebete elave et</button>
        <button class="delete" onclick="delete_home(${index})">X</button></p>`
        list_home.appendChild(list_hitem)
    })
}

show()




function delete_home(index) {
    list_home.innerHTML = ''
    my_home.splice(index, 1)
    show()
}











//sebetim
let bag = document.querySelector('#bag')
let list_bag = document.querySelector('#list_bag')





let my_bag = []

function show_bag() {

    my_bag.forEach((item, index) => {
        let list_item = document.createElement('li')
        list_item.innerHTML = `
        <p>${item.product_name}</p>
        <p>${item.product_description}</p>
        <p>${item.product_price} AZN</p>
        <button class="delete" onclick="delete_bag(${index})">X</button>
        `
        list_bag.appendChild(list_item)
    })
}









function add_bag(index) {
    if (my_bag.includes(my_home[index])) {

    } else {
        let obj = my_home[index]
        my_bag.push(obj)
        console.log(my_bag)
        list_bag.innerHTML = ''
        show_bag()
    }
}




function delete_bag(index) {
    list_bag.innerHTML = ''
    my_bag.splice(index, 1)
    show_bag()
}













//axtaris
let search = document.querySelector('#search')
let list_search = document.querySelector('#list_search')

function search_filter() {
    list_search.innerHTML = ''
    let input = prompt('axtaris edeceyiniz malin adini qeyd edin mes.Qadın eteyi ')

    let my_search = []
    my_home.forEach((item, index) => {

        if (item.product_name == input) {
            let obj = my_home[index]
            my_search.push(obj)
            console.log(my_search)


            let list= document.createElement('li')
            list.innerHTML = `
                <p>${item.product_name}</p>
                <p>${item.product_description}</p>
                <p>${item.product_price} AZN</p>
                <button class="add" onclick="add_bag(${index})">sebete elave et</button>
                `
                list_search.appendChild(list)

        }
    })

}

search.addEventListener('click', search_filter)













//menunun duymeleri
home.addEventListener('click', function () {
    list_bag.style = 'display:none;'
    list_search.style = 'display:none;'
    list_home.style = 'display:grid;'
})

bag.addEventListener('click', function () {
    list_home.style = 'display:none;'
    list_search.style = 'display:none;'
    list_bag.style = 'display:grid;'
})


search.addEventListener('click', function () {
    list_home.style = 'display:none;'
    list_bag.style = 'display:none;'
    list_search.style = 'display:grid;'
})



