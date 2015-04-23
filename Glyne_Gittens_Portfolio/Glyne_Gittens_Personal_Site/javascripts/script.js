$(document).ready(function() {
    
	$('.banner_desc').fadeIn(4000);

    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $(currentAttrValue).show().fadeIn(400).siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });

    // Change the tabs to their colored version on hover
    $('#profiles').mouseover(function(){
    	$('#twitch').attr('src', './assets/Twitch Brand Assets/Twitch_Glitch Icon/Twitch Purple/GlitchIcon_purple.png');
    	$('#github').attr('src', './assets/GitHub-Mark-120px-plus.png');
    	$('#linked_in').attr('src', './assets/In-2C-128px-TM.png');
    })
    .mouseout(function(event) {
    	$('#twitch').attr('src', './assets/Twitch Brand Assets/Twitch_Glitch Icon/White/GlitchIcon_white.png');
    	$('#github').attr('src', './assets/GitHub-Mark-Light-120px-plus.png');
    	$('#linked_in').attr('src', './assets/In-White-128px-TM.png');
    });
    
});