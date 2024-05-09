let minute = 60
let song = new Audio('./king-gizz-countdown.mp3')

window.onload = function () {
  // display = document.querySelector('#time')
  //   startTimer(5, display)
  startTimer(minute * 7)
}

muteButton = document.getElementById('muteBtn')
muteButton.addEventListener('click', () => {
  song.load()
})

function startTimer(duration) {
  let timer = duration,
    minutes,
    seconds
  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    // display.textContent = minutes + ':' + seconds

    if (--timer < 0) {
      console.log('time ran out')
      clearInterval(interval)
      song.play()
      startTimer(getRandomInt(minute * 13, minute * 36))
    }
  }, 1000)
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/////////////////////////////////

mainText = document.getElementById('question')
// mainText.innerHTML = ''

const text = new Blotter.Text('‎‎Are you doing what you need to? Honestly‎‎', {
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
material.uniforms.uVolatility.value = 0.015
material.uniforms.uSeed.value = 0.3

let blotter = new Blotter(material, {
  texts: text,
})

let scope = blotter.forText(text)
scope.appendTo(mainText)
