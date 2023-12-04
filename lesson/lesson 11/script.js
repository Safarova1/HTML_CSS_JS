// let text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate q'

// let p = document.querySelector('#con')
// let textArray = text.split('')

// let i = 0

// let timer = setInterval(() => {
//     let word = documentc.createElement('span')
//     word.innerText = textArray[i]
//     p.appendChild(word)
//     i++
//     if (i === textArray.length) {
//         clearInterval(timer)
//     }
// })














//-----------------------------------------------------------------------------
// let text = 'Lorem ipsum'
// let p = document.querySelector('#con')

// let arr = []
// let flag = false
// let i = 0

// function showwords() {
//     p.innerHTML = ''
//     arr.forEach((item) => {
//         let word = document.createElement('span')
//         word.innerText = item
//         p.appendChild(word)
//     })
// }
// setInterval(() => {
//     if (flag === false) {
//         arr.push(text[i])
//         i++

//         if (i === text.length) {
//             flag = true
//             console.log(flag)
//         }
//     }
//     else if (flag === true) {
//         arr.pop()
//         i--

//         if (i === 0) {
//             flag = false
//         }
//     }
//     showwords()
// }, 200)











//-----------------------------------------------------------------------------
let myForm = document.querySelector("#myform")
let userName = document.querySelector('#username')

myForm.addEventListener('click', function (ev) {
    ev.preventDefault()
    console.log(userName.value)
})


document.addEventListener('keypress', function (ev) {
    if (ev.key === ' Enter') {
        console.log(userName.value)
    }
}
)


//-----------------------------------------------------------------------------














