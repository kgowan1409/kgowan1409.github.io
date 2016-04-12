$(document).ready(function(){
$("#getSizing").on("click",function(){//getting the button
  
  
$.getJSON("http://kgowan1409.github.io/otherProjects/finalProject/fJsonDatabase/sizing.json", function(data){
  console.log("data"+data)
// calling the JSON for the table to appear 
var html="<table class='table table-hover table-striped'>"+
"<tr><th>Violin Size</th><th>Arm Length</th><th>Approxamate Age</th></tr>";
  $.each(data, function(index, item){
 

html+="<tr>"+
"<td>" +item.size +"</td>"+
"<td>"+item.length + "</td>"+
"<td>"+item.age + "</td>"+

"</tr>";
  }) // each end

  html+="</table>";
  $("#data").append(html);
  //alert(data);
  //console.dir(data);

})// get json end

}) // click end

})// doc end
