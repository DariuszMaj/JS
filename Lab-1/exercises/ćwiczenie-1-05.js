/**
 * Napisz skrypt, który na podstawie dwóch liczb `n` < `m` tworzy łańcuch w zmiennej progressBar dwa wiersze:
 * pasek: określający, ile procent stanowi liczba `n` w stosunku do `m`, długość paska wynosi od 0 do 50 znaków `#` plus uzupełnienie do 50
 * znaków spacjami. Na początku i końcu znaki `|`.
 * opis: w wierszu poniżej `0%` na początku, `100%` na końcu i wartość paska w procentach po środku.
 * Przykład
 * Dla `n` = 36,6 i `m` = 50
 * skrypt powinien utworzyć w prograssBar łańcuch jak poniżej:
 * |################################                  |
 * 0 %                      75%                    100%
 */

function createProgressBar(n, m) {
  const progress = (n / m) * 100;
  const progressBarLength = Math.floor((progress / 100) * 50);

  let progressBar, description;
  if (progress < 100) {
    console.log(progressBarLength);
    progressBar = `|${'#'.repeat(progressBarLength)}${' '.repeat(
      50 - progressBarLength
    )} |`;
    description = `0% ${' '.repeat(progressBarLength)} ${Math.round(
      progress
    )}% ${' '.repeat(50 - progressBarLength)} 100%`;
  } else {
    progressBar = `|${'#'.repeat(50)}|`;
    description = `0% ${' '.repeat(50)}100%`;
  }
  return progressBar + '\n' + description;
}

const progressBar = createProgressBar(50, 100);
console.log(progressBar);
