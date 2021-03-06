var SYMBOLS = {
  ':w:': /\{W\}/g,
  ':u:': /\{U\}/g,
  ':s:': /\{B\}/g,
  ':r:': /\{R\}/g,
  ':g:': /\{G\}/g,
  ':c:': /\{C\}/g,
  ':0g:': /\{0\}/g,
  ':1g:': /\{1\}/g,
  ':2g:': /\{2\}/g,
  ':3g:': /\{3\}/g,
  ':4g:': /\{4\}/g,
  ':5g:': /\{5\}/g,
  ':6g:': /\{6\}/g,
  ':7g:': /\{7\}/g,
  ':8g:': /\{8\}/g,
  ':9g:': /\{9\}/g,
  ':10g:': /\{10\}/g,
  ':11g:': /\{11\}/g,
  ':12g:': /\{12\}/g,
  ':13g:': /\{13\}/g,
  ':14g:': /\{14\}/g,
  ':15g:': /\{15\}/g,
  ':16g:': /\{16\}/g,
  ':17g:': /\{17\}/g,
  ':18g:': /\{18\}/g,
  ':19g:': /\{19\}/g,
  ':20g:': /\{20\}/g,
  ':xg:': /\{X\}/g,
  ':w-u:': /\{W\/U\}/g,
  ':w-s:': /\{W\/B\}/g,
  ':u-s:': /\{U\/B\}/g,
  ':u-r:': /\{U\/R\}/g,
  ':s-r:': /\{B\/R\}/g,
  ':s-g:': /\{B\/G\}/g,
  ':r-g:': /\{R\/G\}/g,
  ':r-w:': /\{R\/W\}/g,
  ':g-w:': /\{G\/W\}/g,
  ':g-u:': /\{G\/U\}/g,
  ':2g-w:': /\{2\/W\}/g,
  ':2g-u:': /\{2\/U\}/g,
  ':2g-s:': /\{2\/B\}/g,
  ':2g-r:': /\{2\/R\}/g,
  ':2g-g:': /\{2\/G\}/g,
  ':w-p:': /\{W\/P\}/g,
  ':u-p:': /\{U\/P\}/g,
  ':s-p:': /\{B\/P\}/g,
  ':r-p:': /\{R\/P\}/g,
  ':g-p:': /\{G\/P\}/g,
  ':snow:': /\{S\}/g,
  ':e:': /\{E\}/g,
  ':t:': /\{T\}/g
};

module.exports = function(str) {
  return Object.keys(SYMBOLS).reduce(function(accum, emoji) {
    return accum.replace(SYMBOLS[emoji], emoji);
  }, str);
}
