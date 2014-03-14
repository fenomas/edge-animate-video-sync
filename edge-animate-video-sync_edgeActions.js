/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         /*
          *			SETTINGS
          */
         
         // video code of video to embed
         var video_code = 'k6wf9QjWo8w';
         
         // width and height of video to embed
         var vid_w = '560';
         var vid_h = '315';
         
         // choose between embedded flash or iFrame youtube API
         var useIFrame = true;
         
         // site URL - required when embedding an iFrame youtube video
         var site_url = 'http://aphall.com';
         
         // when testing iframe versions directly from Edge Animate use this:
         //var site_url = 'http://localhost:54321';
         
         
         
         
         /*
          *			REST OF SCRIPT BELOW
          */
         
         
         
         // style the base page
         $('body').css('backgroundColor', '#000')
         
         
         
         
         
         
         // youtube video reference to be used throughout
         var player;
         
         
         // event handler for when the youtube video plays or pauses
         window.onVideoState = function(status) {
         	// status will be 1 when playing, 2 when paused
         	var time = player.getCurrentTime(); // in seconds
         	if (status==1) { 
         		// video is playing
         		sym.play(time*1000);
         	} else if (status==2) {
         		// video paused
         		sym.stop(time*1000);
         	}
         }
         
         
         
         
         
         /*
         		EMBED VERSION
         		This chunk of code creates an embedded (Flash) youtube player
         		and sets up the events for the handler above. 
         		It's simpler and easier than using an iframe but won't work on mobile.
         */
         
         if ( ! useIFrame) {
         
         	// catch youtube API ready event - this gets fired by the embed
         	window.onYouTubePlayerReady = function() {
         		// keep a reference to the video player object
         		player = document.getElementById('player');
         		// direct state change events to the handler above
         		player.addEventListener("onStateChange", "onVideoState");
         	}
         
         	// create a youtube embed tag with the proper params
         	var params = '?version=3&enablejsapi=1';
         	var embedScript = '<object width="'+ vid_w +'" height="'+ vid_h +'"><param name="movie" value="https://www.youtube.com/v/'+video_code+params+'"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed id="player" src="https://www.youtube.com/v/'+video_code+params+'" type="application/x-shockwave-flash" width="'+ vid_w +'" height="'+ vid_h +'" allowscriptaccess="always" allowfullscreen="true"></embed></object>';
         
         	// get the HTML element for the 'video_holder' symbol, 
         	// and replace its content with the <embed> tag
         	sym.$('video_holder').html( embedScript );
         
         } // end embed insertion
         
         
         
         
         
         /*
         		IFRAME VERSION
         		This chunk of code creates a youtube player in an iFrame
         		(so whether it plays in flash or html5 is up to youtube).
         		Catching the right events is more complicated due to 
         		cross-site restrictions but the youtube API does most of the work.
         */
         
         if (useIFrame) {
         
         	// catch the ready event, which will be fired by the youtube API
         	window.onYouTubeIframeAPIReady = function() {
         		// create the reference to the player
         		player = new YT.Player('player', {
         			events: {
         				// on state change, catch the event and send its
         				// 'data' property to the event handler defined above
         				'onStateChange': function(e) {
         					window.onVideoState(e.data);
         				}
         			}
         		});
         	}
         
         	// insert youtube iframe script into page. This fires the events
         	// and handles messaging back and forth with the iframe content
         	var tag = document.createElement('script');
         	tag.src = "https://www.youtube.com/iframe_api";
         	var firstScriptTag = document.getElementsByTagName('script')[0];
         	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
         
         
         	// define params. Note that you must declare your
         	// site's URL! This is so youtube can allow the cross-site scripting.
         	var params = '?version=3&enablejsapi=1&origin=' + site_url;
         
         	// create the iframe tag with the right params
         	var embedScript = '<iframe id="player" width="'+ vid_w +'" height="'+ vid_h +'" src="https://www.youtube.com/embed/' + video_code + params + '" frameborder="0"></iframe>';
         
         	// get the HTML element for the 'video_holder' symbol, 
         	// and replace its content with the <embed> tag
         	sym.$('video_holder').html( embedScript );
         
         
         } // end iFrame insertion
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'video_holder'
   (function(symbolName) {   
   
   })("video_holder");
   //Edge symbol end:'video_holder'

   //=========================================================
   
   //Edge symbol: 'timeline'
   (function(symbolName) {   
   
   })("timeline");
   //Edge symbol end:'timeline'

   //=========================================================
   
   //Edge symbol: 'marker'
   (function(symbolName) {   
   
   })("marker");
   //Edge symbol end:'marker'

})(jQuery, AdobeEdge, "EDGE-69059814");