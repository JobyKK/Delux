//create 2 column
//1 column for redirect diferent check-box
//2 column for create 2 layer type-menu
function filters() {
	
		//тут запрос в бд товаров и их вывод в правую часть
			$.ajax({
				url: "goods.json",
				dataType : "json",             
				success: function (data_goods) {
					var goods = document.getElementById("goods");

					var checkBoxFilters = document.getElementsByName("checkBoxFilter");
					var checkBox = [];
					var selectFilters = document.getElementsByName("selectFilters[]");
					var selectF = [];
					split_goods = [];

					for(i = 0; i < checkBoxFilters.length; i++){
						if (checkBoxFilters[i].checked) {
							checkBox.push(checkBoxFilters[i].value);
						}
					}

					for(i = 0; i < selectFilters.length; i++){
						selectF.push(selectFilters[i][selectFilters[i].selectedIndex].value);	
					}
					
					var ids = selectF.join();
					for(i = 0; i < data_goods.length; i++){
				
						if ((data_goods[i].category.split("/")[1] == ids) &&
							(checkBox.some(function(item){
								if (item == data_goods[i].producer) {
									return true;
								} else return false;
							})))
						{
							var cgood = new cGood(data_goods[i].id,
								data_goods[i].title,
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

					if (split_goods.length == 0) {
						goods.innerHTML = '<h4>Ничего не найдено</h4>';
					} else {
						goodsView(10);
					}

				}
			});
		
			
};
