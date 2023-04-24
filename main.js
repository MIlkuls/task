'use strict'

/*Timer */
const countDownEl = document.getElementById("countdown");
let time = 600;
setInterval(updatecountDown,1000)

function updatecountDown(){
  const minutes = Math.floor(time/60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countDownEl.innerHTML = `${minutes}:${seconds}`
  time--;
}

/*Date */
const today = new Date();
const fiveDaysAgo = new Date(today);
fiveDaysAgo.setDate(today.getDate() - 5);
const month = (fiveDaysAgo.getMonth() + 1).toString().padStart(2, '0');
const day = fiveDaysAgo.getDate().toString().padStart(2, '0');
const year = fiveDaysAgo.getFullYear().toString();

document.querySelector('.date').innerHTML = `${year}.${month}.${day}`


/*Modal*/

let modal = document.querySelector(".modal")

document.addEventListener('mouseleave', (event) => {
   modal.style.display = "block"
});


setTimeout(() => {

    modal.style.display = "block";
 
}, 20000);



/*Scroll to form */

document.getElementById('click').addEventListener('click',()=>{
  modal.style.display = "none"
  document.querySelector('.form').scrollIntoView({ block:'center',behavior:'smooth'})
})
 

