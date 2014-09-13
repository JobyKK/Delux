function goodsShow(ids) {
	createPanel();
	var good = document.getElementById('frame');
	$(window).scrollTop($("#goods").offset().top);
	good.innerHTML = '';
	var el = document.createElement('iframe');
	good.appendChild(el);
	el.id = 'iframe';
	el.style.width = "100%";
	el.frameBorder=0;
  	el.src = '/goods/'+ids+'/purchase';
	el.onload = function() {
		var h = document.getElementById('iframe');
		var y = (h.contentWindow || h.contentDocument);
		el.height = y.document.body.children[0].clientHeight + 40;
	}
};
function createPanel(){
	var good = document.getElementById('goods');
	good.innerHTML = '';
	var temp = '<div class="panel panel-primary" ><div class="panel-body" id="frame"></div></div>';
	good.innerHTML += temp;
};
