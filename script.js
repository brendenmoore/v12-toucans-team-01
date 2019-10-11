// Clock Feature
var clockElement = document.getElementById('clock');

function updateClock(clock) {
	clock.innerHTML = new Date().toLocaleTimeString([], {
		//for when we have 24 hr setting
		// hour12: false
		timeStyle: 'short'
	});
}

setInterval(function () {
	updateClock(clockElement);
}, 1000);

// Greeting based on time of day
var greetingTimeOfDay = document.getElementById('timeOfDay');
var currentDate = new Date();
var currentHr = currentDate.getHours();

if (currentHr < 12) {
	greetingTimeOfDay.innerHTML = 'Morning'
} else if (currentHr < 18) {
	greetingTimeOfDay.innerHTML = 'Afternoon'
} else {
	greetingTimeOfDay.innerHTML = 'Evening'
}

var name = document.getElementById('userName');
userName.innerHTML = 'person';

// Focus of the Day
const focusInput = document.getElementById('focus-input-group');
const focus = document.getElementById('focus-container');
const focusDeleteButton = document.getElementById('focus-delete')
const focusCheck = document.getElementById('focus-checkbox');
const focusItem = document.getElementById('focus-item');

function focusSubmit(event) {
	event.preventDefault();
	focusInput.style.display = 'none';
	const value = focusInput.querySelector('input[type="text"]').value;
	focusItem.textContent = value;
	focus.style.display = 'block';
}
focusInput.addEventListener('submit', focusSubmit);

// check off button 
function focusToggle(event) {
	focusItem.classList.toggle('strike');
	document.getElementById('empty-box').classList.toggle('no-display');
	document.getElementById('checked-box').classList.toggle('no-display');
}
focusCheck.addEventListener('click', focusToggle);

// delete button
function focusDelete(event) {
	if (focusItem.classList.contains('strike')) {
		focusItem.classList.toggle('strike');
		document.getElementById('empty-box').classList.toggle('no-display');
		document.getElementById('checked-box').classList.toggle('no-display');
	}
	focusInput.style.display = 'block';
	focusInput.reset();
	focus.style.display = 'none';
}
focusDeleteButton.addEventListener('click', focusDelete);



// Buttons appear on hover 
$(document).ready(function(){
	$(".hidden").fadeTo(1000, 0);
	$("#focus-container").hover(function(){
		$(".hidden").fadeTo(300, 1);
	}, function(){
		$(".hidden").fadeTo(300, 0);
	}
	);
});


