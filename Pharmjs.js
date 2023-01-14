let lastScrollTop = 0;
let head=document.querySelector("header");
let scrollTop
window.addEventListener("scroll",function(){
     scrollTop = (window.pageYOffset || this.document.documentElement.scrollTop)
     if(scrollTop > lastScrollTop)
     {
        head.style.top = "-70px"
     }
    else if(scrollTop==0)
    {
        head.style.background="transparent"
    }
     
     else{
        head.style.top = "0"
        head.style.background="transparent"
        head.style.backgroundColor="#928b88"
     }
     lastScrollTop=scrollTop
})

var countDownDate = new Date("May 30, 2023 15:30:25").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector('.times1').innerHTML = days + "D"
  document.querySelector('.times2').innerHTML = hours + "H"
  document.querySelector('.times3').innerHTML = minutes + "M"
  document.querySelector('.times4').innerHTML =  seconds + "S"

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);