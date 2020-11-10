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

  /* JSON configuration de Particles.js */
  particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.8,
        "direction": "top",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
  );

/* Gestion du curseur */
$("a,#wrapper, .burgerContainer, .headerRight p, .switch-btn__Container svg, .sidebar__right__social, .soundBtn, .footer__social__block, .footer__text").on("mouseenter", function() {
  $('.pointer1').addClass("active");
  $('.pointer2').addClass("active");
});
$("a,#wrapper, .burgerContainer, .headerRight p, .switch-btn__Container svg, .sidebar__right__social, .soundBtn, .footer__social__block, .footer__text").on("mouseleave", function() {
  $('.pointer1').removeClass("active");
  $('.pointer2').removeClass("active");
});

/* Apparition de la sidebar */
$(".burgerContainer").click(function() {
  $(".sidebar, .sidebar__mid, .sidebar__low").toggleClass("--open");
});

/* ON/OFF de la musique de fond */
var audioBtn = document.getElementById("audioBtn");
var myAudio = document.getElementById("myAudio");
myAudio.volume = 0.3;
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

audioBtn.onclick = function(){
  togglePlay();
};

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
}

  $(".switch-btn__Container__right").click(function() {
    compteurCouleur = compteurCouleur < maxCouleur ? ++compteurCouleur : 0;
    ColorChecker();
  });

  $(".switch-btn__Container__left").click(function() {
    compteurCouleur = compteurCouleur > 0 ? --compteurCouleur : maxCouleur;
    ColorChecker();
  });

});
