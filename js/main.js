


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


if (skyBtn){


skyBtn.addEventListener('click', function (e) {
    e.preventDefault();
    transformer.classList.add('d-none')
    hangover.classList.add('d-none')
    catGirl.classList.add('d-none')
    deepwater.classList.add('d-none')
    skycrap.classList.remove('d-none')
})
}
if(hangBtn){
hangBtn.addEventListener('click', function (e) {
    e.preventDefault();
    transformer.classList.add('d-none')
    hangover.classList.remove('d-none')
    catGirl.classList.add('d-none')
    deepwater.classList.add('d-none')
    skycrap.classList.add('d-none')
})
}
if(girlBtn){
girlBtn.addEventListener('click', function (e) {
    e.preventDefault();
    transformer.classList.add('d-none')
    hangover.classList.add('d-none')
    catGirl.classList.remove('d-none')
    deepwater.classList.add('d-none')
    skycrap.classList.add('d-none')
})
}
if(deepbtn){
deepbtn.addEventListener('click', function (e) {
    e.preventDefault();
    transformer.classList.add('d-none')
    hangover.classList.add('d-none')
    catGirl.classList.add('d-none')
    deepwater.classList.remove('d-none')
    skycrap.classList.add('d-none')
})
}
if(transBtn){
transBtn.addEventListener('click', function (e) {
    e.preventDefault();
    transformer.classList.remove('d-none')
    hangover.classList.add('d-none')
    catGirl.classList.add('d-none')
    deepwater.classList.add('d-none')
    skycrap.classList.add('d-none')
})
}


let serials = document.querySelector('.serials')
let tv = document.querySelector('.tv')
let hr = document.querySelector('.chan')
let tvshow = document.querySelector('.tvshoww')
let seri = document.querySelector('.serialls')

tv?.addEventListener('click', function () {

    hr.classList.remove('wid')
    hr.classList.add('nextwid')
    seri.classList.add('d-none')
    tvshow.classList.add('d-block')
    tvshow.classList.remove('d-none')

})
serials?.addEventListener('click', function () {

    hr.classList.remove('nextwid')
    tvshow.classList.add('d-none')
    seri.classList.add('d-block')
    seri.classList.remove('d-none')
    hr.classList.add('wid')
})

let moreCard = document.querySelector('.showmorecontent')
let moreBtn = document.querySelector('#show-popular-movies')


moreBtn?.addEventListener('click', function(){
    moreCard.classList.toggle('d-none')
    moreCard.classList.toggle('Morre')
})
let moreInfoBtn = document.querySelector('.m-info')
let X_Men = document.querySelector('.X-Men2')


moreInfoBtn?.addEventListener('click', function(){
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

optop.forEach(el=>{
    el.addEventListener('click', function(){
        let values = this.getAttribute('data-chos');
        dropContent.classList.remove('show');
        dropIcon.classList.remove('fa-caret-down');
        openDroptext.innerHTML =   inp.value = values;
        inp.value = values;
      

    })
});

let lan = document.querySelector('.lang')
let droplang = document.querySelector('.langselect ul')
let dropic = document.querySelector('.carettt')
let lanselec = document.querySelectorAll('.langselect ul li')
let lantext = document.querySelector('.lang span')
let laninp = document.querySelector('input[name="langdata"]')

lan.addEventListener('click', function(){
    droplang.classList.toggle('show')
    dropic.classList.toggle('fa-caret-down')
})

lanselec.forEach(el=>{
    el.addEventListener('click', function(){
        let valuees = this.getAttribute('landg-data')
        droplang.classList.remove('show')
        dropic.classList.remove('fa-caret-down');
        lantext.innerHTML =   laninp.value = valuees;
        laninp.value = valuees;
console.log(valuees);

    })
})
// let username = document.getElementById('username').value;
// let psw = document.getElementById('password').value;
// let email = document.getElementById('email').value;
// let logtext = document.querySelector('.login span')

// const RegForm = document.getElementById('btnRegist')





// if (RegForm) {

//     RegForm.addEventListener('click', function() {
   





// let users = {
//     names:username,
//     emails:email,
//     password:psw

// }


// let Userarray = []

// let User = [users]

// Userarray = JSON.parse(localStorage.getItem(User));


//   console.log(User);

// let matchUser 

// matchUser = Userarray?.find(us=>{
//     return us.emails == email
   
//   })
 

//   if (matchUser != undefined){
//     alert('??????????????????????????????????????? ????????????????????? ??????:?????????????????? ???????????? ????????????????????????');
  
// }else{

//     alert('?????????????????????????????? ????????????????????? ?????????????????????????????????');
//   Userarray?.push(users)
//     let jsonstr = JSON.stringify(Userarray)
//     localStorage.setItem('User', jsonstr)
//     logtext.innerText =   users.names ;
// }



// });
// }
//     let loginUsername = document.getElementById('logusername').value
//     let loginPass = document.getElementById('logpassword').value
//     let logbtn = document.getElementById('logbtn')
    
//     logbtn.addEventListener('click', function() {
    
//         loginUsername = loginUsername+ ""
  
// console.log(loginUsername);
//     });
  





