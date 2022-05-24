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
    console.log(profile[idx]);
    profile.style.left = '-20rem'
  })
})

rightArrow.addEventListener('click', () => {
  reviewsProfiles.forEach((profile, idx) => {

      profile.style.left = '39rem' 
    
  })
})


///// form validation