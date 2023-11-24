//1ci usul

// let up_button = document.querySelector('.up')
// let number = document.querySelector(".number")

// let count = 0
// number.innerHTML = `${count}`


// let flag = false


// up_button.addEventListener('mousedown', function () {
//     flag = true
// })


// let time = setInterval(()=>{
//     if (flag) {

//         count++
//         number.innerHTML = `${count}`

//     }else{
//         clearInterval(time)
//     }
// },1000)



// up_button.addEventListener('mouseup', function () {
//     flag = false

// })







//2ci usul
let up_button = document.querySelector('.up')
let number = document.querySelector(".number")

let count = 0
let flag = false

up_button.addEventListener('mousedown', function () {
    flag = true

    let time = setInterval(() => {
        count++
        number.innerText = count
        if (flag == false) {
            clearInterval(time)
        }

    }, 100);

})

up_button.addEventListener('mouseup', function () {
    flag = false

})