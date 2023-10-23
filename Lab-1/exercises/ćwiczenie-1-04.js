/**
 * Napisz skrypt, który generuje losowy łańcuch o długości w zmiennej length składający się ze znaków alfabetu a-z i cyfr.
 * Wygenerowany Łańcuch umieść w zmiennej randomString
 */
let length = 5;
let randomString = '';
const table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let i = 0;
while (i < length) {
  randomString += table.charAt(Math.floor(Math.random() * table.length));
  i += 1;
}
console.log(randomString);
