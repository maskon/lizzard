const frog = document.getElementById('frog')
const coin = document.getElementById('coin')
const gameEl = document.getElementById('gameel')
const total = document.getElementById('total')
const totalAll = document.getElementById('total-all')
const level = document.getElementById('level')
const progresBar = document.querySelector('.game_progress_max-bar')
const rank = document.getElementById('rank')

let score = 0
let scoreTotal = Number(total.innerHTML)
let scoreTotalAll = Number(totalAll.innerHTML)
let intervalId

function interval() {
    if (scoreTotal < scoreTotalAll) {
        intervalId = setInterval(interval2, 500)
    } else {
        clearInterval(intervalId)
    }
}

function interval2() {
    scoreTotal++
    total.innerHTML = scoreTotal
    if (scoreTotal >= scoreTotalAll) {
        clearInterval(intervalId)
    }
}

function renderScore(e) {
    if (scoreTotal <= 0) {
        score = score
        scoreTotal = 1
    } else {
        score++
        
        const scoreLocaleString = score.toLocaleString('ru-RU', {
            minimumFractionDigits: 0,      
            maximumFractionDigits: 0,
        })
        coin.innerHTML = scoreLocaleString
        
        let widthNumber = 300
        
        if (score < widthNumber) {
            progresBar.style.width = score + 'px'
        }
        if (score > widthNumber) {
            progresBar.style.width = (score - widthNumber) + 1 + 'px'
            frog.src = 'img/lizzard.png'
            level.innerHTML = 2
            rank.innerHTML = 'Ученик'
        }
        if (score > widthNumber * 2) {
            progresBar.style.width = (score - widthNumber * 2) + 1 + 'px'
            level.innerHTML = 3
            rank.innerHTML = 'Практикант'
        }
        if (score > widthNumber * 3) {
            progresBar.style.width = (score - widthNumber * 3) + 1 + 'px'
            level.innerHTML = 4
            rank.innerHTML = 'Начинающий специалист'
        }
        if (score > widthNumber * 4) {
            progresBar.style.width = (score - widthNumber * 4) + 1 + 'px'
            level.innerHTML = 5
            rank.innerHTML = 'Уверенный специалист'
        }
        if (score > widthNumber * 5) {
            progresBar.style.width = (score - widthNumber * 5) + 1 + 'px'
            level.innerHTML = 6
            rank.innerHTML = 'Эксперт'
        }
        if (score > widthNumber * 6) {
            progresBar.style.width = (score - widthNumber * 6) + 1 + 'px'
            level.innerHTML = 7
            rank.innerHTML = 'Профессионал'
        }
        if (score > widthNumber * 7) {
            progresBar.style.width = (score - widthNumber * 7) + 1 + 'px'
            level.innerHTML = 8
            rank.innerHTML = 'Наставник'
        }
        if (score > widthNumber * 8) {
            progresBar.style.width = (score - widthNumber * 8) + 1 + 'px'
            level.innerHTML = 9
            rank.innerHTML = 'Лидер'
        }
        if (score > widthNumber * 9) {
            progresBar.style.width = (score - widthNumber * 9) + 1 + 'px'
            level.innerHTML = 10
            rank.innerHTML = 'Ведущий эксперт'
        }
        if (score > widthNumber * 10) {
            progresBar.style.width = widthNumber + 'px'
            level.innerHTML = 10
            rank.innerHTML = 'Ведущий эксперт'
        }
    }
}

function appearanceElement(e) {
    const scoreElement = document.createElement('span')
    scoreElement.className = 'game_number'
    scoreElement.textContent = '+1'
    
    scoreElement.style.setProperty('--top', e.offsetY)
    scoreElement.style.setProperty('--left', e.offsetX)   

    gameEl.insertAdjacentElement('beforeend', scoreElement)

    setTimeout( () => {
        scoreElement.remove()
    }, 1000)
}

function totalScore() {     
    scoreTotal--
    total.innerHTML = scoreTotal 
} 

frog.addEventListener('click', function(e) {
    renderScore(e)
    appearanceElement(e)
    totalScore()
    clearInterval(intervalId)
    interval()
})

interval()










