const boxes = document.querySelectorAll('.box');
let ctr = 0;
const arr = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
arr[5] = 'd';
let w = 0;


for (let input of boxes) {
    input.addEventListener('click', () => {
        if (ctr % 2 == 0) {
            input.innerText = 'X';

            arr[parseInt(input.value)] = 'X';

            if (threeMatch('X')) {
                console.log("Player X wins");
                w = 1;
            }
        }

        else {
            input.innerText = 'O';
            arr[input.value] = 'O';

            if (threeMatch('O')) {
                console.log("Player O wins");
                w = 1;
            }


        }
        if (w = 0) {
            console.log('match tie')
        }
        ctr++;
    })
}

function threeMatch(s) {
    if ((arr[0] == s && arr[1] == s && arr[2] == s) ||
        (arr[3] == s && arr[4] == s && arr[5] == s) ||
        (arr[6] == s && arr[7] == s && arr[8] == s) ||
        (arr[0] == s && arr[3] == s && arr[6] == s) ||
        (arr[1] == s && arr[4] == s && arr[7] == s) ||
        (arr[2] == s && arr[5] == s && arr[8] == s) ||
        (arr[0] == s && arr[4] == s && arr[8] == s) ||
        (arr[2] == s && arr[4] == s && arr[6] == s)) {
        return true;

    }



    else {

        return false;
    }


}

