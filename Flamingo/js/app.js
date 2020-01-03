var selector = '.nav i';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});


$(function () {
  $('.toggle-menu').click(function(){
   $('.exo-menu').toggleClass('display');
   
  });
  
 });








$('.category-slider').slick({
  infinite: true,
  autoplay: true,
  speed: 800,
  autoplaySpeed: 2000,
});

$('.elan-asagi').slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 900,
  speed: 700,
});



function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}




function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}








$('#login').click(function() {

$('#loginModal').modal('show');
  
});


  $('#register').click(function() {

  $('#registerModal').modal('show');
    
  });



