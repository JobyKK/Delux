function goodsShow(ids) {
	var good = document.getElementById('goods');
	$(window).scrollTop($("#goods").offset().top);
	good.innerHTML = '';
	var el = document.createElement('iframe');
	good.appendChild(el);
	el.id = 'iframe';
	el.style.width = "100%";
	el.style.height = "600px";
	el.src = '/goods/'+ids+'/purchase';
	
};
