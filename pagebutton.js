//<![CDATA[
var borelatedTitles=new Array();var rboTitlesNum=0;var relatedUrls=new Array();var thumburl=new Array();function related_results_labels_thumbs(json){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];borelatedTitles[rboTitlesNum]=entry.title.$t;try{thumburl[rboTitlesNum]=entry.gform_foot.url}catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl[rboTitlesNum]=d}else thumburl[rboTitlesNum]='https://4.bp.blogspot.com/-F002tFjL7uc/WBnyVY0GMQI/AAAAAAAAD9k/TOBMkutnQmUw4mQ8qkJrFUAhA2qaWW8nQCLcB/s1600/bo-related-post-no-thumbnail.png'}if(borelatedTitles[rboTitlesNum].length>35)borelatedTitles[rboTitlesNum]=borelatedTitles[rboTitlesNum].substring(0,38)+"...";for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){relatedUrls[rboTitlesNum]=entry.link[k].href;rboTitlesNum++}}}}function removeDuplicate_thumbs(){var tmp=new Array(0);var tmp2=new Array(0);var tmp3=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains_thumbs(tmp,relatedUrls[i])){tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];tmp2.length+=1;tmp3.length+=1;tmp2[tmp2.length-1]=borelatedTitles[i];tmp3[tmp3.length-1]=thumburl[i]}}borelatedTitles=tmp2;relatedUrls=tmp;thumburl=tmp3}function contains_thumbs(a,e){for(var j=0;j<a.length;j++)if(a[j]==e)return true;return false}function printRelatedLabel_thumbs(){for(var i=0;i<relatedUrls.length;i++){if((relatedUrls[i]==findcurrentposturl)||(!(borelatedTitles[i]))){relatedUrls.splice(i,1);borelatedTitles.splice(i,1);thumburl.splice(i,1);i--}}var r=Math.floor((borelatedTitles.length-1)*Math.random());var i=0;if(borelatedTitles.length>0)document.write('<h4><span>'+titleofrelatedpost+'</span></h4>');document.write('<sl class="related-posts-list">');while(i<borelatedTitles.length&&i<20&&i<maxpost){document.write('<ci><a href="'+relatedUrls[r]+'"><span class="rthumb"><img class="related_img" src="'+thumburl[r]+'"/></span><p><span class="related-title">'+borelatedTitles[r]+'</span></p></a></ci>');if(r<borelatedTitles.length-1){r++}else{r=0}i++}document.write('</sl>');relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);borelatedTitles.splice(0,borelatedTitles.length)}
//
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(1($){h 8=$(\'a.v-b\');h 6=$(\'a.t-b\');$.f(8.7(\'5\'),1(c){8.4(\'<3>u</3> <2>\'+$(c).g(\'.0 i.0-j\').9()+\'</2>\')},"4");$.f(6.7(\'5\'),1(l){6.4(\'<3>s</3> <2>\'+$(l).g(\'.0 i.0-j\').9()+\'</2>\')},"4")})(r);$(o).p(1(){q($("#n,.n").7("5")!="m://k.e.d/"){w.x.5="m://k.e.d"}});',34,34,'post|function|span|strong|html|href|olderLink|attr|newerLink|text||link|data|info|alternatif88|get|find|var|h1|title|www|data2|http|creditoop|document|ready|if|jQuery|Previous|older|Next|newer|window|location'.split('|'),0,{}))
//
var isNS = (navigator.appName == "Netscape") ? 1 : 0;
if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);
function mischandler(){
return false;}
function mousehandler(e){
var myevent = (isNS) ? e : event;
var eventbutton = (isNS) ? myevent.which : myevent.button;
if((eventbutton==2)||(eventbutton==3)) return false;}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
//]]>


