console.log("connected!");

// arrays of objects for game

var easyObjects = [
	"A pencil",
	"A book",
	"A car",
	"A lighter",
	"An apple",
	"A pair of scissors",
	"A garbage bag",
	"A toothpick",
	"A rubberband",
	"A pair of socks",
	"A baseball bat",
	"A balloon",
	"An egg"
];

var mediumObjects = [
	"An icicle",
	"A $2 bill",
	"A tree branch",
	"A snowball",
	"A paper bag",
	"A credit card",
	"A pillow case",
	"A clothes pin",
	"A newspaper",
	"A carrot",
	"A pair of pants",
	"A cup of salt",
	"A plastic bag",
	"A towel",
	"A toothbrush"
];

var hardObjects = [
	"A ping pong ball",
	"A dumbell",
	"A blank canvas",
	"A shot glass",
	"A comb",
	"A pair of ear plugs",
	"A quarter",
	"A sofa",
	"A bottle cap",
	"A lamp",
	"A paperclip",
	"An alarm clock",
	"A nail file",
	"A tissue"
];


// generate random objects from array
var objectDisplay = document.getElementById("randomObject"); 

var easyButton = document.getElementById("easy");
var mediumButton = document.getElementById("medium");
var hardButton = document.getElementById("hard");

var easySelect = easyObjects[Math.floor(Math.random() * easyObjects.length)];


easyButton.addEventListener("click", function() {
	 var easySelect = easyObjects[Math.floor(Math.random() * easyObjects.length)];
	 objectDisplay.innerHTML = easySelect;
});

mediumButton.addEventListener("click", function() {
	 var mediumSelect = mediumObjects[Math.floor(Math.random() * mediumObjects.length)];
	 objectDisplay.innerHTML = mediumSelect;
});

hardButton.addEventListener("click", function() {
	 var hardSelect = hardObjects[Math.floor(Math.random() * hardObjects.length)];
	 objectDisplay.innerHTML = hardSelect;
});


// Timer Countdown

// set minutes
var mins = 2;
 
// calculate the seconds (don't change this! unless time progresses at a different speed for you...)
var secs = mins * 60;
function countdown() {
	setTimeout('Decrement()',1000);
}
function Decrement() {
	if (document.getElementById) {
		minutes = document.getElementById("minutes");
		seconds = document.getElementById("seconds");
		// if less than a minute remaining
		if (seconds < 59) {
			seconds.value = secs;
		} else {
			minutes.value = getminutes().innerHTML;
			seconds.value = getseconds().innerHTML;
		}
		secs--;
		setTimeout('Decrement()', 1000);
	}
}
function getminutes() {
	// minutes is seconds divided by 60, rounded down
	mins = Math.floor(secs / 60);
	return mins;
}
function getseconds() {
	// take mins remaining (as seconds) away from total seconds remaining
	return secs-Math.round(mins * 60);
}

// timer call

$("#startTimer").click( function(){
   var counter = 120;
   setInterval(function() {
     counter--;
      if (counter >= 0) {
         span = document.getElementById("timerDigits");
         span.innerHTML = counter;
         btnText = document.getElementById("startTimer");
         btnText.innerHTML = "GO!";
      }
      if (counter === 0) {
         clearInterval(counter);
		 timerAll = document.getElementById("timerAll");
		 timerAll.innerHTML = "Times up!"
		 resetText = document.getElementById("reset");
         resetText.innerHTML = "Refresh to play again";
         var end = new Audio("buzz.wav"); // buffers automatically when created
			end.play(1000);
       }
     }, 1000);
});

$("#startTimer").click( function(){
    $(this).css({
    	'background-color' : 'green',
    	'color' : 'white',
    });
});

