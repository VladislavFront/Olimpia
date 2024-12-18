function openQuiz() {
  document.querySelector('.quiz').classList.remove('hidden')
  document.querySelector('.quiz-container').classList.remove('hidden')

  document.querySelector('.body').classList.add('overflow')
  document.querySelector('.quiz-container').classList.add('overflow')
}

function activeAnswerOne() {
  document.querySelector('.answer-one').classList.add('active')
}

function activeAnswerTwo() {
  document.querySelector('.answer-two').classList.add('active')
}

function activeAnswerThree() {
  document.querySelector('.answer-three').classList.add('active')
}

function activeAnswerFour() {
  document.querySelector('.answer-four').classList.add('active')
}

function openTwoQuest() {
  document.querySelector('.questOne').classList.remove('visible')
  document.querySelector('.questOne').classList.add('hidden')

  document.querySelector('.questTwo').classList.add('visible')
}

function openThreeQuest() {
  document.querySelector('.questTwo').classList.remove('visible')
  document.querySelector('.questTwo').classList.add('hidden')
  
  document.querySelector('.questThree').classList.add('visible')
}

function openFourQuest() {
  document.querySelector('.questThree').classList.remove('visible')
  document.querySelector('.questThree').classList.add('hidden')
  
  document.querySelector('.questFour').classList.add('visible')
}

function openFiveQuest() {
  document.querySelector('.questFour').classList.remove('visible')
  document.querySelector('.questFour').classList.add('hidden')
  
  document.querySelector('.questFive').classList.add('visible')
}

function openSixQuest() {
  document.querySelector('.questFive').classList.remove('visible')
  document.querySelector('.questFive').classList.add('hidden')
  
  document.querySelector('.questSix').classList.add('visible')
}

function closeQuiz() {
  document.querySelector('.quiz').classList.remove('visible')
  document.querySelector('.quiz').classList.add('hidden')

  document.querySelector('.quiz-container').classList.add('hidden')

  document.querySelector('.questSix').classList.remove('visible')
  document.querySelector('.questSix').classList.add('hidden')

  document.querySelector('.questOne').classList.add('visible')

  document.querySelector('.answer-one').classList.remove('active')
  document.querySelector('.answer-two').classList.remove('active')
  document.querySelector('.answer-three').classList.remove('active')
  document.querySelector('.answer-four').classList.remove('active')

  document.querySelector('.body').classList.remove('overflow')
  document.querySelector('.quiz-container').classList.remove('overflow')
}