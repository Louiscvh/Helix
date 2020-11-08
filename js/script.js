$(document).ready(function() {

  /* Liaison du curseur */
  $(document).mousemove(function(e) {
    $('.pointer').css({
      left: e.pageX,
      top: e.pageY
    });
    $('.pointer2').css({
      left: e.pageX,
      top: e.pageY
    });
  })

  $(document).on({
    mouseenter: function() {
      $('.text-cursor').css('display', 'none');
    },
    mouseleave: function() {
      $('.text-cursor').css('display', 'block');
    },
  })

  /* Gestion du curseur */
  $("a,#wrapper, .burgerContainer, .headerRight p, .switch-btn__Container svg").on("mouseenter", function() {
    $('.pointer1').addClass("active");
    $('.pointer2').addClass("active");
  });
  $("a,#wrapper, .burgerContainer, .headerRight p, .switch-btn__Container svg").on("mouseleave", function() {
    $('.pointer1').removeClass("active");
    $('.pointer2').removeClass("active");
  });

  /* Apparition de la sidebar */
  $(".burgerContainer").click(function() {
    $(".sidebar, .sidebar__mid, .sidebar__low").toggleClass("--open");
  });

  /* Changement de parfum */



});

var compteurCouleur = 0;

function ColorChecker () {
  if(compteurCouleur == 0 ) {
    $('body').addClass('black').removeClass('red').removeClass('yellow');
  }

  if(compteurCouleur == 1 ) {
    $('body').addClass('red').removeClass('black').removeClass('yellow');
  }

  if(compteurCouleur == 2 ) {
    $('body').addClass('yellow').removeClass('black').removeClass('red');
  }
}

$(".switch-btn__Container__right").click(function(){
  compteurCouleur = compteurCouleur + 1;
  ColorChecker();
});

$(".switch-btn__Container__left").click(function(){
  compteurCouleur = compteurCouleur - 1;
  ColorChecker();
});
