//<![CDATA[
$(function(){
 
    $(document).on( 'scroll', function(){
 
        if ($(window).scrollTop() > 100) {
            $('.smoothscroll-top').addClass('show');
        } else {
            $('.smoothscroll-top').removeClass('show');
        }
    });
 
    $('.smoothscroll-top').on('click', scrollToTop);
});
 
function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 600, 'linear');
}
//
function blockLinks(parentID, children) {
 var parent = document.getElementById(parentID),
 content = parent.getElementsByTagName(children);
 for (var i = 0; i < content.length; i++) {
  if (content[i].innerHTML.indexOf('</a>') !== -1) {
   content[i].innerHTML = content[i].innerHTML.replace(/<a[^>]*>|<\/a>/g, "");  
  }
 }
}
blockLinks('comments', 'p');
//
function showComm(e){document.getElementById(e)&&("none"!=document.getElementById(e+"-show").style.display?(document.getElementById(e+"-show").style.display="none",document.getElementById(e).style.display="block"):(document.getElementById(e+"-show").style.display="block",document.getElementById(e).style.display="none"))};
//]]>
