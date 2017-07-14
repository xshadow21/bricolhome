var slower = 8;

$(document).ready(function() {
  $(".kaleid_cont").each(function(i) {
    $(this).mousemove(function(e) {
      $(this).find(".kalsec").each(function(i) {
        $(this).css({
          backgroundPosition: e.pageX/slower + "px " + e.pageY/slower + "px"
        });
      });
    });
  });
});
