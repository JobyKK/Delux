function checkBox(ids) {
	$.ajax({
		url: "categories.json",
		dataType : "json",             
		success: function (data) {
			for(i = 0; i < data.length;i++){
				if (data[i].id == ids) {
					var datas = data[i];
					break;
				}
			}

			$.ajax({
				url: "partners.json",
				dataType : "json",             
				success: function (data_partners) {
					temp_partners ='';
					var checkBox = document.getElementById("checkBox");
					checkBox.innerHTML = '';
					var partners_id = datas.partners.split(",");
					for(i = 0; i < partners_id.length; i++ ) {
						for(j = 0; j < data_partners.length;j++){
							if (data_partners[j].id == partners_id[i]) {
								temp_partners +='<input type="checkbox" name="checkBoxFilter">';
								temp_partners += data_partners[j].title;
								temp_partners +='<br>';
								break;
							}
						}
					}	
					checkBox.innerHTML += temp_partners;
				}
			});
		}
	});
};

function subMenu(ids) {
	$.ajax({
		url: "categories.json",
		dataType : "json",             
		success: function (data) {
			for(i = 0; i < data.length;i++){
				if (data[i].id == ids) {
					var datas = data[i];
					break;
				}
			}		
			//начало блока субМеню	
			var subMenu = document.getElementById("subMenu");
			var temp = '';
			subMenu.setAttribute('name', ids);
			if (datas.sub_category) {
				split_category_id = datas.sub_category.split(',');
				for(i = 0; i < split_category_id.length; i++) {
				
					for(j = 0; j < data.length; j++){
						if (data[j].id == split_category_id) {
							var data_down = data[i];
							break;
						}
					}
					temp += '<h5>'+data_down.title+':</h5><select>';
					if (data_down.sub_category) {
						var split_category_down_id = data_down.sub_category.split(",");
				
						for(j = 0; j < split_category_down_id.length; j++) {
							for(k = 0; k < data.length; k++){
								if (data[k].id == split_category_down_id[j]) {
									temp += '<option>'+data[k].title+'</option>';
									break;
								}
							}
						}
					}
					temp += '</select>';
				} 
			}
			subMenu.innerHTML = temp + '<h1>'+ids+'</h1>';
		}
	
	});	
};

function goodsV(ids) {
//тут запрос в бд товаров и их вывод в правую часть
	$.ajax({
		url: "goods.json",
		dataType : "json",             
		success: function (data_goods) {
			var goods = document.getElementById("goods");
			var mas_goods = "";//создаеться CSV mas_goods из json, тут только то что нужно для вывода
			for(i = 0; (i < data_goods.length) && (i < 20);i++){//берем всего 10 mоваров
				
				if (data_goods[i].category == ids) {
					mas_goods += data_goods[i].title;
					mas_goods += ",";
					mas_goods += data_goods[i].price;
					mas_goods += ",";
				}
			} 
			var split_goods = mas_goods.split(",");
			
			var temp_goods = '<table border="1">';//это создаеться хтмл код который пишеться в правой части 
			for(i = 0;i < split_goods.length - 1; i++) {
				
				temp_goods += '<div class="span6">'
				for(j=0;j<40;j++){
				temp_goods += '<tr><td>';						
				temp_goods += split_goods[i];
				temp_goods += '</td>';
				i++;
				temp_goods += '<td>';				
				temp_goods += split_goods[i];
				temp_goods += '</td></tr>';
				i--;}
				temp_goods += '</div>';
				i++;
			}
			temp_goods += '</table>';
			goods.innerHTML = temp_goods;//в етом месте он перезаписываеться
		}
	});
};

function MyOnClick(ids) {
	$.ajax({
		url: "categories.json",
		dataType : "json",             
		success: function (data) {
			for(i = 0; i < data.length;i++){
				if (data[i].id == ids) {
					var datas = data[i];
					break;
				}
			}

			//тут блок создния чекБоксов
			var checkBox = document.getElementById("checkBox");
			checkBox.innerHTML = '';
			//the end))
		
			//начало блока субМеню
			var subMenu = document.getElementById("subMenu");
			subMenu.innerHTML = '';
			subMenu.setAttribute('name', 'none');
			//конец блока субМеню	
	
			//goods
			var goods = document.getElementById("goods");
			var temp = '<table align="center" class="animated zoomInRight">';
			var arr = datas.sub_category.split(",");
				
			for(i = 0; i < arr.length - 1; i++) {
				if (i % 2 == 0) {
					temp += '<tr>';
				}
				temp += '<td><a style="margin-left:20px;" onclick="checkBox('+arr[i]+');';
				temp +=	'subMenu('+arr[i]+');goodsV('+arr[i]+')">';				
				for(p = 0; p < data.length;p++){
					if (data[p].id == arr[i]) {
						temp += data[p].title;
						break;
					}
				}
				
				temp +='</a></td>';
				if (i % 2 != 0) {
					temp += '</tr>';
				}					
			}			
	
			temp += '</table>';
			goods.innerHTML = temp;

			//end of goods

			//менюшка	
			if (datas.sub_category != null) {

				var primary = document.getElementsByName("primary");
				for(i=0;i<primary.length;i++) {		
					primary[i].innerHTML = "";
				}
			
				var doc = document.getElementById(ids);
				var temp = '<div name="primary"><ul class="nav nav-pills nav-stacked">';
				var arr = datas.sub_category.split(",");
				
				for(i = 0; i < arr.length - 1; i++) {
					temp += '<li><a style="margin-left:20px;" class="animated fadeInDown" onclick="checkBox('+arr[i]+');';
					temp +=	'subMenu('+arr[i]+');goodsV('+arr[i]+')">';				
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
