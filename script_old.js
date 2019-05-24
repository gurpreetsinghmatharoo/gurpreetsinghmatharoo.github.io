//Debug
let i_debug = document.getElementById("i_debug");
let body = document.getElementById("i_s0");
i_debug.innerHTML = ''//body.scrollTop;

//Text properties
const title_delay = 200;
const subtitle_delay = 300;
const title_ms = 60;
const subtitle_ms = 400;
const arrow_delay = 1200;

const immediate = 0;

//Title
let title_text = "Hi! I'm Gurpreet.";
let i_title = document.getElementById("i_title");
let title_char = 0;

i_title.innerHTML = "";

let title_func = function() {
	title_char += 1;
	i_title.innerHTML = title_text.substr(0, title_char);
	
	if (title_char < title_text.length) {
		setTimeout( function() {
			title_func();
		}, title_ms);
	}
	else {
		setTimeout( function() {
			subtitle_func();
		}, subtitle_delay);
	}
}

setTimeout( function() {
	title_func();
}, title_delay);

//Subtitle
let subtitle_text = "GameMaker Programmer & Instructor";
let i_subtitle = document.getElementById("i_subtitle");
let subtitle_char = 0;

i_subtitle.innerHTML = "";

let subtitle_func = function() {
	subtitle_char = subtitle_text.length;
	i_subtitle.innerHTML = subtitle_text.substr(0, subtitle_char);
	i_subtitle.style.opacity = 1;
	
	setTimeout( function() {
		let i_down_arrow = document.getElementById("i_down_arrow");
		
		i_down_arrow.style.top = "85%";
		i_down_arrow.style.opacity = "1";
	}, arrow_delay);
}

//Immediate mode
if (immediate) {
	title_char = title_text.length;
	subtitle_char = subtitle_text.length;
}

//Sidebar
let i_sidebar_btn = document.getElementById("i_sidebar_btn");
let i_sidebar = document.getElementById("i_sidebar");

i_sidebar_btn.onclick = function() {
	if (i_sidebar.style.left != "0px") i_sidebar.style.left = "0px";
	else i_sidebar.style.left = "-312px";
}