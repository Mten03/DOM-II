import './less/index.less'

// Your code goes here!

//Load
window.addEventListener('load', (evt) => {
    console.log('Adventure Time!!')
    const heading = document.querySelector('h1')
    heading.textContent = 'Adventure Time!!'

//Copy
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
            })
    })

//Click
    document.body.addEventListener('click', (evt) => {
        evt.target.classList.toggle('mirror')
    })

//Dblclick
    document.body.addEventListener('dblclick', (evt) => {
        evt.target.innerHTML = ''
    })

//Keydown
    window.addEventListener('keydown', (evt) => {
        if(evt.key == 1) {
            document.body.innerHTML = 'Nope!'
        }
    })

//Mousemove
    document.body.addEventListener('mousemove', (evt) => {
        const { clientX, clientY } = evt
        // console.log(`mouse is at ${clientX}, ${clientY}`);
    })

//Mouseenter
//Mouseleave
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            setTimeout(() => {
                destination.style.fontWeight = 'initial'
            }, 500)
        })
    }
})