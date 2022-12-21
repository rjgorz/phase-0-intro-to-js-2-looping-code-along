// Code your solutions in this file
for(let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for(let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

const names = ["George", "Andy", "Sally", "Rachel", "Steve"];

function writeCards(names, event) {
    const cards = [];
    for(let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return cards;
}

writeCards(names, "Christmas");

function countDown(n) {
    while(n >= 0) {
        console.log(n--);
    }
}

countDown(10);