let navbar = document.querySelectorAll('li a')
navbar.forEach(Element => {
    Element.addEventListener('click', function () {
        navbar.forEach(nav => nav.classList.remove("active"))

        this.classList.add("active");
    })
});



let skyBtn =document.querySelector('.moviesky')
let hangBtn =document.querySelector('.moviehang')
let girlBtn =document.querySelector('.moviegirl')
let deepbtn =document.querySelector('.moviedeep')
let transBtn =document.querySelector('.movietrans')

let skycrap = document.querySelector('.skycraper')
let transformer = document.querySelector('.transformers')
let hangover = document.querySelector('.hangover')
let catGirl = document.querySelector('.girls')
let deepwater = document.querySelector('.deepwater')



skyBtn.addEventListener('click', function(e){
    e.preventDefault();
    transformer.classList.add('d-none')
    hangover.classList.add('d-none')
    catGirl.classList.add('d-none')
    deepwater.classList.add('d-none')
    skycrap.classList.remove('d-none')
})
hangBtn.addEventListener('click', function(e){
    e.preventDefault();
    transformer.classList.add('d-none')
    hangover.classList.remove('d-none')
    catGirl.classList.add('d-none')
    deepwater.classList.add('d-none')
    skycrap.classList.add('d-none')
})
girlBtn.addEventListener('click', function(e){
    e.preventDefault();
    transformer.classList.add('d-none')
    hangover.classList.add('d-none')
    catGirl.classList.remove('d-none')
    deepwater.classList.add('d-none')
    skycrap.classList.add('d-none')
})
deepbtn.addEventListener('click', function(e){
    e.preventDefault();
    transformer.classList.add('d-none')
    hangover.classList.add('d-none')
    catGirl.classList.add('d-none')
    deepwater.classList.remove('d-none')
    skycrap.classList.add('d-none')
})
transBtn.addEventListener('click', function(e){
    e.preventDefault();
    transformer.classList.remove('d-none')
    hangover.classList.add('d-none')
    catGirl.classList.add('d-none')
    deepwater.classList.add('d-none')
    skycrap.classList.add('d-none')
});

let serials = document.querySelector('.serials')
let tv = document.querySelector('.tv')
let hr = document.querySelector('.chan')

tv.addEventListener('click', function(e){
e.preventDefault();
hr.classList.remove('wid')
hr.classList.add('nextwid')
})
serials.addEventListener('click', function(e){
    e.preventDefault();
    hr.classList.remove('nextwid')
    hr.classList.add('wid')
    })