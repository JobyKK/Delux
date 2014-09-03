function searchs() {			
	if (document.getElementById("search").value) {

		var sub = document.getElementById("search").value;
		split_goods = [];	
		$.ajax({
			url: "goods.json",
			dataType : "json",             
			success: function (data_goods) {

				var goods = document.getElementById("goods");
				var k = 0;

				for(i = 0; i < data_goods.length; i++){
					if (data_goods[i].title.indexOf(sub) != -1) {
						var cgood = new cGood(
							data_goods[i].id,							
							data_goods[i].title,
							data_goods[i].price,
							data_goods[i].short_description,
							data_goods[i].description,
							data_goods[i].available,
							data_goods[i].category,
							data_goods[i].producer,
							data_goods[i].avatar_file_name);
				
						split_goods.push(cgood);							
					}
				} 
				if (split_goods.length == 0) {
					goods.innerHTML = '<h4>Ничего не найдено</h4>';
				} else {
					goodsView(10);
				}
				//может вывести первые товары
			}
		});
	}
};
