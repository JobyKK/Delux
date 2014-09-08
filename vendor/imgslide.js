	var slideWidth = 220;
	var left = 0;
	var cs = 0;
	t = document.getElementById('scrollss').children;
	var tk = [];
	var work = false;
	for(i = 0; i < t.length; i++) tk.push(t[i]);
	t = tk;
	
	for(i = 0; i < t.length; i++) t[i].style.left = i*slideWidth;
	document.getElementById('viewportss').style.height = t[0].style.height;

	if (t.length < 5) document.getElementById('viewportss').style.width = (t.length-1)*slideWidth;
	else document.getElementById('viewportss').style.width = 4*slideWidth;

	
	//sliderTimer=setInterval(nextSlide,3000);
	

	function nextSlide() {
		if (!work) {
			work = true;
			cs++;
			if (t[0].style.left == '0px') {
				t.unshift(t[t.length-1]);
				t.pop();
				cs--;
			}
			inter = setInterval(function(){
								left += 20;
								for(i = 0; i < t.length; i++)	t[i].style.left = left + (i-1)*slideWidth;
								if (left == slideWidth) { 

									left = 0;
									clearInterval(inter);
									work = false;
								}
			},100);
		}
	}


	function prevSlide(){
		if (!work) {
			work = true;
			cs--;
			if ((t[t.length-1].style.left == ((t.length-2)*slideWidth + 'px') ) || (t[t.length-1].style.left == 3*slideWidth + 'px')) {
				t.push(t[0]);
				t.shift();
				cs++;
			}
			inter = setInterval(function(){
								left -= 20;
								for(i = 0; i < t.length; i++)	t[i].style.left = left + i*slideWidth;
								if (left == -slideWidth) { 

									left = 0;
									clearInterval(inter);
									work = false;
								}
			},100);
		}
	}
