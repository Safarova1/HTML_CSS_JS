
let cop = document.querySelector('#cop')

let list = document.querySelector('#list')
let loading = document.querySelector('#loading')
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let oneNav = document.querySelector('#oneNav')
let twoNav = document.querySelector('#twoNav')
let threeNav = document.querySelector('#threeNav')
let plus = document.querySelector('#plus')
let num = document.querySelector('#num')


let body = document.querySelector('body')

// let el = document.querySelector('#el')
// let onTop = document.querySelector('#onTop')


// let flag = false

// el.addEventListener('mousedown', function () {
//     flag = true
//     console.log(flag)



//     div.addEventListener('mousemove', function (ev) {
//         console.log(flag)
//         let x = ev.pageX
//         let y = ev.pageY
//         if (x > 350) {
//             x = 350
//         }
//         if (y > 350) {
//             y = 350
//         } if (flag) {

//             el.style = `transform:translate(${x}px,${y}px)`
//         }
//     })

// })

// el.addEventListener('mouseup', function () {
//     flag = false
//     console.log(flag)
// })

// console.log(window)
// let start = 0
// let end = 20
// newArr = comments.slice(start, end)
// function show() {
//     list.innerHTML = ''
// comments.forEach(element => {
//     let li = document.createElement('li')
//     li.innerHTML = `<p>${element.title}</p><p>${element.body}</p>`
//     list.appendChild(li)
// });
// }

// show()

// window.addEventListener('scroll', function () {
//     console.log(window.innerHeight, 'window.innerHeight')
//     console.log(window.scrollY, 'window.scrollY')
//     console.log(document.body.offsetHeight, 'document.body.offsetHeight')

//     if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight) 
//     && newArr.length !== comments.length) {
//         end += 20
//         newArr = comments.slice(start, end)
//         loading.style = 'display:flex'
//         setTimeout(() => {
//             show()
//             loading.style = 'display:none'
//         }, 1000)

//     }

// })

// let current
// let next
// let sum = next


// oneNav.addEventListener('click', function () {
//     next = one.getBoundingClientRect().y + window.scrollY
//     current = sum
//     let time = setInterval(() => {
//         next = - 1
//         window.scroll(0, next)

//         if (next > current) {
//             clearInterval(time)
//         }
//     }, 0.1);
// })
// twoNav.addEventListener('click', function () {
//     next = two.getBoundingClientRect().y + window.scrollY
//     current = sum

//     let time = setInterval(() => {
//         next = - 1
//         window.scroll(0, next)
//         if (next > current) {
//             clearInterval(time)
//         }
//     }, 0.1);
// })
// threeNav.addEventListener('click', function (ev) {
//     next = three.getBoundingClientRect().y + window.scrollY
//     current = sum

//     let time = setInterval(() => {
//         next = - 1
//         window.scroll(0, next)
//         if (next > current) {
//             clearInterval(time)
//         }

//     }, 1000);
// })
// let i = 0
// let flag = false
// plus.addEventListener('mousedown', function(){
//      flag = true
//      let time = setInterval(() => {
//      i++
//      num.innerText = i
//         if(flag === false){
//             clearInterval(time)
//             flag = true
//         }
//      })
// })

// plus.addEventListener('mouseup', function(){
//     flag = false
// })

// console.log(plus.getBoundingClientRect().x)

console.log($('#one').offset())
console.log($('html, body').animate({
    scrollTop: $('#one').offset().top
  }, 1000))

$('#oneNav').click(function (e) {
    $('html, body').animate({
      scrollTop: $('#one').offset().top
    }, 1000);
  });

  $('#twoNav').click(function (e) {
    $('html, body').animate({
      scrollTop: $('#two').offset().top
    }, 1000);
  });

  $('#threeNav').click(function (e) {
    $('html, body').animate({
      scrollTop: $('#three').offset().top
    }, 1000);
  });

  document.addEventListener('keydown', function(ev){
    console.log(ev.location)
    console.log(ev.key)
  })

 
  cop.addEventListener("click", function(event) {
        navigator.clipboard.writeText(cop.innerText)
  });


























// kohne usul
  
//   document.addEventListener('keydown', function(ev){
//     console.log(ev.location)
//     console.log(ev.key)
//   })

//   cop.onclick = function() {
//     document.execCommand("copy");
//   }
  
//   document.addEventListener("copy", function(event) {
//     event.preventDefault();
//     if (event.clipboardData) {
//       event.clipboardData.setData("text/plain", cop.innerHTML);
//       console.log(event.clipboardData.getData("text"))
//     }
//   });