$(document).ready(function(){
$("#showInfo").on("click",function(){

$.getJSON("http://Taijah.GitHub.io/OtherProjects/ajaxExamples/jsonDatabase/question4.json" ,function(data){
var html="<table class='table table-hover table-striped'>"+
"<tr><th>Name</th><th>address</th><th>phone</th><th>about</th></tr>";
  $.each(data, function(index, item){
  //  $("#data").append(item.name);

html+="<tr>"+
"<td>" +item.name +"</td>"+
"<td>"+item.address + "</td>"+
"<td>"+item.phone+ "</td>"+
"<td>"+item.about+ "</td>"+
"</tr>";
  }) // each end
  
  html+="</table>";
  $("#data").append(html);

})// get json end

}) // click end

})// doc end
