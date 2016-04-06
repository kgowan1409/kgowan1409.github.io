$(document).ready(function(){
$("#getModels").on("click",function(){
  console.log("click")

$.getJSON("Final_JsonDatabase/Models.json" ,function(data){
  console.log("data"+data)
// for the table to appear 
var html="<table class='table table-hover table-striped'>"+
"<tr><th>Name</th><th>age</th><th>Company</th><th>Gender</th></tr>";
  $.each(data, function(index, item){
  //  $("#data").append(item.name);

html+="<tr>"+
"<td>" +item.name +"</td>"+
"<td>"+item.age + "</td>"+
"<td>"+item.company + "</td>"+
"<td>"+item.gender + "</td>"+
"</tr>";
  }) // each end

  html+="</table>";
  $("#data").append(html);
  //alert(data);
  //console.dir(data);

})// get json end

}) // click end

})// doc end
