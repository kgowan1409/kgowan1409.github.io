$(document).ready(function(){
  
  //get all the nav li, add click event
$(".nav").find("li").on("click",function(){
  
  //remove all active class
$(".nav").find("li").removeClass("active");

//add active class to clicked li
$(this).addClass("active");

var page = $(this).attr("id");
alert(page);

})//click
function getPartial(partial) {
  
if (partial=="homePage");{
  alert("1")
}
 } else if (partial=="seeStylesPage"){
   alert("2")
  
 }else if (partial=="orderPage") {
   alert("3")
}
 // 
getPartial("homePage");
  
})//ready
