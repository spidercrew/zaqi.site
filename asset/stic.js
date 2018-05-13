//<![CDATA[
$(function(){ // document ready
   if ($('#sticky').length) { // make sure "#sticky" element exists
      var el = $('#sticky');
      var stickyTop = $('#sticky').offset().top; // returns number
      var stickyHeight = $('#sticky').height();

      $(window).scroll(function(){ // scroll event
          var limit = $('#footer').offset().top - stickyHeight - 5;

          var windowTop = $(window).scrollTop(); // returns number

          if (stickyTop < windowTop){
             el.css({ position: 'fixed', top: 5 });
          }
          else {
             el.css('position','static');
          }

          if (limit < windowTop) {
          var diff = limit - windowTop;
          el.css({top: diff});
          }
        });
   }
});
//]]>
