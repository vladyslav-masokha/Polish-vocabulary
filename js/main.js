'use strict';

// ! Clock
const myClock = () => {
	setTimeout(() => {
		const dateEl = new Date();
		const localTime = dateEl.toLocaleTimeString();
		document.getElementById('time').innerHTML = localTime;
		myClock();
	}, 1000);
};
myClock();

// TODO: Navigation
$('.navbar .close').click(function () {
	$('.nav').addClass('un-active-navbar');
});

$('.navbar .check-burger').click(function () {
	$('.nav').removeClass('un-active-navbar');
});