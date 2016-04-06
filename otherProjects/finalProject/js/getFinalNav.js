$.get("http://Taijah.GitHub.io/OtherProjects/FinalWebsite/final_partials/nav.html", function(data) {

  $(document).ready(function() {

    $(".container").prepend(data);
})
})
$.get("http://Taijah.GitHub.io/OtherProjects/FinalWebsite/final_partials/footer.html", function(foot) {

  $(document).ready(function() {

    $(".container").append(foot);
    $(".container").fadeIn();

  })


})
