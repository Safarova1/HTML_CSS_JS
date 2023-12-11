// fetch('https://www.naijatechnews.com')
//     .then((res) => {
//         if (!res.ok) {
//             console.log('xetaa')
//         }
//         else {
//             return res.json()
//         }
//     })  //sorgu gonderdik servere-emal edir
//     .then((data) => console.log(data)) //gosterir



//     .catch((err) => { console.log(err.name) }) //tolko imya eqo







//-----------------------------------------------------------------------
//     let send = document.querySelector('#send')
// let par = document.querySelector('#par')
// let list = document.querySelector('#list')


// let arr = [1,2,3,4,5,6,7,7,8,9,0,3,4,4,5,3]
// let goods = [{
//     product_name: "Qadın sutyeni",
//     product_description: "Destəklənmiş, rahat",
//     product_price: 65,
//     store_name: "Əliyev Moda Mərkəzi",
//     store_address: "Bakı şəhəri, Azadlıq prospekti 89",
//   }]
// send.addEventListener('click', function(){
//     arr.forEach((item) => {
//         let span = document.createElement('span')
//         span.innerText = item
//         par.appendChild(span)
//     })
// })

// fetch('http://localhost:5000/goods')
// .then((res) => {
//     // if(!res.ok){
//     //     console.log('XETAAA!')
//     // }else if(res.ok){
//     //     console.log('OK')
//         return res.json()

// })
// .then((data) =>{
//     data.forEach((item) => {
//         goods.push(item)
//         // let li = document.createElement('li')
//         // li.innerText = item.product_name
//         // list.appendChild(li)
//     })
// })
// .catch((err) => console.log(err.name))

// console.log(goods)
// goods.forEach((item) => {
//     let li = document.createElement('li')
//     li.innerText = item.product_name
//     list.appendChild(li)
// })


















//-----------------------------------------------------
// let object = document.querySelector('#object')

// // let arr = ['id','name','username',e]



// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => {

//         data.forEach((element) => {

    



//             let id = document.createElement('p')
//             id.innerHTML = `id = ${element.id} `

//             let name = document.createElement('p')
//             name.innerHTML = `name = ${element.name} `

//             let username = document.createElement('p')
//             username.innerHTML = `username = ${element.username} `

//             let email = document.createElement('p')
//             email.innerHTML = `email = ${element.email} `

//             let street = document.createElement('p')
//             street.innerHTML = `street = ${element.address.street} `




//             let suite = document.createElement('p')
//             suite.innerHTML = `suite = ${element.address.suite} `

//             let city = document.createElement('p')
//             city.innerHTML = `city = ${element.address.city} `

//             let zipcode = document.createElement('p')
//             zipcode.innerHTML = `zipcode = ${element.address.zipcode} `

//             let lat = document.createElement('p')
//             lat.innerHTML = `lat = ${element.address.geo.lat} `

            
//             let lng = document.createElement('p')
//             lng.innerHTML = `lng = ${element.address.geo.lng} `





//             let phone = document.createElement('p')
//             phone.innerHTML = `phone = ${element.phone} `

//             let website = document.createElement('p')
//             website.innerHTML = `website = ${element.website} `

//             let comname = document.createElement('p')
//             comname.innerHTML = `company name = ${element.company.name} `







//             object.appendChild(id)
//             object.appendChild(name)
//             object.appendChild(username)
//             object.appendChild(email)
//             object.appendChild(street)
//             object.appendChild(suite)
//             object.appendChild(city)
//             object.appendChild(zipcode)
//             object.appendChild(lat)
//             object.appendChild(lng)
           

//             object.appendChild(phone)
//             object.appendChild(website)
//             object.appendChild(comname)






//         });
//     })

//     .catch((err) => console.log(err.name))












//--------------------------------------------------------------------------------
//asan yolu
let send = document.querySelector('#send')
let par = document.querySelector('#par')
let list = document.querySelector('#list')




fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((item) => {
            let li = document.createElement('li')
            li.innerHTML = `<ul>
        <li>ID - ${item.id}</li>
        <li>Name - ${item.name}</li>
        <li>User Name - ${item.username}</li>
        <li>Email - ${item.email}</li>
        <li>Address <ul>
        <li>Street - ${item.address.street}</li>
        <li>Suite - ${item.address.suite}</li>
        <li>City - ${item.address.city}</li>
        <li>Zipcode - ${item.address.zipcode}</li>
        <li>Geo 
        <ul>
        <li>Geo lat - ${item.address.geo.lat}</li>
        <li>Geo lng - ${item.address.geo.lng}</li>

        </ul>
        </li>

        </ul></li>
        <li>Phone - ${item.phone}</li>
        <li>Website - ${item.website}</li>
        <li>Company 
        <ul>
        <li>Company Name - ${item.company.name}</li>
        <li>Company Catch Phrase - ${item.company.catchPhrase}</li>
        <li>Company BS - ${item.company.bs}</li>
        </ul>
        </li>
        </ul>`
            list.appendChild(li)
        })
    })
    .catch((err) => console.log(err.name))


















