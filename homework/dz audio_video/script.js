let text = document.getElementById('text')
let letter = text.getElementsByTagName('span')
let myAudio = document.getElementById('myAudio')
let up = document.getElementById('up')
let new_page = document.getElementById('newPage')

// for (let i = 0; i < letter.length; i++) {
//     console.log(letter[i])
//     letter[i].style.top = '200px'
// }

// up.addEventListener('click', function () {
//     myAudio.play();
//     myAudio.muted = true

//     let i = -1
//     let time = setInterval(function () {
//         myAudio.muted = false
//         myAudio.currentTime = 0;
//         let count = 200

//         let toptimer = setInterval(function () {
//             count -= 1
//             letter[i].style.top = count + 'px'

//             if (count <= 0) {
//                 clearInterval(toptimer)
//             }
//         })

//         i++

//         if (i == letter.length) {
//             myAudio.muted = true
//             clearInterval(time)
//             clearInterval(toptimer)
//         }

//     }, 1000)

// })









for (let i = 0; i < letter.length; i++) {
    console.log(letter[i])
    letter[i].style.top = '200px'
}

up.addEventListener('click', function () {
    myAudio.play();
    myAudio.muted = true

    let i = -1
    let time = setInterval(function () {
        myAudio.muted = false
        myAudio.currentTime = 0;
        let count = 200

        let toptimer = setInterval(function () {
            count -= 1
            letter[i].style.top = count + 'px'

            if (count <= 0) {
                clearInterval(toptimer)
            }
        })

        i++

        if (i == letter.length) {
            myAudio.muted = true
            clearInterval(time)
            clearInterval(toptimer)
        }

    }, 1000)

})















new_page.addEventListener('click', function () {
    document.open();

    document.write('<video id="myVideo" controls autoplay muted loop><source src="myVideo.mp4"></video>')


    let myVideo = document.getElementById('myVideo')

    myVideo.style.width='100%'
    myVideo.style.height= '100%'

    document.close();

})
