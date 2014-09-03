var split_goods = [];
var startFrom = 0;

$(document).ready(function(){
	$('#liquid').liquidcarousel({height:160});
	$(window).scroll(function() {


        /* Если высота окна + высота прокрутки больше или равны высоте всего документа, то запускаем ajax-запрос */
		if(($(window).scrollTop() + $(window).height() >= $(document).height() - 300) && (startFrom < split_goods.length)) {
			if (document.getElementById('subMenu').getAttribute('name') != 'none') {
				
				$.ajax({
					url: "partners.json",
					dataType : "json",             
					success: function (data_partners) {
						var goods = document.getElementById('goods').children[0].children[0].children[0];
						var temp_goods = '';
						for(i = startFrom;(i < split_goods.length) && (i < startFrom + 3); i++) {			
							temp_goods += '<div class="span10 offset1">';
							temp_goods +=	 '<div class="panel panel-primary"><div class="panel-heading">';
							temp_goods +=		'<h4>'+ split_goods[i].title + '<h4>';
							temp_goods +=	 '</div>';
							temp_goods += 	'<div class="panel-body">';			
							temp_goods +=	'<div class="row-fluid">';
							temp_goods +=	'<div class="span4">';
							temp_goods += 		'<div class="good_img">';
							temp_goods += 			'<img src="/assets/' + split_goods[i].avatar + '" class="img-polaroid" >';
							temp_goods += 		'</div>';
							temp_goods +=	'</div>';
							temp_goods +=	'<div class="span4"><blockquote>';	
							temp_goods +=	split_goods[i].short + '<br>';
							temp_goods +=	'<strong>Производитель: </strong><br>';
									  for(j = 0; j < data_partners.length; j++) {
											if (data_partners[j].id == split_goods[i].producer) {
											temp_goods += data_partners[j].title + '<br>';		
											}		
										}
							temp_goods +=   '<strong>Наличие: </strong>';
									if (split_goods[i].available == true){
							temp_goods += 		'есть на складе';
									}
									else {
							temp_goods +=		'уточните';						
									}
							temp_goods +=	'</blockquote></div>';
							temp_goods +=	'<div class="span3">';
							temp_goods +=		'<div class="panel panel-primary text-center" style="background: #D9EDF7;"><h4>Цена: ';
							temp_goods += 		split_goods[i].price+'</h4></div>';
							temp_goods +=   '<div class="well well-small"><a onclick="goodsShow('+split_goods[i].id+')" class="btn btn-large btn-block btn-primary">Подробнее</a>';
							temp_goods += '<a class="btn btn-small btn-block" >Перезвонить Вам</a></div>';
							temp_goods +=	'</div>'
							temp_goods += '</div></div></div></div>';
							startFrom++;
						}
						goods.innerHTML += temp_goods;
					}
				});
			}
		}
	});
});
