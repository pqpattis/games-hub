var firstCardInPair = null;
let pairsMatched = 0;
let totalPairs = 8;

let moves = 0;

// Setup game
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'cyan' ];
const divs = document.querySelectorAll('.card');
var cards = Array.from(divs);
for (var i = 0; i < colors.length; i++) {

    let firstCard = Math.floor(Math.random() * cards.length);
    cards[firstCard].classList.add(colors[i]);
    cards.splice(firstCard, 1);

    let secondCard = Math.floor(Math.random() * cards.length);
    cards[secondCard].classList.add(colors[i]);
    cards.splice(secondCard, 1);
}

function cardClicked(e){
    
    if (e == firstCardInPair){
        return;
    }

    if(!e.classList.contains("hidden")){
        return;
    }

    if (firstCardInPair == null){
        e.classList.remove('hidden');
        firstCardInPair = e;
    }
    else
    {
        e.classList.remove('hidden');

        moves++;
        document.getElementById("moveCounter").innerHTML = "Moves: " + moves;

        if (e.isEqualNode(firstCardInPair)){
            firstCardInPair = null;
            pairsMatched++;

            if (pairsMatched == totalPairs)
                document.getElementById("gameMessage").innerHTML = "You win!";
        }
        else{
            setTimeout(function(){
                firstCardInPair.classList.add("hidden");
                e.classList.add("hidden");
                firstCardInPair = null;
            }, 200);
        }
    }
}