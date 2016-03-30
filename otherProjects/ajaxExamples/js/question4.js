$(document).ready(function(){
$("#showInfo").on("click",function(){

$.getJSON("http://kgowan1409.github.io/otherProjects/ajaxExamples/jsonDatabase/question4.json" ,function(data){
var html="<table class='table table-hover table-striped'>"+
"<tr><th>Name</th><th>country</th><th>height</th><th>eyeColour</th><th>birthYear</th></tr>";
  $.each(data, function(index, item){
  //  $("#data").append(item.name);

html+="<tr>"+
"<td>" +item.name +"</td>"+
"<td>"+item.country + "</td>"+
"<td>"+item.height+ "</td>"+
"<td>"+item.eyeColour+ "</td>"+
"<td>"+item.birthYear+ "</td>"+
"</tr>";
  }) // each end
  
  html+="</table>";
  $("#data").append(html);

})// get json end

}) // click end

})// doc end
