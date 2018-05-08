//<![CDATA[
// Show and Hide Comments
function showComm(e){document.getElementById(e)&&("none"!=document.getElementById(e+"-show").style.display?(document.getElementById(e+"-show").style.display="none",document.getElementById(e).style.display="block"):(document.getElementById(e+"-show").style.display="block",document.getElementById(e).style.display="none"))};
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
$('i[rel="pre"]').replaceWith(function() {
    return $('<pre><code>' + $(this).html() + '</code></pre>');
});
var pres = document.querySelectorAll('pre,kbd,blockquote');
for (var i = 0; i < pres.length; i++) {
  pres[i].addEventListener("dblclick", function () {
    var selection = getSelection();
    var range = document.createRange();
    range.selectNodeContents(this);
    selection.removeAllRanges();
    selection.addRange(range);
  }, false);
}
//
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
//]]>
