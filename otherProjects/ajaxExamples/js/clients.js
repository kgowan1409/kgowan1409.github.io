$(document).ready(function(){
$("#getClients").on("click",function(){

$.getJSON("http://Taijah.GitHub.io/OtherProjects/ajaxExamples/jsonDatabase/clients.json" ,function(data){
var html="<table class='table table-hover table-striped'>"+
"<tr><th>Name</th><th>Email</th><th>Company</th></tr>";
  $.each(data, function(index, item){
  //  $("#data").append(item.name);

html+="<tr>"+
"<td>" +item.name +"</td>"+
"<td>"+item.email + "</td>"+
"<td>"+item.company + "</td>"+
"</tr>";
  }) // each end

  html+="</table>";
  $("#data").append(html);
  //alert(data);
  //console.dir(data);

})// get json end

}) // click end

})// doc end
