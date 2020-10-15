const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let newStr = '';
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i+10));
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '**********') {
        newStr += ' ';
      } else {
        let newLetter = '';
        for (let j = 0; j < 10; j += 2) {
          if (`${arr[i][j]}${arr[i][j + 1]}` === '10') {
            newLetter += '.';
          } else if (`${arr[i][j]}${arr[i][j + 1]}` === '11') {
            newLetter += '-';
          }
        }
        newStr += MORSE_TABLE[newLetter];
      }
    }
    return newStr;
}

module.exports = {
    decode
}