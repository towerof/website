//link to main page
function indexRedirect() {
    window.location.assign("index.html");
}
//link to login
function loginRedirect() {
    window.location.assign("login.html");
}
//link to register
function createRedirect() {
    window.location.assign("register.html");
}
//fix carousel
function currentSlide(n) {
    showSlides(slideIndex = n);
}
//link to the map
function mapRedirect() {
    window.location.assign("map.html");
}
//shop counter
$('.btn-plus, .btn-minus').on('click', function(e) {
    const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
    const input = $(e.target).closest('.input-group').find('input');
    if (input.is('input')) {
        input[0][isNegative ? 'stepDown' : 'stepUp']()
    }
})

//map functionality
function initMap() {
    // The location of our shop
    const shop = { lat: 37.788467122385, lng: -122.40838792367387 };
    // The map, centered at the shop
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: shop,
    });
    // The marker, positioned at the shop
    const marker = new google.maps.Marker({
        position: shop,
        map: map,
    });
}
//itframe pop-up map
$('#hoverMe').hover(function() {
    $('#tooltip').fadeIn();
}, function() {
    $('#tooltip').fadeOut();
});
$('#tooltip').hover(function() {
    $('#tooltip').fadeIn();
}, function() {
    $('#tooltip').fadeOut();
});