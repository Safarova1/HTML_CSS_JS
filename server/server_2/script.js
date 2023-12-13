//melumati yaratdiq postla


// fetch("http://127.0.0.1:3002/user/signup", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         "username": "admin",
//         "email": "admin@gmail.com",
//         "password": "admin123456"
//     })
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log(err)
// })
// .finally(() => {
//     console.log("finally")
// })

// // JSON.stringify -> {} ==> "{}"
// // JSON. parse -> "{}" ==> {}















//---------------------------------------------------

//aid olan melumati qaytarir

// fetch("http://127.0.0.1:3002/user/profile", {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzlkNDFiNGU3MmI2YjYyZTgwZjNkMSIsInVzZXJuYW1lIjoidXNlcjEiLCJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImlhdCI6MTcwMjQ4MzE2NCwiZXhwIjoxNzAyNTE5MTY0fQ.shC5V1UEU2FlNQ-XqpxpfQTVGKUz42a_VFOdrpJceqd-o9SOUFqd-k78eDm6I67-9DPm-sreRzVH22kjKGh_SQ"
//     }
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log(err)
// })
// .finally(() => {
//     console.log("finally")
// })

// // JSON.stringify -> {} ==> "{}"
// // JSON. parse -> "{}" ==> {}











//---------------------------------------------------
//melumatlar token-e yazilsin


// const form = document.querySelector("#signup")
// const loginForm = document.querySelector("#login")


// form.addEventListener('submit', function (event) {
//     event.preventDefault()
//     console.log(event.target)


//     let form = new FormData(event.target)
//     fetch("http://127.0.0.1:3002/user/signup", {
//         method: "POST",
//         body: form



//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             alert("Signed up")
//         })
//         .catch(err => {
//             console.log(err)
//         })
//         .finally(() => {
//             console.log("finally")
//         })
// })






// loginForm.addEventListener('submit', function (event) {
//     event.preventDefault()
//     console.log(event.target)


//     let form = new FormData(event.target)
//     fetch("http://127.0.0.1:3002/user/login", {
//         method: "POST",
//         body: form



//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             //{token : 'xxxx'}
//             localStorage.setItem("token",data.token)
//             alert("Signed up")
//         })
//         .catch(err => {
//             console.log(err)
//         })
//         .finally(() => {
//             console.log("finally")
//         })
// })














//---------------------------------------------------------------------
//yeniledikde oklediyimiz login acilsin
// const form = document.querySelector("#signup")
// const loginForm = document.querySelector("#login")

// form.addEventListener('submit', function(event){
//     event.preventDefault()
//     let form = new FormData(event.target)
//   fetch("http://127.0.0.1:3002/user/signup", {
//     method: "POST",
//     body: form
  
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data)
//     alert("Signed up")
// })
// .catch(err => {
//     console.log(err)
// })
// .finally(() => {
//     console.log("finally")
// })
// })
// loginForm.addEventListener('submit', function(event){
//     event.preventDefault()
//     let form = new FormData(event.target)
//   fetch("http://127.0.0.1:3002/user/login", {
//     method: "POST",
//     body: form
 
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data)
//     localStorage.setItem("token", data.token)
//     document.location.reload()
// })
// .catch(err => {
//     console.log(err)
// })
// .finally(() => {
//     console.log("finally")
// })
// })

// document.addEventListener("DOMContentLoaded", (event)=> {
//     let token = localStorage.getItem("token")
//     fetch("http://127.0.0.1:3002/user/profile", {
//     method: "GET",
//     headers: {
//         "Authorization": `Bearer ${token}`
//     },
// })
// .then(response => response.json())
// .then(data => {
//     form.style.display ="none"
//     loginForm.style.display ="none"

//     const logoutButton = document.createElement("button")
//     logoutButton.textContent = "Logout"
     
//     logoutButton.addEventListener('click', function() {
//         localStorage.removeItem('token')
//         document.location.reload()
//     } )
    
//     let h1element = document.createElement("h1")
//     h1element.textContent = `Hello ${data.email}`
//     document.body.appendChild(h1element)
//     document.body.appendChild(logoutButton)
   
// })
// .catch(err => {
//     form.style.display ="block"
//     loginForm.style.display ="block"
//     console.log(err)
// })
// .finally(() => {
//     console.log("finally")
// })
// })



















//---------------------------------------------------------------------

















