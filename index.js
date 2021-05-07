jQuery(document).ready(function ($) {

  // кнопка "наверх"
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $(".to_top").fadeIn();
    } else {
      $(".to_top").fadeOut();
    }
  });
  $(".to_top").click(function() {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});