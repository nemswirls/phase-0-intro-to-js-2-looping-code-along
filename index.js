let names = ["Guadalupe", "Ollie", "Aki"]
let eventName = "birthday"
function writeCards(names, eventName) {
const thankYouCards = [];

for (const name of names) {
    const message= `Thank you, ${name}, for the wonderful ${eventName} gift!`;
    thankYouCards.push(message);
}
return thankYouCards;
}
function countDown(i){
let countdown = "";
while (i>= 0){
    console.log(i);
    i--;
}

}
countdown();