

// let text = 'hello';

// let pattern = /[l]/g;   //-g butun h lari oxuyur -g-siz 1rini

// let reg = text.match(pattern)
// console.log(reg)

// -------------------------------------------

// let text = 'hello';
// let patternNo = /[^l]/g;  


// let regNo = text.match(patternNo)
// console.log(regNo)

// let testNo = patternNo.test(text) // true false --var yoxdu onu gosterir
// console.log(testNo)



//-------------------------------------------------------------------------
2
// let text = "Is this all there is?";
// let pattern = /[^h]/g;
// let result = text.match(pattern).join('');

// console.log(result)




//-------------------------------------------------------------------------

// let input = 'LO'
// let t = `${input}\\B`    
// let text = "HELLO, LOOK LOOK AT YOU!"; 
// let pattern = new RegExp(t) ;
// let result = text.search(pattern);

// console.log(result)



//-------------------------------------------------------------------------

// let text = "The best things in life are free";
// let result = /es/.exec(text);
// console.log(result)


// console.log(result[0], result.input, result.index)
// document.getElementById("demo").innerHTML = result;






//-------------------------------------------------------------------------

// let text = "444 11 4 55 44 22 44 "; 
// let pattern = /4+/g;
// let result = text.match(pattern);


// console.log(result)




//-------------------------------------------------------------------------
// let input = 'laptop'
// let t = `${input}\(?= Microsoft)`
// let text = "Is thiss laptop Microsoft all there iss all laptop Microsoft";

// let pattern = new RegExp(t,'gi') ;

// let result = text.match(pattern);


// console.log(result)






//-------------------------------------------------------------------------

// let ar = ['laptop', 'telephone', 'PC']
// let m = 'Microsoft'


// ar.forEach((item) => {
//     let t = `${item}\(?= ${m})`
//     let text = "PC Microsoft Is telephone Microsoft thiss laptop Microsoft all laptop Samsung there laptop Apple iss all laptop Microsoft";

//     let pattern = new RegExp(t,'gi') ;

//     let result = text.match(pattern);
//     result.forEach((itemEl) => {
//         console.log(itemEl)
//     })

// })









//-------------------------------------------------------------------------

// let text = "Visit W3Schools.\nLearn JavaScript."; 
// let pattern = /\n/;
// let result = text.search(pattern);
// console.log(text)
// console.log(text[17])
// document.getElementById("demo").innerHTML = result;











//-------------------------------------------------------------------------
// praktika1




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






let input = document.querySelector('input')

document.addEventListener('keydown', function (ev) {
    let text = document.getElementById('elem1').value;
    
    if (ev.key == 'Enter') {
        let reg = new RegExp(text, 'i')
        shopGoods.forEach((element) => {
            if (reg.test(element.store_name)) {
                console.log(element.products)
            }
        })
    }
})




