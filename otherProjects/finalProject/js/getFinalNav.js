$.get("http://kgowan1409.io/otherProjects/finalProject/partials/nav.html", function(data) {

  $(document).ready(function() {

    $(".container").prepend(data);
})
})
$.get("http://kgowan1409.io/otherProjects/finalProject/partials/footer.html", function(foot) {

  $(document).ready(function() {

    $(".container").append(foot);
    $(".container").fadeIn();

  })


})
