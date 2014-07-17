//document.addEventListener('page:change', function() {

  //      document.getElementById('primary-content').className += 'animated fadeInDown';
//
//});

//document.addEventListener('page:fetch', function() {

  //      document.getElementById('primary-content').className += 'animated fadeInUp';

//});

function MyOnClick(sub) {
if (sub != "") { 
	arr = sub.split(",");
	for (i=0;i<arr.length;i++) {
		document.getElementById(arr[i]).className += 'animated fadeInDown';
	}
} else {
alert('lol'); }
};
