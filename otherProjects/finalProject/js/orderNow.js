// order now final button - OG

$(document).ready(function(){

// button to change when mouse is over button
$("#submitButton").on("mouseenter", function(){

  $(this).text("Done!")

  })
//when mouse is off of button
.on("mouseleave", function(){

      $(this).text("Submit!")


 }) // end mouse

// ORDER NOW PAYMENT INFO JS CODE

//$(document).ready(function(){
$("#submitButton").on("click",function (){
   //alert("Please Fill in the required space");
    // alert for final order if not filled out properly

// to put red boxes
 $("input, select").filter(function(){
 return !this.value;
   }).closest("div").addClass("has-error");


// to remove the red error
 $("input, select").filter(function(){
return this.value;
 }).closest("div").removeClass("has-error") ;

var errors = $(".has-error");

  if (errors.length < 1) {
                sendConfirmation();
              }

          }) //click


function sendConfirmation(){
//make an object to record data for database
var order={};
var formData = $("input, select");
// for each jquery object
formData.each(function(){
  //get the id
    var id = $(this).attr("id");
    //set the ofeld and the value
    order[id] = $(this).val();
})

 alert("sending to our database" + JSON.stringify(order));
 //console.log(JSON.stringify(order))
 $("#successMsg").html("Order Received<br></br> ");

} // end conf.


// LOG JS CODE FOR ORDER RECEIPT

  //user click button (Order Form)
  $("#submitButton").on("click", function() {

  var myInput = $("#name").val();
  var securityCode = $('#securityCode').val();
  var expire = $("#expiryYear").val();
  var address = $("#address1").val();
  var zip = $("#zip").val();
  var state = $("#state").val();
  var country = $("#country").val();
  var mySelect = $("#mySelect").val();
  var month = $("#expirymonth").val();
  var myRadio = $("[name='title']:checked").val();
  var myCheckValues = [];
  //each is a jquery loop for objects/arrays
  $("[name='season']:checked").each(function() {
    myCheckValues.push($(this).val());
  }); //each end

  $("#log").append("<br> " + mySelect);
  $("#log").append("<br>Select your Item " + myRadio);
  $("#log").append("<br>Value of checkbox is: " + myCheckValues);
  $("#log").append("<br>Enter your card name " + myInput);
  $("#log").append("<br>Enter your security code " + securityCode);
  $("#log").append("<br>Enter the month of your card's expiry date " + month);
  $("#log").append("<br>Enter the year of your card's expiry date " + expire);
  $("#log").append("<br>Enter your address " + address);
  $("#log").append("<br>Enter your state " + state);
  $("#log").append("<br>Enter your zip code " + zip);
  $("#log").append("<br>Enter your country " + country);

$(document).ready(function(){
if("#log">= 0).hide()
  
}) //my button click end








// reset button on order page

  $("#change").on("click", function(){
  alert("Your Order Has been reset!");
  })


// Order Now - radio menus

$("#mySelect").on('change', function(){
  var choice = $(this).find("option:selected").attr("id");

  $(".radio-inline").hide();

  if(choice == "violin"){
    $('.violin-list').show();
  }

else if(choice == "case"){
  $('.case-list').show();
}

else if(choice == "bow"){
  $('.bow-list').show();
}
});






   });// doc end
