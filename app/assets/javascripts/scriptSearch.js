function searchs() {			
	if (document.getElementById("search").value) {

		var sub = document.getElementById("search").value;
			
		$.ajax({
			url: "goods.json",
			dataType : "json",             
			success: function (data_goods) {

				var goods = document.getElementById("goods");
				var k = 0;

				for(i = 0; i < data_goods.length; i++){
					if (data_goods[i].title.indexOf(sub) != -1) {
						split_goods.push(data_goods[i].title);
						split_goods.push(data_goods[i].price);							
					}
				} 
		
				var temp_goods = '<ul>';
				for(i = 0;(i < split_goods.length - 1) && (i < 20); i++) {
					temp_goods += '<li>';						
					temp_goods += split_goods[i];
					temp_goods += '</li>';
					i++;
					temp_goods += '<li>';				
					temp_goods += split_goods[i];
					temp_goods += '</li>';
				}
				temp_goods += '</ul>';
				goods.innerHTML = temp_goods;
			}
		});
	}
};
