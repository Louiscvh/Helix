$(document).ready(function() {
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

    $("a,#wrapper, .burgerContainer, .headerRight p, .switchBtnContainer svg").on("mouseenter", function() {
    $('.pointer1').addClass("active");
    $('.pointer2').addClass("active");
  });
  $("a,#wrapper, .burgerContainer, .headerRight p, .switchBtnContainer svg").on("mouseleave", function() {
    $('.pointer1').removeClass("active");
    $('.pointer2').removeClass("active");
  });

  $( ".burgerContainer" ).click(function() {
    $( ".sidebar, .sidebar__mid, .sidebar__low" ).toggleClass( "--open" );
  });

});
