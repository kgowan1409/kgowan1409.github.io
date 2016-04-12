// order now final button - OG

$(document).ready(function(){


$("#submitButton").on("mouseenter", function(){ // button to change when mouse is over button

  $(this).text("Done!") //when the mouse is on the button it says Done!

  })

.on("mouseleave", function(){//mouse leaves button

      $(this).text("Submit!")//when mouse is off of button it sas Submit!


 }) // end mouse

// ORDER NOW PAYMENT INFO JS CODE

//$(document).ready(function(){
$("#submitButton").on("click",function (){
   //alert("Please Fill in the required space");
    


 $("input, select").filter(function(){ // alert for final order if not filled out properly
 return !this.value;
   }).closest("div").addClass("has-error"); // to put red boxes



 $("input, select").filter(function(){
return this.value;
 }).closest("div").removeClass("has-error") ; // to remove the red error

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
    //set the field and the value
    order[id] = $(this).val();
})

 alert("sending to our database" + JSON.stringify(order));
 //console.log(JSON.stringify(order))
 $("#successMsg").html("Order Received<br></br> "); //once order is filled out and submitted this will pop up

} // end conformation


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


  $("#log").append("<br> " + mySelect); //spits back out what has been selected after the submit button has been pressed
  return ("#log").value;
  $("#log").append("<br>Your Item: " + myRadio);
  $("#log").append("<br>Checked: " + myCheckValues);
  $("#log").append("<br>Card Name: " + myInput);
  $("#log").append("<br>Security Code: " + securityCode);
  $("#log").append("<br>Month of your card's expiry date: " + month);
  $("#log").append("<br>Year of your card's expiry date: " + expire);
  $("#log").append("<br>Address: " + address);
  $("#log").append("<br>State: " + state);
  $("#log").append("<br>Zip code: " + zip);
  $("#log").append("<br>Country: " + country);

  
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
