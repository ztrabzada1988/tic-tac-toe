$(document).ready(function () {


    // Step 1: Define global variables

    // variables to define the X and O turns
    var X = "X";
    var O = "O";
    var turn = X;

    var counter = 0;

    // Step 2: Define functions

    // Append div for each box of tic tac toe to the .container div. THe box id will be from 1 to 9 for each box in the game (this is done for formatting purposes in css)
    for (var i = 1; i <= 9; i++) {
        $('.container').append('<div class="fields" id="box' + i + '"></div>'); // i is the id # for each box
    }

    // function to set the turn
    function setTurn() {
        $('.fields').click(function () {
            if ($(this).text() == "") {
                $(this).text(turn);
                counter++

                switchTurn();

            } else {
                alert("thats field is already taken");
            }
        });
    }

    // function to switch turns
    function switchTurn() {
        if (turn === X) {
            turn = O;
        } else {
            turn = X;
        }
    }
    setTurn();
});
// Step 3: Use functions
