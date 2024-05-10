let minute = 60
let song = new Audio('./king-gizz-countdown.mp3')

window.onload = function () {
  startTimer(minute * 7)
}

muteButton = document.getElementById('muteBtn')
muteButton.addEventListener('click', () => {
  song.load()
})

muteButtonContainer = document.getElementById('btn-container')

// with a chance moves button to some random position
muteButton.addEventListener('mouseover', () => {
  let chance = getRandomInt(1, 10)
  if (chance < 4) {
    randomPosButton()
  }
})

function randomPosButton() {
  let randTop = getRandomInt(10, window.innerHeight - 60)
  let randLeft = getRandomInt(10, window.innerWidth - 200)

  if (randTop < window.innerHeight / 2 - 25 && randTop > window.innerHeight / 2 - 100) {
    randTop -= 80
  }

  muteButtonContainer.style.top = randTop + 'px'
  muteButtonContainer.style.left = randLeft + 'px'
}

function startTimer(duration) {
  randomPosButton()

  let timer = duration,
    minutes,
    seconds
  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    // display.textContent = minutes + ':' + seconds
    // console.log(minutes + ':' + seconds)

    if (--timer < 0) {
      console.log('time ran out')
      clearInterval(interval)
      song.play()
      startTimer(getRandomInt(minute * 13, minute * 32))
    }
  }, 1000)
}

// returns random int min max included
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/////////////////////////////////

mainText = document.getElementById('question')
// mainText.innerHTML = ''

const text = new Blotter.Text('‎‎‎‎Are you doing what you need to? Honestly‎‎‎‎', {
  family: 'Open Sans, sans-serif',
  // size: 48,
  size: 38,
  // fill: '#fff',
  // fill: '#080808',
  fill: '#181616',
  padding: 1,
})

let material = new Blotter.LiquidDistortMaterial()
material.uniforms.uSpeed.value = 0.07
material.uniforms.uVolatility.value = 0.011
material.uniforms.uSeed.value = 0.3

let blotter = new Blotter(material, {
  texts: text,
})

let scope = blotter.forText(text)
scope.appendTo(mainText)
