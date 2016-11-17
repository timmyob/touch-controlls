<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
   console.log("pageone created");
  	                    

	$("#vibrate").on("tap",function(){
 console.log("tqpped button");
        
        var f = random();
        
        alert(f);
 
    }); 
    
    


});

function beep() {

navigator.notification.beep(1);	//beep once

}
 



function random() {
	return !Math.round(Math.random());
}
