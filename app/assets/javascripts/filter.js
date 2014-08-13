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
					var selectFilters = document.getElementsByName("selectFilters");
					var selectF = [];

					for(i = 0; i < checkBoxFilters.length; i++){
						if (checkBoxFilters[i].checked) {
							checkBox.push(checkBoxFilters[i].value);
						}
					}

					for(i = 0; i < selectFilters.length; i++){
						selectF.push(selectFilters[i][selectFilters[i].selectedIndex].value);	
					}
					
					//cпорный момент
					ids = selectF[0];
					//конец
					for(i = 0; i < data_goods.length; i++){
				
						if //((data_goods[i].category == ids) &&
							(checkBox.some(function(item){
								if (item == data_goods[i].producer) {
									return true;
								} else return false;
							}))//)
						{
							split_goods.push(data_goods[i].title);
							split_goods.push(data_goods[i].price);
						}
					} 

				}
			});
		
			
};
