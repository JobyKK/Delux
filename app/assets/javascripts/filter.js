//create 2 column
//1 column for redirect diferent check-box
//2 column for create 2 layer type-menu
function filters(ids,data) {
	for(i = 0; i < data.length;i++){
		if (data[i].id == ids) {
			var datas = data[i];
			break;
		}
	}
	produser
			
			//тут запрос в бд товаров и их вывод в правую часть
			$.ajax({
				url: "goods.json",
				dataType : "json",             
				success: function (data_goods) {
					var goods = document.getElementsByName("goods");
					var mas_goods = "";//создаеться CMS mas_goods из json, тут только то что нужно для вывода
					var b_next = false;//if goods length > 10 b_next=true
					var k = 0;
					for(i = 0; (i < data_goods.length) && (k < 10);i++){//берем всего 10 тemоваров
						
						if (data_goods[i].category == ids) {
							mas_goods += data_goods[i].title;
							mas_goods += ",";
							mas_goods += data_goods[i].price;
							mas_goods += ",";
							k++;
							if (k==9) {
								b_next=true;						
							}
						}
						
					} 
					var split_goods = mas_goods.split(",");
					
					var temp_goods = '<table border="1">';//это создаеться хтмл код который пишеться в правой части 
					for(i = 0;i < split_goods.length - 1; i++) {
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
					if (b_next) {
						temp_goods +='<a>'
					}
					goods[0].innerHTML = temp_goods;//в етом месте он перезаписываеться
				}
			});
		
			if (datas.sub_category != null) {

				var primary = document.getElementsByName("primary");
				for(i=0;i<primary.length;i++) {		
					primary[i].innerHTML = "";
				}
			
				var doc = document.getElementById(ids);
				var temp = '<div name="primary"><ul class="nav nav-pills nav-stacked">';
				var arr = datas.sub_category.split(",");
				
				for(i = 0; i < arr.length - 1; i++) {
					temp += '<li>'
					temp += '<a style="margin-left:20px;" class="animated fadeInDown">'
					for(p = 0; p < data.length;p++){
						if (data[p].id == arr[i]) {
							temp += data[p].title;
							break;
						}
					}
					temp +='</a></li>';					
				}			
	
				temp += '</ul></div>';
				doc.innerHTML += temp;
			}
		}	
	});
};
