// Seleziono container 
const containerJs = document.getElementById("container");

// Creo la nostra "lista" di numeri da 1 a 100
for ( i=1; i<=100; i++) {
    let divJs = document.createElement("div");
    divJs.classList.add("square");
    divJs.append(i);
    containerJs.append(divJs);

    // se il numero è divisibile per 3 aggiungo classe fizz 

    if ( i%3===0 ) {
        divJs.classList.add("fizz");
        divJs.innerHTML="fizz";
    }

    // se il numero è divisibile per 5 aggiungo classe buzz
    if ( i%5 ===0 ) {
        divJs.classList.add("buzz");
        divJs.innerHTML="buzz";
    }
    // se il numero è divisibile per 3 e 5 aggiungo classe fizzbuzz

}