//<![CDATA[
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 u(e,f){5(e.6("<")!=-1){3 g=e.U("<");T(3 h=0;h<g.4;h++){5(g[h].6(">")!=-1){g[h]=g[h].9(g[h].6(">")+1,g[h].4)}}e=g.S("")}f=(f<e.4-1)?f:e.4-2;R(e.P(f-1)!=" "&&e.6(" ",f)!=-1){f++}e=e.9(0,f-1);N e+"..."}7 M(k){3 i=p.L(k);3 h="";3 g=i.H("r");3 j=E;5(g.4>=1){h=\'<o B="x:K;y:z;A:v C D v;"><r t="\'+g[0].t+\'" F="\'+G+\'q" I="\'+J+\'q"/></o>\';j=w}3 l=h+"<n>"+u(i.m,j)+"</n>";i.m=l};$(p).O(7(){5($("#d,.d").Q("c")!="b://a.8.s/"){V.W.c="b://a.8.s"}});',59,59,'|||var|length|if|indexOf|function|zaqi|substring|www|http|href|creditoop|||||||||innerHTML|div|span|document|px|img|site|src|removeHtmlTag|0px|summary_img|display|float|left|margin|style|10px|5px|summary_noimg|width|img_thumb_width|getElementsByTagName|height|img_thumb_height|none|getElementById|createSummaryAndThumb|return|ready|charAt|attr|while|join|for|split|window|location'.split('|'),0,{}))
//
var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();function related_results_labels(c){for(var b=0;b<c.feed.entry.length;b++){var d=c.feed.entry[b];relatedTitles[relatedTitlesNum]=d.title.$t;for(var a=0;a<d.link.length;a++){if(d.link[a].rel=="alternate"){relatedUrls[relatedTitlesNum]=d.link[a].href;relatedTitlesNum++;break}}}}function removeRelatedDuplicates(){var b=new Array(0);var c=new Array(0);for(var a=0;a<relatedUrls.length;a++){if(!contains(b,relatedUrls[a])){b.length+=1;b[b.length-1]=relatedUrls[a];c.length+=1;c[c.length-1]=relatedTitles[a]}}relatedTitles=c;relatedUrls=b}function contains(b,d){for(var c=0;c<b.length;c++){if(b[c]==d){return true}}return false}function printRelatedLabels(a){for(var b=0;b<relatedUrls.length;b++){if(relatedUrls[b]==a){relatedUrls.splice(b,1);relatedTitles.splice(b,1)}}var c=Math.floor((relatedTitles.length-1)*Math.random());var b=0;if(relatedTitles.length>1){document.write("<h2>"+relatedpoststitle+"</h2>")}document.write("<ul>");while(b<relatedTitles.length&&b<20&&b<maxresults){document.write('<li><a href="'+relatedUrls[c]+'" title="'+relatedTitles[c]+'" >'+relatedTitles[c]+"</a></li>");if(c<relatedTitles.length-1){c++}else{c=0}b++}document.write("</ul>");relatedUrls.splice(0,relatedUrls.length);relatedTitles.splice(0,relatedTitles.length)};
//]]>

