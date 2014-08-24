function goodsShow(ids) {
	var good = document.getElementById('goods');
	$(window).scrollTop($("#goods").offset().top);
	good.innerHTML = '';
	var el = document.createElement('iframe');
	good.appendChild(el);
	el.id = 'iframe';
	el.style.width = "100%";
	el.frameBorder=0;
  	el.src = '/goods/'+ids+'/purchase';
	el.style.height = "600px";
};
