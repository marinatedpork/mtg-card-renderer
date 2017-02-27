var Symbols = require('./symbols');

function image({ imageUrl, multiverseid }) {
  return imageUrl || `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${multiverseid}&type=card`;
}

function Renderer(card) {
  var view = image(card);
  view += '\n*' + card.name + '*';
  if (card.manaCost) {
    view += '\n*Mana cost*: ' + card.manaCost;
  }
  view += '\n*Type*: ' + card.type;
  if (card.text) {
    view += '\n\n' + card.text + '\n';
  }
  if (card.power) {
    view += '\n*P/T*: ' + card.power + '/' + card.toughness;
  }
  if (card.loyalty) {
    view += '\n*Loyalty*: ' + card.loyalty;
  }
  return Symbols(view).trim();
}

module.exports = Renderer;
