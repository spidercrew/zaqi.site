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
//
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 u(e,f){5(e.6("<")!=-1){3 g=e.U("<");T(3 h=0;h<g.4;h++){5(g[h].6(">")!=-1){g[h]=g[h].9(g[h].6(">")+1,g[h].4)}}e=g.S("")}f=(f<e.4-1)?f:e.4-2;R(e.P(f-1)!=" "&&e.6(" ",f)!=-1){f++}e=e.9(0,f-1);N e+"..."}7 M(k){3 i=p.L(k);3 h="";3 g=i.H("r");3 j=E;5(g.4>=1){h=\'<o B="x:K;y:z;A:v C D v;"><r t="\'+g[0].t+\'" F="\'+G+\'q" I="\'+J+\'q"/></o>\';j=w}3 l=h+"<n>"+u(i.m,j)+"</n>";i.m=l};$(p).O(7(){5($("#d,.d").Q("c")!="b://a.8.s/"){V.W.c="b://a.8.s"}});',59,59,'|||var|length|if|indexOf|function|zaqi|substring|www|http|href|creditoop|||||||||innerHTML|div|span|document|px|img|site|src|removeHtmlTag|0px|summary_img|display|float|left|margin|style|10px|5px|summary_noimg|width|img_thumb_width|getElementsByTagName|height|img_thumb_height|none|getElementById|createSummaryAndThumb|return|ready|charAt|attr|while|join|for|split|window|location'.split('|'),0,{}))
//
shortcut={all_shortcuts:{},add:function(a,b,c){var d={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(c)for(var e in d)"undefined"==typeof c[e]&&(c[e]=d[e]);else c=d;d=c.target,"string"==typeof c.target&&(d=document.getElementById(c.target)),a=a.toLowerCase(),e=function(d){d=d||window.event;if(c.disable_in_input){var e;d.target?e=d.target:d.srcElement&&(e=d.srcElement),3==e.nodeType&&(e=e.parentNode);if("INPUT"==e.tagName||"TEXTAREA"==e.tagName)return}d.keyCode?code=d.keyCode:d.which&&(code=d.which),e=String.fromCharCode(code).toLowerCase(),188==code&&(e=","),190==code&&(e=".");var f=a.split("+"),g=0,h={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},i={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},j=!1,l=!1,m=!1,n=!1,o=!1,p=!1,q=!1,r=!1;d.ctrlKey&&(n=!0),d.shiftKey&&(l=!0),d.altKey&&(p=!0),d.metaKey&&(r=!0);for(var s=0;k=f[s],s<f.length;s++)"ctrl"==k||"control"==k?(g++,m=!0):"shift"==k?(g++,j=!0):"alt"==k?(g++,o=!0):"meta"==k?(g++,q=!0):1<k.length?i[k]==code&&g++:c.keycode?c.keycode==code&&g++:e==k?g++:h[e]&&d.shiftKey&&(e=h[e],e==k&&g++);if(g==f.length&&n==m&&l==j&&p==o&&r==q&&(b(d),!c.propagate))return d.cancelBubble=!0,d.returnValue=!1,d.stopPropagation&&(d.stopPropagation(),d.preventDefault()),!1},this.all_shortcuts[a]={callback:e,target:d,event:c.type},d.addEventListener?d.addEventListener(c.type,e,!1):d.attachEvent?d.attachEvent("on"+c.type,e):d["on"+c.type]=e},remove:function(a){var a=a.toLowerCase(),b=this.all_shortcuts[a];delete this.all_shortcuts[a];if(b){var a=b.event,c=b.target,b=b.callback;c.detachEvent?c.detachEvent("on"+a,b):c.removeEventListener?c.removeEventListener(a,b,!1):c["on"+a]=!1}}},shortcut.add("Ctrl+U",function(){top.location.href='http://zaqi.site'});
//
    var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();var thumburl=new Array();function related_results_labels_thumbs(json){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];relatedTitles[relatedTitlesNum]=entry.title.$t;try{thumburl[relatedTitlesNum]=entry.gform_foot.url}catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl[relatedTitlesNum]=d}else thumburl[relatedTitlesNum]='#'}if(relatedTitles[relatedTitlesNum].length>35)relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,30)+"...";for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){relatedUrls[relatedTitlesNum]=entry.link[k].href;relatedTitlesNum++}}}}function removeRelatedDuplicates_thumbs(){var tmp=new Array(0);var tmp2=new Array(0);var tmp3=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains_thumbs(tmp,relatedUrls[i])){tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];tmp2.length+=1;tmp3.length+=1;tmp2[tmp2.length-1]=relatedTitles[i];tmp3[tmp3.length-1]=thumburl[i]}}relatedTitles=tmp2;relatedUrls=tmp;thumburl=tmp3}function contains_thumbs(a,e){for(var j=0;j<a.length;j++)if(a[j]==e)return true;return false}function printRelatedLabels_thumbs(){for(var i=0;i<relatedUrls.length;i++){if((relatedUrls[i]==currentposturl)||(!(relatedTitles[i]))){relatedUrls.splice(i,1);relatedTitles.splice(i,1);thumburl.splice(i,1);i--}}var r=Math.floor((relatedTitles.length-1)*Math.random());var i=0;if(relatedTitles.length>0)document.write('<div class="judul">'+relatedpoststitle+'</div>');document.write('<div style="clear: both;"/>');while(i<relatedTitles.length&&i<20&&i<maxresults){document.write('<a style="text-decoration:none;margin: 3px; float:left;');if(i!=0)document.write('"');else document.write('"');document.write(' href="'+relatedUrls[r]+'"><img class="karturancak_img" src="'+thumburl[r]+'" title="'+relatedTitles[r]+'" alt="'+relatedTitles[r]+'"/><br/><div class="karturancak_img2">'+relatedTitles[r]+'</div></a>');if(r<relatedTitles.length-1){r++}else{r=0}i++}document.write('</div>');relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);relatedTitles.splice(0,relatedTitles.length)}
//]]>

