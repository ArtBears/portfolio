/*
    This project is a project that grabs top photos from instagram and places them on the page. 
    Everytime you refresh the page it will show different photos. 

    I have removed the ID you need to work with the API. You can add it to the YOUR_ID_HERE portion
    in the thisURL string.

    There is a mostly Javascript version of this code in the test.js file.

*/


var thisURL = "https://api.instagram.com/v1/media/popular?client_id=YOUR_ID_HERE_&callback=callbackFunction";
var data;
$.ajax({
      url:      thisURL,
      dataType: "jsonp",
      success:  function(response){

         console.log('first');
        callbackFunction(response);      
      }
    });

function callbackFunction(response){
	if(response != null){
    	console.log("second")
 			for(var i = 0; i < 6; i++){
 				var id = "instagram" + i;
  				document.getElementById(id).innerHTML = '<img src="' 
 				+ response.data[i].images.low_resolution.url + '">';
  			}
	}
}