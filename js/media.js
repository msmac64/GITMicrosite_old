$(document).ready(function(){
	$('#video-1').mediaelementplayer({
	// initial volume when the player starts
    startVolume: 0.8,
    // useful for <audio> player loops
    loop: false,
    // enables Flash and Silverlight to resize to content size
    enableAutosize: true,
    // the order of controls you want on the control bar (and other plugins below)
    features: ['playpause','progress','current','duration','tracks','volume','fullscreen'],
    // Hide controls when playing and mouse is not over the video
    alwaysShowControls: false,
    // force iPad's native controls
    iPadUseNativeControls: false,
    // force iPhone's native controls
    iPhoneUseNativeControls: false, 
    // force Android's native controls
    AndroidUseNativeControls: false,
    // when this player starts, it will pause other players
    pauseOtherPlayers: true,
	});
	
	$('#my-video2').mediaelementplayer({
	// initial volume when the player starts
    startVolume: 0.8,
    // useful for <audio> player loops
    loop: false,
    // enables Flash and Silverlight to resize to content size
    enableAutosize: true,
    // the order of controls you want on the control bar (and other plugins below)
    features: ['playpause','progress','current','duration','tracks','volume','fullscreen'],
    // Hide controls when playing and mouse is not over the video
    alwaysShowControls: false,
    // force iPad's native controls
    iPadUseNativeControls: false,
    // force iPhone's native controls
    iPhoneUseNativeControls: false, 
    // force Android's native controls
    AndroidUseNativeControls: false,
    // when this player starts, it will pause other players
    pauseOtherPlayers: true,
	});
});
