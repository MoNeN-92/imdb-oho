let navbar = document.querySelectorAll('li a')
navbar.forEach(Element => {
    Element.addEventListener('click', function () {
        navbar.forEach(nav => nav.classList.remove("active"))

        this.classList.add("active");
    })
});



let skyBtn = document.querySelector('.moviesky')
let hangBtn = document.querySelector('.moviehang')
let girlBtn = document.querySelector('.moviegirl')
let deepbtn = document.querySelector('.moviedeep')
let transBtn = document.querySelector('.movietrans')

let skycrap = document.querySelector('.skycraper')
let transformer = document.querySelector('.transformers')
let hangover = document.querySelector('.hangover')
let catGirl = document.querySelector('.girls')
let deepwater = document.querySelector('.deepwater')



skyBtn.addEventListener('click', function (e) {
    e.preventDefault();
    transformer.classList.add('d-none')
    hangover.classList.add('d-none')
    catGirl.classList.add('d-none')
    deepwater.classList.add('d-none')
    skycrap.classList.remove('d-none')
})
hangBtn.addEventListener('click', function (e) {
    e.preventDefault();
    transformer.classList.add('d-none')
    hangover.classList.remove('d-none')
    catGirl.classList.add('d-none')
    deepwater.classList.add('d-none')
    skycrap.classList.add('d-none')
})
girlBtn.addEventListener('click', function (e) {
    e.preventDefault();
    transformer.classList.add('d-none')
    hangover.classList.add('d-none')
    catGirl.classList.remove('d-none')
    deepwater.classList.add('d-none')
    skycrap.classList.add('d-none')
})
deepbtn.addEventListener('click', function (e) {
    e.preventDefault();
    transformer.classList.add('d-none')
    hangover.classList.add('d-none')
    catGirl.classList.add('d-none')
    deepwater.classList.remove('d-none')
    skycrap.classList.add('d-none')
})
transBtn.addEventListener('click', function (e) {
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
let tvshow = document.querySelector('.tvshoww')
let seri = document.querySelector('.serialls')

tv.addEventListener('click', function () {

    hr.classList.remove('wid')
    hr.classList.add('nextwid')
    seri.classList.add('d-none')
    tvshow.classList.add('d-block')
    tvshow.classList.remove('d-none')

})
serials.addEventListener('click', function () {

    hr.classList.remove('nextwid')
    tvshow.classList.add('d-none')
    seri.classList.add('d-block')
    seri.classList.remove('d-none')
    hr.classList.add('wid')
})

let moreCard = document.querySelector('.showmorecontent')
let moreBtn = document.querySelector('#show-popular-movies')


moreBtn.addEventListener('click', function(){
    moreCard.classList.toggle('d-none')
    moreCard.classList.toggle('Morre')
})
let moreInfoBtn = document.querySelector('.m-info')
let X_Men = document.querySelector('.X-Men2')


moreInfoBtn.addEventListener('click', function(){
    X_Men.classList.toggle('d-none')
})


let openDrop = document.querySelector('.chose')
let openDroptext = document.querySelector('.chose span')
let dropContent = document.querySelector('.costumselect ul')
let dropIcon = document.querySelector('.carett')
let optop = document.querySelectorAll('.costumselect ul li')
let inp = document.querySelector('input[name="datachos"]')

openDrop.addEventListener('click', function(){
    dropContent.classList.toggle('show')
    dropIcon.classList.toggle('fa-caret-down')
})
openDrop.addEventListener('change', function handleChange(event) {

  });
optop.forEach(el=>{
    el.addEventListener('click', function(){
        let values = this.getAttribute('data-chos');
        dropContent.classList.remove('show');
        dropIcon.classList.remove('fa-caret-down');
        openDroptext.innerHTML =   inp.value = values;
        inp.value = values;
      

    })
})
