const numbers = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',  
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',   
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',  
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
}


module.exports = function toReadable (number) {
  if(number==0){
    return 'zero';
  }

  const digit = number%10;
  const tenDigit = number%100;
  const hundredDigit = Math.floor(number/100);

  
  let one = tenDigit>=20 ? `${numbers[digit]}` : '';
  let ten = tenDigit>=20 ? `${numbers[tenDigit-digit]}` : `${numbers[tenDigit]}`;
  let hundred = !hundredDigit ? '' : `${numbers[hundredDigit]} hundred`;



  return `${hundred} ${ten} ${one}`.trim();
  
}






