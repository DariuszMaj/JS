/**
 * Zdefiniuj funkcję, która zwróci najdłuższy wyraz łańcucha
 * Przykład
 * let word = longestWord("Programowanie w JavaScript jest super")
 * w word powinno być słowo "Programowanie"
 * Załóż, że w łańcuchu są słowa oddzielone tylko spacją (brak kropek, przecinków itd.)
 */

function longestWord(sentence) {
  if (sentence) {
    const wordsArray = sentence.split(' ');
    if (wordsArray.length === 0) {
      return null;
    } else {
      return wordsArray.reduce((longest, current) =>
        current.length > longest.length ? current : longest
      );
    }
  } else return '';
}

//Testy
if (longestWord('Is this a fox') === 'this') {
  console.log('Test 41 passed');
} else {
  console.log('Test 41 failed');
}
if (longestWord('') === '') {
  console.log('Test 42 passed');
} else {
  console.log('Test 42 failed');
}
if (longestWord() === '') {
  console.log('Test 43 passed');
} else {
  console.log('Test 43 failed');
}
