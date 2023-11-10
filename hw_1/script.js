// zadaca 1 -- her defe islesin 1 ci usul-funkciya

// let showButton = document.getElementById('showAlert')

// console.log(showButton)

// const show = () => {
//     alert('hello')
// }




// zadaca 2 -- her defe islesin 2ci usul -addEventListener

// let showwButton = document.getElementById('showwAlert')
// showwButton.addEventListener('click', show)





// zadaca 3  -- 1defe islesin - removeEventListener

// let showBButton = document.getElementById('showAAlert')

// let flag = false
// console.log(flag)

// const showw = () => {
//     alert('hello')
//     flag = true
//     console.log(flag)

//     if (flag) {
//         console.log(flag)
//         showBButton.removeEventListener('click', showw)
//     }
// }

// showBButton.addEventListener('click', showw)




//zadaca 4  -- 1rini dondurur qalani qalir - target



// let sB = document.querySelectorAll('.goodsButton')

// const sh = (event) => {

//     // event.target.disabled = true  //yandir -1rine aid olsun
//     event.target.style = 'background-color: pink;'

//     sB.forEach(element => {
//         // element.removeEventListener('click', sh)  //yandir -1rine aid olsun

//         element.target.disabled = true  //--hamisina aid olsun
//     })
// }

// sB.forEach(element => {
//     element.addEventListener('click', sh)
// })



//this ile

// function sh(event) {
//     this.style = 'background-color: yellow;'

// }








//zadaca 5


// let myImage = document.getElementById('image')
// let normal = document.getElementById('normal')
// let revert = document.getElementById('revert')








// let i = 0
// const revert180 = () => {    
//     i += 20
//     myImage.style = `transform:rotate(${i}deg);`
// }


// revert.addEventListener('click',revert180 )






//coxlu tekrarliyir normal dayandirir  -- className
// let myImage = document.getElementById('image')
// let normal = document.getElementById('normal')
// let revert = document.getElementById('revert')





// const normal0 = () => {    
//     myImage.className = ''
// }

// const revert180 = () => {    
//     myImage.className = 'image-rotate'
// }

// revert.addEventListener('click',revert180 )
// normal.addEventListener('click',normal0 )










//zadaca 6


let myImage = document.getElementById('image')
let normal = document.getElementById('normal')
let revert = document.getElementById('revert')


const normal0 = () => {
    myImage.classList.remove('image-rotate')
}

const revert180 = () => {
    myImage.classList.add('image-rotate')
}


revert.addEventListener('click', revert180)
normal.addEventListener('click', normal0)

