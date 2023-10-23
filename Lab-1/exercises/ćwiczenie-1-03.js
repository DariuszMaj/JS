/**
 * Napisz skrypt zamieniający wartość zmiennej decimalNumber  na liczbę rzymską w zakresie od 1 do 10.
 * Wynik zapisz do zmienej romanNumber.
 * Jeśli decimalNumber nie zmieści sie w zakresie to umieść w romanNumber komunikat: Decimal number is out of range!
 * Jeśli decimalNumber jest równe undefined lub null to umieść w romanNumber komunikat: Decimal number is undefined or null!
 */
const dictionary = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
};

let decimalNumber = 4;
let romanNumber = 'IV';
if (decimalNumber) {
  if (decimalNumber <= 10 || decimalNumber >= 1) {
    romanNumber = dictionary[decimalNumber];
  } else {
    romanNumber = 'Decimal number is out of range!';
  }
} else {
  romanNumber = 'Decimal number is undefined or null!';
}

console.log(romanNumber);
