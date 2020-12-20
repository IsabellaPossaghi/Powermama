//questo codice viene eseguito quando la pagina è stata completamente caricata

$(document).ready(function() {

  // cambio l'altezza dello slider in base all'altezza della finestra
  var windowHeight = $(window).height(),
    topSection = $('.slider-item');
  topSection.css('height', windowHeight);

  $(window).resize(function() {
    var windowHeight = $(window).height();
    topSection.css('height', windowHeight);
  });

  // attivo lo slider
  jQuery("#slider").slippry({
    elements: '.slider-item',
    adaptiveHeight: true,
    pager: false
  });

  // attivo il menu per la versione responsive
  jQuery("#nav ul").slicknav({
    brand: '<img src="img/logo.png" />'
  });

  // attivo il filtraggio su milestones
  jQuery("#milestones-wrapper").mixItUp();

  // attivo il carousel
  jQuery("#social-carousel").owlCarousel({
    items: 4,
    autoPlay: true,
    loop: true
  });

  // attivo lo scroller per il menu
  var s = skrollr.init();
  skrollr.menu.init(s, {
    change: function(hash, top) {
      console.log(hash, top);
    }
  });

  // finestra modale - FINESTRA POP UP//

  // definisco la f. modale
  var modal = document.getElementById("myModal");

  $('#popup').click(function(event){
          $('#myModal').fadeIn(1000);
      });

      $('#chiudi_bottone, .close').click(function(event){
          $('#myModal').fadeOut(1000);
      });

      // chiusura quando clicco fuori
      window.onclick = function(event) {
        if (event.target == modal) {
          $('#myModal').fadeOut(1000);
        }
      }



  // fade in colonne features (solo immagine)

  $(function() {
    $('.scroll_an').fadeIn('fast');
  });
  $(document).ready(function() {

    //quando si scrolla
    $(window).scroll(function() {

      //class che ho dato all'elemento
      $('.hideme').each(function(i) {
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        //animazione parte se il mio ogetto è nella viewport
        if (bottom_of_window > bottom_of_object) {
          $(this).animate({
            'opacity': '1'
          }, 1500); //velocità di comparsa elemento
        }

      });
    });
  });

//cambio l'ordine delle colonne se la view dello screen si riduce
  if ( $(window).width() < 768 ){
        $('.column-3').before($('.column-4'));
    }

    $(window).resize(function(){
        if ( $(window).width() < 768 ){
            $('.column-3').before($('.column-4'));
        }else{
            $('.column-4').before($('.column-3'));
        }
    });


});
