let navbar = document.querySelectorAll('li a')
navbar.forEach(Element => {
    Element.addEventListener('click', function () {
        navbar.forEach(nav => nav.classList.remove("active"))

        this.classList.add("active");
    })
});

// $(':radio').change(function() {
//     console.log('New star rating: ' + this.value);
//   });

let myCardBtn =document.querySelector('.moviesky')
let content = document.querySelector('.skycraper')
 
myCardBtn.addEventListener('click', function(e){
    e.preventDefault();
    content.classList.toggle('d-none')
})
