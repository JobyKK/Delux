
$(document).ready(function(){

	var startFrom = 0;
	var mas_goods = "";//создаеться CSV mas_goods из json, тут только то что нужно для вывода
	var goods = document.getElementById("goods");

	

	$(window).scroll(function() {


        /* Если высота окна + высота прокрутки больше или равны высоте всего документа, то запускаем ajax-запрос */
		if($(window).scrollTop() + $(window).height() >= $(document).height() - 200) {

			if (document.getElementById('subMenu').getAttribute('name') != 'none') {
				$.ajax({
					url: "goods.json",
					dataType : "json",             
					success: function (data_goods) {  
			
						var ids = document.getElementById('subMenu').getAttribute('name');
						alert(ids);
						for(i = 0; i < data_goods.length; i++){
				
							if (data_goods[i].category == ids) {
								mas_goods += data_goods[i].title;
								mas_goods += ",";
								mas_goods += data_goods[i].price;
								mas_goods += ",";
							}
						} 
					}
				});

				var split_goods = mas_goods.split(",");
				var temp_goods = '<table border="1">';//это создаеться хтмл код который пишеться в правой части 

				for(i = startFrom*2;i < (split_goods.length - 1) && (i < startFrom*2+6); i++) {
					temp_goods += '<div class="span6">'
					temp_goods += '<tr><td>';						
					temp_goods += split_goods[i];
					temp_goods += '</td>';
					i++;
					temp_goods += '<td>';				
					temp_goods += split_goods[i];
					temp_goods += '</td></tr>';
					temp_goods += '</div>'
				}
				temp_goods += '</table>';
			
				goods.innerHTML += temp_goods;//в етом месте он перезаписываеться
				startFrom += 3;
			}
		}
        });
});
