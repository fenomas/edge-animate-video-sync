
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var video_code='k6wf9QjWo8w';var vid_w='560';var vid_h='315';var useIFrame=true;var site_url='http://aphall.com';var site_url='http://127.0.0.1:54321';$('body').css('backgroundColor','#000')
var player=undefined;window.onVideoState=function(status){var time=player.getCurrentTime();if(status==1){sym.play(time*1000);}else if(status==2){sym.stop(time*1000);}}
function updatePlayback(){if(player&&player.getCurrentTime){var t=player.getCurrentTime()*1000;var state=player.getPlayerState();var dt=sym.getPosition()-t;var tolerance=500;if(Math.abs(dt)>tolerance){if(state==1){sym.play(t);}
else{sym.stop(t);}}}
requestAnimationFrame(updatePlayback);}
requestAnimationFrame(updatePlayback);if(!useIFrame){window.onYouTubePlayerReady=function(){player=document.getElementById('player');player.addEventListener("onStateChange","onVideoState");}
var params='?version=3&enablejsapi=1';var embedScript='<object width="'+vid_w+'" height="'+vid_h+'"><param name="movie" value="https://www.youtube.com/v/'+video_code+params+'"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed id="player" src="https://www.youtube.com/v/'+video_code+params+'" type="application/x-shockwave-flash" width="'+vid_w+'" height="'+vid_h+'" allowscriptaccess="always" allowfullscreen="true"></embed></object>';sym.$('video_holder').html(embedScript);}
if(useIFrame){window.onYouTubeIframeAPIReady=function(){player=new YT.Player('player',{events:{'onStateChange':function(e){window.onVideoState(e.data);}}});}
var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var params='?version=3&enablejsapi=1&origin='+site_url;var embedScript='<iframe id="player" width="'+vid_w+'" height="'+vid_h+'" src="https://www.youtube.com/embed/'+video_code+params+'" frameborder="0"></iframe>';sym.$('video_holder').html(embedScript);}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'video_holder'
(function(symbolName){})("video_holder");
//Edge symbol end:'video_holder'

//=========================================================

//Edge symbol: 'timeline'
(function(symbolName){})("timeline");
//Edge symbol end:'timeline'

//=========================================================

//Edge symbol: 'marker'
(function(symbolName){})("marker");
//Edge symbol end:'marker'
})(jQuery,AdobeEdge,"EDGE-69059814");