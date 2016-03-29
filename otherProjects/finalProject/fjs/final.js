$(document).ready(function(){
$(".nav").find("li").on("click",function(){
$(".nav").find("li").removeClass("active");
$(this).addClass("active");
}
