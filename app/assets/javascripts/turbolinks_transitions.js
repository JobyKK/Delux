function cGood(title,price,short,full,available,category,producer,avatar) {
	this.title = title;
	this.price = price;
	this.short = short;
	this.full = full;
	this.available = available;
	this.category = category;
	this.producer = producer;
	this.avatar = avatar;
};


function lvl2click(ids) {
	split_goods = []
	addFrame();
	checkBox(ids);
	subMenu(ids);
	goodsV(ids);
};

function addFrame() {
	temp = "";
	var menuRow = document.getElementById("menuRow");
	var menuFrame = document.getElementById("menuFrame");
	var goods = document.getElementById("goods")
	menuFrame.innerHTML = '';
	temp += '<div class="panel panel-default"><div class="panel-body"><div class="row" id="menuRow">'
	temp += menuRow.innerHTML;
	temp += '</div></div></div>';
	temp += '<div id="goods">'
	temp += goods.innerHTML;
	temp += '</div>'
	menuFrame.innerHTML += temp;
}

function goodsV(ids) {
//тут запрос в бд товаров и их вывод в правую часть
	$.ajax({
		url: "goods.json",
		dataType : "json",             
		success: function (data_goods) {
			var goods = document.getElementById("goods");
			for(i = 0; i < data_goods.length; i++){
				if (data_goods[i].category.split("/")[0] == ids) {

					var cgood = new cGood(data_goods[i].title,
						data_goods[i].price,
						data_goods[i].short_description,
						data_goods[i].description,
						data_goods[i].available,
						data_goods[i].category,
						data_goods[i].producer,
						data_goods[i].avatar);
				
					split_goods.push(cgood);
				}
			} 
			
			goodsView(10);
		}
	});
};

function goodsView(k) {
	startFrom = 0;
	
//тут так надо потому что надо читать продусера мы в джейсоне храним только айди, доделай только тут я автопрокрутку сам доделаю по твоему примеру
	$.ajax({
		url: "partners.json",
		dataType : "json",             
		success: function (data_partners) {
			var temp_goods = '<div class="panel panel-default"><div class="panel-body"><div class="row">';
			for(i = 0;(i < split_goods.length) && (i < k); i++) {			
				temp_goods += '<div class="span6 " style="margin-left: 160px;">';
				temp_goods += split_goods[i].title+'<br>';
				temp_goods += 'цена'+split_goods[i].price+'<br>';
				temp_goods += split_goods[i].short+'<br>';
				temp_goods += 'есть на складе:'+split_goods[i].available+'<br>';

				for(j = 0; j < data_partners.length; j++) {
					if (data_partners[j].id == split_goods[i].producer) {
						temp_goods += 'Производиетль:'+data_partners[j].title;		
					}		
				}
				temp_goods += '</div>';
				startFrom++;
			}
			temp_goods += '</div></div></div>';
			goods.innerHTML = temp_goods;
		}
	});
	
};

function checkBox(ids) {
	$.ajax({
		url: "categories.json",
		dataType : "json",             
		success: function (data) {
			for(i = 0; i < data.length; i++){
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
					var is_admin = document.getElementById("Add");
					var partners_id = datas.partners.split(",");
					for(i = 0; i < partners_id.length; i++ ) {
						for(j = 0; j < data_partners.length; j++){
							if (data_partners[j].id == partners_id[i]) {
								if (!is_admin) {
									temp_partners +='<input type="checkbox" name="checkBoxFilter" checked value="';
								} else {
									temp_partners +='<input type="radio" name="checkBoxFilter" value="';
								}
								temp_partners += data_partners[j].id+'">';
								temp_partners += data_partners[j].title;
								temp_partners +='<br>';
								break;
							}
						}
					}		
					temp_partners += '<br><button onclick="filters()">Найти</button>'
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
			var subMenu = document.getElementById("subMenu");
			var temp = '';
			subMenu.setAttribute('name', ids);//this for autoScrolling 
			if (datas.sub_category) {
				split_category_id = datas.sub_category.split(',');
				for(i = 0; i < split_category_id.length-1; i++) {
				
					for(j = 0; j < data.length; j++){
						if (data[j].id == split_category_id[i]) {
							var data_3 = data[j];
							break;
						}
					}
					temp += '<h5>'+data_3.title+':</h5><select name="selectFilters[]">';
					if (data_3.sub_category) {
						var split_category_3_id = data_3.sub_category.split(",");
				
						for(j = 0; j < split_category_3_id.length; j++) {
							for(k = 0; k < data.length; k++){
								if (data[k].id == split_category_3_id[j]) {
									temp += '<option value="'+data[k].id+'">'+data[k].title+'</option>';
									break;
								}
							}
						}
					}
					temp += '</select>';
				} 
			}
			if (document.getElementById("Add")) {
				temp += '<br><input type="hidden" value="'+ids+'" name="category"><input type="submit" value="Добавить товар">';
			}
			subMenu.innerHTML = temp;
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
		
			//начало блока субМеню
			var subMenu = document.getElementById("subMenu");
			subMenu.innerHTML = '';
			subMenu.setAttribute('name', 'none');
			split_goods = [];
			//конец блока субМеню	
	
			//goods
			var goods = document.getElementById("goods");
			var temp = '<div class="panel panel-default"><div class="panel-body"><div class="row">';
			var arr = datas.sub_category.split(",");
				
			for(i = 0; i < arr.length - 1; i++) {
				if (i % 2 == 0) {
					temp += '<div class="span4 text-center" style="margin-left: 60px;">';
				}
				else {
					temp += '<div class="span4 text-center">';
				}
				temp += '<a style="margin-left:20px;" onclick="lvl2click('+arr[i]+')">';				
				for(p = 0; p < data.length;p++){
					if (data[p].id == arr[i]) {
						temp += '<img src="/assets/' + data[p].avatar_file_name + '"><br>';
						temp += data[p].title;
						break;
					}
				}
				
				temp +='</a></div>';
								
			}			
			temp +='</div></div></div>'
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
					temp += '<li><a style="margin-left:20px;" class="animated fadeInDown" onclick="lvl2click('+arr[i]+')">';				
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
