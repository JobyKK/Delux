function memory(mem) {
	
	return memory
}

function MyOnClick(ids,sub) {
	if (sub != "") {
		arr = sub.split(",");
		var primary = document.getElementsByName("primary");
		for(i=0;i<primary.length;i++) {		
			primary[i].innerHTML = "";
		}
		var doc = document.getElementById(ids);
		var temp = '<div name="primary">';
		
		for (i=0;i<arr.length-1;i++) {
			temp += '<a href="#" style="margin-left:20px;" class = "animated fadeInDown">'
			temp += arr[i]
			temp += '</a><br>'
		}
	temp += "</div>"
	
	doc.innerHTML = temp;
	} 
};
