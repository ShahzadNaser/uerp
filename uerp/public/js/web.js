$(window).on('load', function() {
    $('.footer-powered').html('<a href="http://uerp.ca//" target="_blank" class="text-muted">Powered by UERP.CA - ERP Software for Services Companies</a>');
    $('.nav-item.dropdown-help').removeClass("d-lg-block").addClass("hidden");
});
$(document).bind('toolbar_setup', function() {
    $('.footer-powered').html('<a href="http://uerp.ca/" target="_blank" class="text-muted">Powered by UERP.CA - ERP Software for Services Companies</a>');
    $('.nav-item.dropdown-help').removeClass("d-lg-block").addClass("hidden");
});
$(document).ready(function(){
    $('.footer-powered').html('<a href="http://uerp.ca/" target="_blank" class="text-muted">Powered by UERP.CA - ERP Software for Services Companies</a>');
    $('.nav-item.dropdown-help').removeClass("d-lg-block").addClass("hidden");
});
