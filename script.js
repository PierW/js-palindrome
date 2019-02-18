function isParlindrome(word) {
  var reverse = "";
  for (var i = word.length-1; i >= 0; i--) {
    reverse += word[i];
  }
  if (word == reverse) {
    return true;
  }
  else {
    return false;
  }
}

// parola in ingresso dall'utente
var parola = prompt("Dimmi una parola");
// risultato della funzione
var isPal = isParlindrome(parola);

// stampa del risultato della funzione basato sul relativo output
if (isPal) {
  document.getElementById("word").innerHTML = parola + " è palindroma";
} else {
  document.getElementById("word").innerHTML = parola + " NON è palindroma";
}
