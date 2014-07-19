function MyOnClick(ids,sub,last) {
	if (sub != "") {
		arr = sub.split(",");
		var doc = document.getElementById(ids);
		var temp = "";
		for (i=0;i<arr.length-1;i++) {
			temp += '<a href="#" style="margin-left:20px;" class = "animated fadeInDown">'
			temp += arr[i]
			temp += '</a><br>'
		}
	doc.innerHTML = temp;
	} 
};
