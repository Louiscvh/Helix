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
  $("a,#wrapper, .burgerContainer, .headerRight p, .switch-btn__Container svg, .sidebar__right__social, .sound").on("mouseenter", function() {
    $('.pointer1').addClass("active");
    $('.pointer2').addClass("active");
  });
  $("a,#wrapper, .burgerContainer, .headerRight p, .switch-btn__Container svg, .sidebar__right__social, .sound").on("mouseleave", function() {
    $('.pointer1').removeClass("active");
    $('.pointer2').removeClass("active");
  });

  /* Apparition de la sidebar */
  $(".burgerContainer").click(function() {
    $(".sidebar, .sidebar__mid, .sidebar__low").toggleClass("--open");
  });

});

/* Changement de parfum */

var compteurCouleur = 0;
var maxCouleur = 3;

function ColorChecker() {
  if (compteurCouleur == 0) {
    $('body').removeClass().addClass('black');
    $('.label-wrapper span').css('background-image', 'url("img/blackCan.png")')
  } else if (compteurCouleur == 1) {
    $('body').removeClass().addClass('red');
    $('.label-wrapper span').css('background-image', 'url("img/redCan.png")')
  } else if (compteurCouleur == 2) {
    $('body').removeClass().addClass('yellow');
    $('.label-wrapper span').css('background-image', 'url("img/yellowCan.png")')
  } else if (compteurCouleur == 3) {
    $('body').removeClass().addClass('vanilla');
    $('.label-wrapper span').css('background-image', 'url("img/vanillaCan.png")')
  }
  console.log(compteurCouleur);
}

$(".switch-btn__Container__right").click(function() {
  compteurCouleur = compteurCouleur < maxCouleur ? ++compteurCouleur : 0;
  ColorChecker();
});

$(".switch-btn__Container__left").click(function() {
  compteurCouleur = compteurCouleur > 0 ? --compteurCouleur : maxCouleur;
  ColorChecker();
});
