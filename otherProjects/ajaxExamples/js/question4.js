$(document).ready(function(){
  $("#showInfo").on("click",function(){

    $.getJSON("jsonDatabase/question4.json", function(data) {

                console.dir(data);
                  var html="<table class='table table-hover table-striped'>"+
                "<tr><th>Name</th><th>age</th><th>Company</th></tr>";
                  $.each(data, function(index, item){
                  //  $("#data").append(item.name);

                html+="<tr>"+
                "<td>" +item.name +"</td>"+
                "<td>"+item.phone + "</td>"+
                "<td>"+item.email + "</td>"+
                "<td>"+item.address + "</td>"+
            
                "</tr>";
                  }) // each end


                      html+="</table>";
                      $("#data").append(html);

                    html += '</div>' + //panel
                      '</div>'; //col-md-4
                  }) //each person



}) //click end
}) // doc end
