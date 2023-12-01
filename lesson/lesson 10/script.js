let vid = document.getElementById("myVideo");
let body = document.querySelector("body")


// body.addEventListener('mousemove', function(){
//     vid.muted =false
// })


function widthLarge() {
    vid.width = "400"
}
function widthSmall() {
    vid.width = "100"
}


function qosmaq() {
    vid.play()
}

function dayandirmaq() {
    vid.pause()
}


let myAudio = document.getElementById("myAudio");
let mute_aud = document.getElementById('mute_aud')


let mute = true
mute_aud.addEventListener("click", function () {
    if (mute) {
        myAudio.muted = true
        mute_aud.innerText='muted'
        mute = false
        console.log(myAudio.muted)
    } else {
        myAudio.muted = false
        mute_aud.innerText='Not muted'
        mute = true   
        console.log(myAudio.muted)
    }
})

