// function called when user starts game
function myfunc() {
    var b1 = document.getElementById('b1').value;
    var b2 = document.getElementById('b2').value;
    var b3 = document.getElementById('b3').value;
    var b4 = document.getElementById('b4').value;
    var b5 = document.getElementById('b5').value;
    var b6 = document.getElementById('b6').value;
    var b7 = document.getElementById('b7').value;
    var b8 = document.getElementById('b8').value;
    var b9 = document.getElementById('b9').value;

    var b1btn = document.getElementById('b1');
    var b2btn = document.getElementById('b2');
    var b3btn = document.getElementById('b3');
    var b4btn = document.getElementById('b4');
    var b5btn = document.getElementById('b5');
    var b6btn = document.getElementById('b6');
    var b7btn = document.getElementById('b7');
    var b8btn = document.getElementById('b8');
    var b9btn = document.getElementById('b9');

    // if player one wins and the combos && disable other buttons:
    // b1 b2 b3
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X')&& (b3 == 'x' || b3 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won!" ;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "blue"
        b2btn.style.color = "blue"
        b3btn.style.color = "blue"
    }

    // b1 b4 b7
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X')&& (b7 == 'x' || b7 == 'X')){
        document.getElementById('print').innerHTML = "Player X won!" ;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "blue"
        b4btn.style.color = "blue"
        b7btn.style.color = "blue"
    }
    //b1 b5 b9
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X')&& (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won!" ;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "blue"
        b5btn.style.color = "blue"
        b9btn.style.color = "blue"
     }
    //b2 b5 b8 
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X')&& (b8 == 'x' || b8 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won!" ;
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "blue"
        b5btn.style.color = "blue"
        b8btn.style.color = "blue"
     }
    // b3 b6 b9
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X')&& (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won!" ;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = "blue"
        b6btn.style.color = "blue"
        b9btn.style.color = "blue"
     }
    // b4 b5 b6
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X')&& (b6 == 'x' || b6 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won!" ;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "blue"
        b5btn.style.color = "blue"
        b6btn.style.color = "blue"
     }
    // b7 b8 b9
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X')&& (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won!" ;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "blue"
        b8btn.style.color = "blue"
        b9btn.style.color = "blue"
     }
    // b3 b5 b7
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X')&& (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print').innerHTML = "Player X won!" ;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "blue"
        b5btn.style.color = "blue"
        b7btn.style.color = "blue"
     }

// if player two wins and the combos && disable other buttons:
    // b1 b2 b3
    if ((b1 == 'o' || b1 == 'O') && (b2 == 'o' || b2 == 'O')&& (b3 == 'o' || b3 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won!" ;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "purple"
        b2btn.style.color = "purple"
        b3btn.style.color = "purple"
    }

    // b1 b4 b7
    else if ((b1 == 'o' || b1 == 'O') && (b4 == 'o' || b4 == 'O')&& (b7 == 'o' || b7 == 'O')){
        document.getElementById('print').innerHTML = "Player O won!" ;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "purple"
        b4btn.style.color = "purple"
        b7btn.style.color = "purple"
    }
    //b1 b5 b9
    else if ((b1 == 'o' || b1 == 'O') && (b5 == 'o' || b5 == 'O')&& (b9 == 'o' || b9 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won!" ;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "purple"
        b5btn.style.color = "purple"
        b9btn.style.color = "purple"
     }
    //b2 b5 b8 
    else if ((b2 == 'o' || b2 == 'O') && (b5 == 'o' || b5 == 'O')&& (b8 == 'o' || b8 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won!" ;
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "purple"
        b5btn.style.color = "purple"
        b8btn.style.color = "purple"
     }
    // b3 b6 b9
    else if ((b3 == 'o' || b3 == 'O') && (b6 == 'o' || b6 == 'O')&& (b9 == 'o' || b9 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won!" ;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = "purple"
        b6btn.style.color = "purple"
        b9btn.style.color = "purple"
     }
    // b4 b5 b6
    else if ((b4 == 'o' || b4 == 'O') && (b5 == 'o' || b5 == 'O')&& (b6 == 'o' || b6 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won!" ;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "purple"
        b5btn.style.color = "purple"
        b6btn.style.color = "purple"
     }
    // b7 b8 b9
    else if ((b7 == 'o' || b7 == 'O') && (b8 == 'o' || b8 == 'O')&& (b9 == 'o' || b9 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won!" ;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "purple"
        b8btn.style.color = "purple"
        b9btn.style.color = "purple"
     }
    // b3 b5 b7
    else if ((b3 == 'o' || b3 == 'O') && (b5 == 'o' || b5 == 'O')&& (b7 == 'o' || b7 == 'O')) {
        document.getElementById('print').innerHTML = "Player O won!" ;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "purple"
        b5btn.style.color = "purple"
        b7btn.style.color = "purple"
     }


}