const buttonArr = document.querySelectorAll('.button')
const submitBtn = document.querySelector('.card__submit')
const cardSelected = document.querySelector('.card__selected')
const thanksContainer = document.querySelector('.card-thanks__container')
const cardContainer = document.querySelector('.card__container')
let ratingValue = null

const onRatingValueClick = e => {
  ratingValue = e.target.value
  const msg = `You've selected ${ratingValue} out of ${buttonArr.length}`
  return cardSelected.innerHTML = msg
}

buttonArr.forEach(el => el.addEventListener('click', onRatingValueClick))

const onSubmitHandle = e => {
  e.preventDefault()
  if (!ratingValue) return
  thanksContainer.style.display = 'block'
  cardContainer.style.display = 'none'
}

submitBtn.addEventListener('click', onSubmitHandle)

