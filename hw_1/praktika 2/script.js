let imageRotate = document.getElementById('image')

const rotate = (event) => {
    event.target.style = 'transform: rotate(90deg);'
}

imageRotate.addEventListener('click', rotate)






let norm = document.getElementById('normal')

const normal = () => {
    imageRotate.style = 'transform: rotate(0deg);'
}

norm.addEventListener('click', normal)





