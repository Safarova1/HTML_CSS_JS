// zadaca1
// let div  = document.querySelector('#list')



// div.addEventListener('mousemove', function(ev){
//     console.log(ev.offsetX,ev.offsetY)
// })











//----------------------------------------------------------------------------
// zadaca 2



//sehv
// let div  = document.querySelector('#list')
// let el  = document.querySelector('#el')


// div.addEventListener('mousemove', function(ev){
//     console.log(ev.offsetX,ev.offsetY)
//     el.style = `top:${ev.offsetY}px; left:${ev.offsetX}px;`

// })



//duzgun yol
// let div  = document.querySelector('#list')
// let el  = document.querySelector('#el')


// div.addEventListener('mousemove', function(ev){
//     console.log(ev.pageX,ev.pageY)
//     let x = ev.pageX
//     let y = ev.pageY
//     if(x > 350){
//         x = 350
//     }
//     if(y > 350){
//         y = 350
//     }
//     el.style = `transform:translate(${x}px,${y}px)`
// })





















//----------------------------------------------------------------------------
// zadaca 3





// let div  = document.querySelector('#list')
// let el  = document.querySelector('#el')


// div.addEventListener('mousemove', function(ev){
//     console.log(ev.offsetX,ev.offsetY)
//     let x = ev.offsetX
//     let y = ev.offsetY
//     // if(x > 350){
//     //     x = 350
//     // }
//     // if(y > 350){
//     //     y = 350
//     // }
//     // el.style = `width:${x}px;`
//     el.style = `width:${x}px;height:${y}px;`
// })

















//----------------------------------------------------------------------------
// zadaca 4 -klikleyenden sonra terfede bilim
// let div = document.querySelector('#list')
// let el = document.querySelector('#el')



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
//         } 
        
//         if (flag) {
//             el.style = `transform:translate(${x}px,${y}px)`
//         }
//     })

// })

// el.addEventListener('mouseup', function () {
//     flag = false
//     console.log(flag)
// })











//----------------------------------------------------------------------------
// zadaca 6



















