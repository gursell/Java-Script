

//Skriv en funktion som tar emot ett värde som parameter. 
//Gör nu en if-sats som kollar om värdet är lika med 55 och skriv sedan ut “värdet är lika med 55”. 
//Sen kollar om värdet är under 50(else -if) och skriver ut “Värdet är under 50). 
//Annars(else) skriver ni ut “Värdet är större än 55”.


   function checkValue(value) {
  if (value === 55) {
    console.log("Värdet är lika med 55");
  } else if (value < 50) {
    console.log("Värdet är under 50");
  } else {
    console.log("Värdet är större än 55");
  }
}

// Anropa funktionen med ett värde som parameter
checkValue(55); // Exempel: Värdet är lika med 55
checkValue(45); // Exempel: Värdet är under 50
checkValue(60); // Exempel: Värdet är större än 55

