(function(e,p){e.extend({lockfixed:function(a,b){b&&b.offset?(b.offset.bottom=parseInt(b.offset.bottom,10),b.offset.top=parseInt(b.offset.top,10)):b.offset={bottom:100,top:0};if((a=e(a))&&a.offset()){var n=a.css("position"),c=parseInt(a.css("marginTop"),10),l=a.css("top"),g=a.offset().top,h=!1;if(!0===b.forcemargin||navigator.userAgent.match(/\bMSIE (4|5|6)\./)||navigator.userAgent.match(/\bOS ([0-9])_/)||navigator.userAgent.match(/\bAndroid ([0-9])\./i))h=!0;e(window).bind("scroll resize orientationchange load lockfixed:pageupdate",
a,function(k){if(!h||!document.activeElement||"INPUT"!==document.activeElement.nodeName){var d=0,d=a.outerHeight();k=a.outerWidth();var m=e(document).height()-b.offset.bottom,f=e(window).scrollTop();"fixed"!=a.css("position")&&(g=a.offset().top,c=parseInt(a.css("marginTop"),10),l=a.css("top"));f>=g-(c?c:0)-b.offset.top?(d=m<f+d+c+b.offset.top?f+d+c+b.offset.top-m:0,h?a.css({marginTop:parseInt((c?c:0)+(f-g-d)+2*b.offset.top,10)+"px"}):a.css({position:"fixed",top:b.offset.top-d+"px",width:k+"px"})):
a.css({position:n,top:l,width:k+"px",marginTop:(c?c:0)+"px"})}})}}})})(jQuery);
//
if (screen.width &gt;= 768) {
(function($) {
  $.lockfixed(&quot;#sticky&quot;,{offset: {top: 0, bottom:0 }});
})(jQuery);
}
//
window.onload=function(){ var tfrow = document.getElementById(&#39;tfhover&#39;).rows.length; var tbRow=[]; for (var i=1;i&lt;tfrow;i++) {  tbRow[i]=document.getElementById(&#39;tfhover&#39;).rows[i];  tbRow[i].onmouseover = function(){    this.style.backgroundColor = &#39;#bbb&#39;;  };  tbRow[i].onmouseout = function() {    this.style.backgroundColor = &#39;transparent&#39;;  }; }};
