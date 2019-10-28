$(document).ready(function() {
  var values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  var suits = ["Spades", "Diamonds", "Clubs", "Hearts"];

  var cards = [];
  values.forEach(function(value) {
    suits.forEach(function(suit) {
      cards.push(value + " of " + suit);
    });
  });
  console.log(cards);

  cards.forEach(function(card) {
    $("#result").append("<li>"+card+"</li>");
  })
});
