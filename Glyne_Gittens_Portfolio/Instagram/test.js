/* This is the same as tester 2 but just writtem mostly in pure Javascript*/


var tag = "";
var Id= ''; // Get a callback Id from the instagram api. I'd rather not show you mine.


var loadPic= function(response){
  var picOne, picTwo, picThree, picFour, picFive, picSix;
  var pics = [picOne, picTwo, picThree, picFour, picFive, picSix]

for(var i = 0; i < pics.length; i++){
  pics[i] = response.data[i].images.low_resolution.url;
  $(('#instagram' + i).html('<img src="'+pics[i]+'">');
}

};
//https://api.instagram.com/v1/tags/SEARCH-TAG/media/recent?client_id=CLIENT-ID&callback=YOUR-CALLBAC
var getPic=function(){
  var thisURL = "https://api.instagram.com/v1/tags/"+tag+"/media/recent?client_id="+Id 
    console.log(thisURL);
    
    $.ajax({
      url: thisURL,
      dataType: "jsonp",
      success: function(response){
         console.log(response);
        loadPic(response);
      }
    });
};

var setPic=function(){
  tag = $("#search").val();
  if(tag == null || tag == ""){
    alert("You need to list a tag");
    return;
  };

  getPic();

};

var init = function(){
  console.log("What\'s the weather?");
  $("#search").keypress(function(e){
    if(e.which==13){
    e.preventDefault();
    setPic();
  }
  });
 
};

$(document).ready(function(){
  init();
});