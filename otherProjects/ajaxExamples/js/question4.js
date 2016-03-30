$(document).ready(function() {
  $("#getQuestion4").on("click", function() {

    var url = "http://kgowan1409.github.io/otherProjects/ajaxExamples/jsonDatabase/question4.json"
    $.getJSON(url, function(data) {
      var html = "<div class='col-md-4'>";


      $.each(data, function(index, item) {
        html += "<ul class= 'list-group'>" +
        "<li class='list-group-item bold'>" + item.name + "</li>" +
        "<li class='list-group-item'>" + item.country + "</li>" +
        "<li class='list-group-item'>" + item.height + "</li>" +
        "<li class='list-group-item'>" + item.eyeColour + "</li>"+
        "<li class='list-group-item'>" + item.birthYear + "</li>"+
        "</ul>";
      })

      html + "</div>";
      $("#data").append(html);
    })
  })
})
