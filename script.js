let minute = 60
let song = new Audio('./king-gizz-countdown.mp3')

window.onload = function () {
  display = document.querySelector('#time')
  startTimer(getRandomInt(4, 5), display)
}

function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds
  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    display.textContent = minutes + ':' + seconds

    if (--timer < 0) {
      console.log('time ran out')
      clearInterval(interval)
      song.play()
      startTimer(getRandomInt(minute * 15, minute * 40), display)
    }
  }, 1000)
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

button = document.getElementById('muteBtn')
button.addEventListener('click', () => {
  song.load()
})
