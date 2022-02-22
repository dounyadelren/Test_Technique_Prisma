const burger = document.getElementById('burger')
const main = document.getElementById('main')
const navBurger = document.getElementById('nav_burger')
const cross = document.getElementById('close')

burger.addEventListener('click', function(event) {
    event.preventDefault()
    main.style.display = 'none';
    navBurger.style.display='block';
})

cross.addEventListener('click', function(event) {
    event.preventDefault()
    navBurger.style.display = 'none'
    main.style.display = 'block';
})