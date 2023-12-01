class Deck {
  constructor(deckType) {
    this.deck = [];
    const spanish = ['Espadas', 'Copas', 'Oros', 'Bastos']; // Spanish Suits
    const french = ['Hearts', 'Spades', 'Clubs', 'Diamonds']; // French Suits
    this.possibleCardValues = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']; // Possible Cards Vlaues

    this.suits = (deckType === 'french') ? french : spanish;
  }

  add(cardValue, cardSuit) {
    this.deck.push(`${cardValue} of ${cardSuit}`);
  }

  remove(cardValue, cardSuit) {
    this.deck = this.deck.filter((el) => el !== `${cardValue} of ${cardSuit}`);
  }

  check(val) {
    return this.suits.includes(val);
  }

  shuffle() {
    const { deck } = this;
    let mix = deck.length;
    let i;

    while (mix) {
      i = Math.floor(Math.random() * (mix -= 1));

      [deck[mix], deck[i]] = [deck[i], deck[mix]];
    }
    return this;
  }
}

let deck1;

document.getElementById('start').addEventListener('click', (e1) => {
  e1.preventDefault();
  const type = document.querySelector('input[name="type"]:checked').value;
  deck1 = new Deck(type);
  console.log('You have choose a Deck Type: ', type);
  document.getElementById('cards').value = deck1.deck;
});

document.getElementById('shuffle').addEventListener('click', (e2) => {
  e2.preventDefault();
  deck1.shuffle();
  document.getElementById('cards').value = deck1.deck;
  console.log('Shuffling cards to deck...');
});

document.getElementById('add').addEventListener('click', (e3) => {
  e3.preventDefault();
  const cardValue = document.getElementById('Addvalue').value;
  const cardSuit = document.getElementById('Addsuit').value;
  if (deck1.check(cardSuit)) {
    deck1.add(cardValue, cardSuit);
    console.log('Adding cards to deck...');
  } else {
    console.log('Deck type conflict');
    alert(' Deck Type Conflict. You cannot add a card.Please choose a different suits.');
  }

  document.getElementById('cards').value = deck1.deck;
});

document.getElementById('remove').addEventListener('click', (e4) => {
  e4.preventDefault();
  const cardValue = document.getElementById('removevalue').value;
  const cardSuit = document.getElementById('removesuit').value;
  if (deck1.check(cardSuit)) {
    deck1.remove(cardValue, cardSuit);
    console.log('Removing cards to deck...');
  } else {
    console.log('Deck type conflict');
    alert('Deck type conflict. You cannot remove a card. Please choose a different suits.');
  }
  document.getElementById('cards').value = deck1.deck;
});
