let image1 = document.querySelector('.image1')
image1.src = '1.jpg'

let image2 = document.querySelector('.image2')
image2.src = '2.jpg'

let image3 = document.querySelector('.image3')
image3.src = '3.jpg'

let image4 = document.querySelector('.image4')
image4.src = '4.jpg'

let image5 = document.querySelector('.image5')
image5.src = '5.jpg'


let body = document.querySelector('body')


image1.addEventListener('click', function () {
    body.classList.remove('bg2')
    body.classList.remove('bg3')
    body.classList.remove('bg4')
    body.classList.remove('bg5')



    setTimeout(() => {
        body.classList.add('bg1')

    })
})



image2.addEventListener('click', function () {
    body.classList.remove('bg1')
    body.classList.remove('bg3')
    body.classList.remove('bg4')
    body.classList.remove('bg5')



    setTimeout(() => {
        body.classList.add('bg2')

    })
})

image3.addEventListener('click', function () {
    body.classList.remove('bg2')
    body.classList.remove('bg1')
    body.classList.remove('bg4')
    body.classList.remove('bg5')



    setTimeout(() => {
        body.classList.add('bg3')

    })
})



image4.addEventListener('click', function () {
    body.classList.remove('bg1')
    body.classList.remove('bg3')
    body.classList.remove('bg2')
    body.classList.remove('bg5')



    setTimeout(() => {
        body.classList.add('bg4')

    })
})

image5.addEventListener('click', function () {
    body.classList.remove('bg1')
    body.classList.remove('bg3')
    body.classList.remove('bg2')
    body.classList.remove('bg4')



    setTimeout(() => {
        body.classList.add('bg5')

    })
})

