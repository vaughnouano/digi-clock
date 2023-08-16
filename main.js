const button3 = document.getElementById("btn3");

button3.addEventListener("change", (a) => {
  if (a.target.checked) document.body.setAttribute("data-theme", "dark");
  else document.body.setAttribute("data-theme", "light");
});

// get the button
let buttons = document.getElementById("btn");

// get the inner part of the clock
let innerClock = document.getElementById("inner");

// the button that turns the light off
let button2 = document.getElementById("btn2");

buttons.addEventListener("click", lightInner);
button2.addEventListener("click", OffLightsInner);

function lightInner() {
  innerClock.style.backgroundColor = "white";
  innerClock.style.boxShadow = "inset 10px -3px 0px white";
}

function OffLightsInner() {
  innerClock.style.backgroundColor = "rgb(239, 226, 202)";
  innerClock.style.boxShadow = "inset 10px -3px 0px rgb(229, 82, 80)";
}

// to make the digital clock work
function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();

  document.getElementById("hour").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
}
setInterval(displayTime, 10);
