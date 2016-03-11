$(document).ready(function() {
/*
click - done
focus c
blur -c
change
mouse enter/leave

*/


//user clicks the button

$("#myButton").on("mouseenter", function(){
    $("#log").append("<br>Button mouseenter");
    $(this).text("ORDER NOW!");

  })
  .on("mouseleave", function(){
    $("#log").append("<br>Button mouseleave");
        $(this).text("Click Me!");

  });

  $("#mySingleLineText").on("focus", function(){
    $("#log").append("<br>input focus");
    $(this).css("background-color","yellow");

  });

  .on("blur", function(){
    $("#log").append("<br>input blur")
    $(this).css("background-color","#FFF");

  });

/*  OR use this , instead of clling the function twice

$("#mySingleLineText").on("focus", function(){
  $(this).css("background-color","yellow");

}) .on("blur", function(){
  $(this).css("background-color","#FFF");

});
*/
$("#mySelect").on("change", function(){

var val =$(this).val();
 $("#mySelectMessage").html(val + " is a nice Selection");

});


  $("#myButton").on("click", function(){
var userOrder = {};
    userOrder.myInput = $("#mySingleLineText").val();
    userOrder.myTextArea= $("#myTextArea").val();
    userOrder.mySelect= $("#mySelect").val();
    userOrder.myRadio = $("[name='gender']:checked").val();

    var myCheckValues=[];
    //each jquery loop for object arrays
    $("[name='vehicle']:checked").each(function(){
      userOrder.myCheckValues.push($(this).val());

    });

    $("#log").append("<br> User clicked button");
    $("#log").append("<br> Value of input is: "+myInput)
    $("#log").append("<br> Value of textarea is: " +myTextArea)
    $("#log").append("<br> Value of select is: " +mySelect)
    $("#log").append("<br> Value of radio button is: " + myRadio)
    $("#log").append("<br> Value of checks is: " +myCheckValues.join())
    $("#log").append("<br><br> Value of userOrder is: " +JSON.stringify(userOrder))

  })

});
