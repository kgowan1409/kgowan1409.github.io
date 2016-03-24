//get the files
$.get("http://kgowan1409.github.io/partials/nav.html", function(data) {

  $(document).ready(function() {

    $(".container").prepend(data);
})
})
$.get("http://kgowan1409.github.io/partials/footer.html", function(foot) {

  $(document).ready(function() {

    $(".container").append(foot);
    $(".container").fadeIn();

  })


})
