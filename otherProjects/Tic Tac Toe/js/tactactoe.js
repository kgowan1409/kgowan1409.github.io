$(document).ready(function() {

  var circleOrEx = "o"; //the first click is O
    
  var isGameInProgress = true; // The game is defaulted to be in progress.
  var winningCombos = { // The board is a combo of 9 squares and its started
    0: [ //0 is key
      [1, 2], //this multiDimensional Array is values
      [3, 6],
      [4, 8]
    ],
    1: [
      [0, 2],
      [4, 7]
    ],
    2: [
      [0, 1],
      [5, 8],
      [4, 6]
    ],
    3: [
      [0, 6],
      [4, 5]
    ],
    4: [
      [1, 8],
      [2, 6],
      [1, 7],
      [3, 5]
    ],
    5: [
      [2, 8],
      [3, 4]
    ],
    6: [
      [0, 3],
      [2, 4],
      [7, 8]
    ],
    7: [
      [1, 4],
      [6, 8]
    ],
    8: [
      [0, 4],
      [2, 5],
      [6, 7]
    ]
  };

  // When you click on the board, the function begins and the gameinprocess is true 
  $("#board").find("div").on("click", function() {

    if (isGameInProgress && $(this).hasClass("empty")) { // within the #board remove the empty class and add an X or an O value to the square

      $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx + "</span");

      checkIfWon($(this).index(), circleOrEx); //cycle of the game

      if (circleOrEx === "o") {
        circleOrEx = "x";// this shows when your your mouse clicks on the square. It shows x then o and so forth
      } else {
        circleOrEx = "o";
      }
    }

  });

  // this makes a new game 
  $("#newGame").on("click", function() {

    var boardSquares = $("#board").find("div"); //this actionfinds the div that finds the old board square 
    var firstEmptyMemorySquare = $(".container").find(".nine").filter(function() { //how many games have been played
      return $.trim($(this).text()) === "" && $(this).children().length === 0;
    }).not("#board").first();

    if (firstEmptyMemorySquare.length == 1) { //this find the board html during game
      firstEmptyMemorySquare.html($("#board").html());
    } else {// find old or create new board
      $(".container").find(".nine").not("#board").empty();
      $(".container").find(".nine").first().html($("#board").html());
    }

    //this starts a new game
    boardSquares.each(function() {
      $(this).addClass("empty").empty();
    })
    isGameInProgress = true;
  })

  //this function checks if the player has won by checking if the numbers match the winning combos
  function checkIfWon(chosenSquare) {

    var mulitArr = winningCombos[chosenSquare];
    var playerWon;

    for (var i = 0; i < mulitArr.length; i++) { //value of i is less than the length of the multiarray, playerwon is now true
      playerWon = true;
      for (var j = 0; j < mulitArr[i].length; j++) {
        if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) { //Finds the x or o through the arrays
          playerWon = false;
        }
      }

      if (playerWon) { //after a player wins this makes the other lines to be affected and the game progress is set to "false" (var j = 0; j < mulitArr[i].length; j++) {
          $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green"); //makes the winning combinatoin green 
        }
        $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green");
        alert("Winner is " + circleOrEx.toUpperCase() + "!");//alerts the winner which is either x or o
        isGameInProgress = false;//the game isn't in progress anymore
        return false; //this exits the loop
      }
    }


  }
})
