document.addEventListener('page:change', function() {

        document.getElementById('primary-content').className += 'animated fadeInDown';

});

document.addEventListener('page:fetch', function() {

        document.getElementById('primary-content').className += 'animated fadeInUp';

});

