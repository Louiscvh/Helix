particlesJS.load('particles-js', 'packages/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

{
  "particles": {
    "number": {
      "value": 123,
      "density": {
        "enable": true,
        "value_area": 868.0624057955
      }
    },
    "color": {
      "value": "#acacac"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.29987610382026364,
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
      "enable": true,
      "distance": 0,
      "color": "#ffffff",
      "opacity": 0.2683101981549727,
      "width": 5.681863019752363
    },
    "move": {
      "enable": true,
      "speed": 3.56,
      "direction": "top",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 7102.328774690454,
        "rotateY": 10000
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
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 0,
        "line_linked": {
          "opacity": 0
        }
      },
      "bubble": {
        "distance": 694.3260165176501,
        "size": 105.57003759917487,
        "duration": 2.7610625218245732,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 423.57642357642357,
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
