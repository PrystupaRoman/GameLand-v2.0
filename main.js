////// show nav menu

const active = document.querySelector('.burger__wrapper')
const show = document.querySelector('.active')
const after = document.querySelector('.burger__icon')



active.addEventListener('click', () => {
  show.classList.toggle('show')
  active.classList.toggle('active')
  after.classList.toggle('active')
})

/////////// review section

const leftArrow = document.querySelector('.reviews__arrow-left')
const rightArrow = document.querySelector('.reviews__arrow-right')
const reviewsProfiles = Array.from(document.querySelectorAll('.reviews__profile'))
leftArrow.addEventListener('click', () => {
  reviewsProfiles.forEach((profile, idx) => {
    console.log(profile[0]);
    profile.style.left = '-20rem'
  })
})

rightArrow.addEventListener('click', () => {
  reviewsProfiles.forEach((profile, idx) => {

    profile.style.left = '39rem'

  })
})


///// form validation ////////
const form = document.querySelector('.form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


function showSuccess(input) {
  const blockWrapper = input.parentElement
  blockWrapper.className = 'block__wrapper success'
}


function showError(input, message) {
  const blockWrapper = input.parentElement
  blockWrapper.className = 'block__wrapper error'
  const small = blockWrapper.querySelector('small')
  small.innerText = message
}

//////check email
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is not valid')
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input)
    }
  })
}

/////// check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`)
  } else {
    showSuccess(input)
  }
}

function checkPasswordsMatch(input1, input2) {
  if(input1.value !== input2.value) {
    showError(input2, 'Passwords do not match' )
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

form.addEventListener('submit', e => {
  e.preventDefault()
  checkRequired([username, email, password, password2])
  checkLength(username, 3, 15)
  checkLength(password, 6, 25)
  checkEmail(email)
  checkPasswordsMatch(password, password2)
})