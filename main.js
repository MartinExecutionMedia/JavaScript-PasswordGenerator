/* Alle Elemente definieren */ 

const output = document.getElementById("output");
const characteramount = document.getElementById("characteramount");
const rangevalue = document.getElementById("range-value");
const checkbox = document.getElementById("checkbox");

rangevalue.innerHTML = characteramount.value + " Zeichen";

/* Function bei veränderung der Skala */ 

characteramount.oninput = function() {
    rangevalue.innerHTML = this.value + " Zeichen";
  }

/* Passwort generieren */ 

  function generatePassword() {

    const length = characteramount.value;

    var result = "";

    if(checkbox.checked == true){ /* Sonderzeichen = JA */ 
        var charset = "\"\`!-.;,;/)(=}{\´0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; /* Buchstaben verfügbar für Sonderzeichen = JA */ 
    }else {
        var charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; /* Buchstaben verfügbar für Sonderzeichen = NEIN */ 
    }

/* Generiert das Passwort (beeinflusst durch Länge und Buchstaben) */ 

    for (var i = 0, n = charset.length; i < length; ++i) {
        result += charset.charAt(Math.floor(Math.random() * n));
    }

    return output.innerHTML = result; /* Ausgabe vom Passwort */ 
}
