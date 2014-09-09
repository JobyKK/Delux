var slideWidth;
var left = 0;
var long;
var first = true;
var work = false;
var tk = [];
var temp = [];

function initS(slideWidths,longs) {
	long = longs;
	slideWidth = slideWidths;

	var t = document.getElementById('scrollss').children;
	for(i = 0; i < t.length; i++) tk.push(t[i]);
	
	(longs > (t.length - 1)) ? (long = t.length - 1) : long = longs;
	document.getElementById('viewportss').style.width = long*slideWidth;
	document.getElementById('viewportss').style.height = t[0].style.height;

	for(i = 0; i < long; i++) { 
		temp.push(tk.shift());
		temp[i].style.left = i*slideWidth;
	}

	for(i = 0; i < tk.length; i++) tk[i].style.left = long*slideWidth;
}

function nextSlide() {
	if (!work) {
		work = true;
		temp.unshift(tk.pop());
		temp[0].style.left = -slideWidth;
		intern = setInterval(function(){
			left += 20;
			for(i = -1; i < long; i++) temp[i+1].style.left = left + i*slideWidth;
			if (left == slideWidth) { 
				left = 0;
				clearInterval(intern);
				tk.unshift(temp.pop());
				work = false;
			}
		},100);
	}
}

function prevSlide() {
	if (!work) {
		work = true;
		temp.push(tk.shift());
		temp[long].style.left = long*slideWidth;
		interp = setInterval(function(){
			left -= 20;
			for(i = 0; i < long + 1; i++) temp[i].style.left = left + i*slideWidth;
			if (left == -slideWidth) { 
				left = 0;
				clearInterval(interp);
				tk.push(temp.shift());
				work = false;
			}
		},100);
	}
}

initS(220,3);
