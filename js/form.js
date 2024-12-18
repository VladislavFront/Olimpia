const TOKEN = '8029842016:AAH5ntyqxgBR4xT0ynMRO9Sl_JDVBpZQyX0'
const CTHAT_ID = '-4651390385'
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

document.getElementById('form-quiz').addEventListener('submit', function (e) {

  e.preventDefault()

  let message = 'Звявка с сайта\n' + "Имя: " + this.name.value + '\n' + 'Номер телефона: ' + this.phone.value

  axios.post(URL_API, {
    chat_id: CTHAT_ID,
    parse_mode: 'html',
    text: message
  })

  .then((res) => {
    console.log('доставлено')
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('Завершилось')
    document.getElementById('form-quiz').reset()
  })

})

document.getElementById('form-price').addEventListener('submit', function (e) {

  e.preventDefault()

  let message = 'Звявка с сайта\n' + 'Номер телефона: ' + this.phone.value

  axios.post(URL_API, {
    chat_id: CTHAT_ID,
    parse_mode: 'html',
    text: message
  })

  .then((res) => {
    console.log('доставлено')
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('Завершилось')
    document.getElementById('form-price').reset()
  })

})

document.getElementById('form-consultation').addEventListener('submit', function (e) {

  e.preventDefault()

  let message = 'Звявка с сайта\n' + "Имя: " + this.name.value + '\n' + 'Номер телефона: ' + this.phone.value

  axios.post(URL_API, {
    chat_id: CTHAT_ID,
    parse_mode: 'html',
    text: message
  })

  .then((res) => {
    console.log('доставлено')
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log('Завершилось')
    document.getElementById('form-consultation').reset()
  })

})
