//<![CDATA[
var borelatedTitles=new Array();var rboTitlesNum=0;var relatedUrls=new Array();var thumburl=new Array();function related_results_labels_thumbs(json){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];borelatedTitles[rboTitlesNum]=entry.title.$t;try{thumburl[rboTitlesNum]=entry.gform_foot.url}catch(error){s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl[rboTitlesNum]=d}else thumburl[rboTitlesNum]='https://4.bp.blogspot.com/-F002tFjL7uc/WBnyVY0GMQI/AAAAAAAAD9k/TOBMkutnQmUw4mQ8qkJrFUAhA2qaWW8nQCLcB/s1600/bo-related-post-no-thumbnail.png'}if(borelatedTitles[rboTitlesNum].length>35)borelatedTitles[rboTitlesNum]=borelatedTitles[rboTitlesNum].substring(0,38)+"...";for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){relatedUrls[rboTitlesNum]=entry.link[k].href;rboTitlesNum++}}}}function removeDuplicate_thumbs(){var tmp=new Array(0);var tmp2=new Array(0);var tmp3=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains_thumbs(tmp,relatedUrls[i])){tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];tmp2.length+=1;tmp3.length+=1;tmp2[tmp2.length-1]=borelatedTitles[i];tmp3[tmp3.length-1]=thumburl[i]}}borelatedTitles=tmp2;relatedUrls=tmp;thumburl=tmp3}function contains_thumbs(a,e){for(var j=0;j<a.length;j++)if(a[j]==e)return true;return false}function printRelatedLabel_thumbs(){for(var i=0;i<relatedUrls.length;i++){if((relatedUrls[i]==findcurrentposturl)||(!(borelatedTitles[i]))){relatedUrls.splice(i,1);borelatedTitles.splice(i,1);thumburl.splice(i,1);i--}}var r=Math.floor((borelatedTitles.length-1)*Math.random());var i=0;if(borelatedTitles.length>0)document.write('<h4><span>'+titleofrelatedpost+'</span></h4>');document.write('<sl class="related-posts-list">');while(i<borelatedTitles.length&&i<20&&i<maxpost){document.write('<ci><a href="'+relatedUrls[r]+'"><span class="rthumb"><img class="related_img" src="'+thumburl[r]+'"/></span><p><span class="related-title">'+borelatedTitles[r]+'</span></p></a></ci>');if(r<borelatedTitles.length-1){r++}else{r=0}i++}document.write('</sl>');relatedUrls.splice(0,relatedUrls.length);thumburl.splice(0,thumburl.length);borelatedTitles.splice(0,borelatedTitles.length)}
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


