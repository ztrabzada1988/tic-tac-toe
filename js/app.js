$(document).ready(function () {

    var X = "X";
    var O = "O";
    var turn = X;
    var counter = 0;
    for (var i = 1; i <= 9; i++) {
        $('.container').append('<div class="fields" id="box' + i + '"></div>');
    }


    function setTurn() {
        $('.fields').click(function () {

            if ($(this).text() == "") {
                $(this).text(turn);
                counter++
                //console.log(counter);
                var id = $(this).text();
                console.log(id);
                //getChoice(id);
                //checkPattern();
                switchTurn();


            } else {
                alert("This square has already been chosen.");
            }

            function getChoice(id) {
                console.log(id);
                //return id;
            }

            // function checkPattern(a, b, c, turn) {
            //     getChoice(id);
            //     checkWin();
            //     var result = false;

            //     if (getChoice(a) == turn && getChoice(b) == turn && getChoice(c) == turn) {
            //         result = true;
            //     };
            //     console.log(result);
            //     return result;
            // }

            // function checkWin() {
            //     var result = false;
            //     if (checkPattern(box1, box2, box3, turn) ||
            //         checkPattern(box4, box5, box6, turn) ||
            //         checkPattern(box7, box8, box9, turn) ||
            //         checkPattern(box1, box4, box7, turn) ||
            //         checkPattern(box2, box5, box8, turn) ||
            //         checkPattern(box3, box6, box9, turn) ||
            //         checkPattern(box1, box5, box9, turn) ||
            //         checkPattern(box3, box5, box7, turn)) {

            //         result = true;
            //     }

            //     return result;
            // }

        });
    }

    function switchTurn() {
        if (turn === X) {
            turn = O;
        } else {
            turn = X;
        }
        //$('#gameTurn').text(turn + "'s Turn!")
    }

    setTurn();
});
