// const save = document.getElementById('save')
// const plus = document.getElementById('plus')
// const get = document.getElementById('get')

// const list = document.getElementById('list')


// let arr = [1, 2, 3, 4, 5]

// const saveDate = () => {
//     localStorage.setItem('goodArray', JSON.stringify(arr))
// }


// const getDate = () => {
//     list.innerHTML=''
//     let array = JSON.parse(localStorage.getItem('goodArray'))
//     array.forEach(item => {
//         let word = document.createElement('span')

//         word.innerText = item
//         list.appendChild(word)
//     });
// }


// const plusArray = () => {
//     let array = JSON.parse(localStorage.getItem('goodArray'))
//     array.push(array.at(-1) + 1)
//     localStorage.setItem('goodArray', JSON.stringify(array))

// }





// save.addEventListener('click', saveDate)
// get.addEventListener('click', getDate)
// plus.addEventListener('click', plusArray)








// const save = document.getElementById('save')
// const female = document.getElementById('female')
// const male = document.getElementById('male')

// const get = document.getElementById('get')

// const listf = document.getElementById('listF')
// const listm = document.getElementById('listM')

// let arrF = [0]
// let arrM = [0]

// const saveDate = () => {
//     localStorage.setItem('femaleArray', JSON.stringify(arrF))
//     localStorage.setItem('maleArray', JSON.stringify(arrM))
// }


// const getDate = () => {
//     listf.innerHTML = ''

//     let arrayf = JSON.parse(localStorage.getItem('femaleArray'))

//     let wordf = document.createElement('span')

//     wordf.innerText = arrayf.at(-1)
//     listf.appendChild(wordf)





//     listm.innerHTML = ''

//     let arraym = JSON.parse(localStorage.getItem('maleArray'))

//     let wordm = document.createElement('span')

//     wordm.innerText = arraym.at(-1)
//     listm.appendChild(wordm)

// }




// const femaleArray = () => {
//     let array = JSON.parse(localStorage.getItem('femaleArray'))
//     array.push(array.at(-1) + 1)
//     localStorage.setItem('femaleArray', JSON.stringify(array))

// }

// const maleArray = () => {
//     let array = JSON.parse(localStorage.getItem('maleArray'))
//     array.push(array.at(-1) + 1)
//     localStorage.setItem('maleArray', JSON.stringify(array))

// }



// save.addEventListener('click', saveDate)
// get.addEventListener('click', getDate)
// female.addEventListener('click', femaleArray)
// male.addEventListener('click', maleArray)






const male = document.getElementById('male');
const female = document.getElementById('female');

const malePlus = () => {
    if (sessionStorage.getItem('male')) {
        let i = sessionStorage.getItem('male')
        i++
        sessionStorage.setItem('male', i)
        document.getElementById('male-text').innerText = sessionStorage.getItem('male')

        if (sessionStorage.getItem('male') > sessionStorage.getItem('female')) {
            console.log('male')
        }
    } else {
        sessionStorage.setItem('male', 0)
    }
}
const femalePlus = () => {
    if (sessionStorage.getItem('female')) {
        let i = sessionStorage.getItem('female')
        console.log(i)
        i++
        sessionStorage.setItem('female', i)
        document.getElementById('female-text').innerText = sessionStorage.getItem('female')
        if (sessionStorage.getItem('male') < sessionStorage.getItem('female')) {
            console.log('female')
        }
    } else {
        sessionStorage.setItem('female', 0)
    }
}

male.addEventListener('click', malePlus)
female.addEventListener('click', femalePlus)