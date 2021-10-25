// Seleziono container 
const containerJs = document.getElementById("container");

// Creo la nostra "lista" di numeri da 1 a 100
for ( i=1; i<=100; i++) {
    let divJs = document.createElement("div");
    divJs.classList.add("square");
    divJs.append(i);
    containerJs.append(divJs);


if ( i%3 === 0 &&  i%5 ===0 ){
// se il numero è divisibile per 3 e 5 aggiungo classe fizzbuzz 
divJs.classList.add("fizzbuzz");
divJs.innerHTML="fizzbuzz";

} else if ( i%3 === 0 ) {
// se il numero è divisibile per 3 aggiungo classe fizz 
divJs.classList.add("fizz");
divJs.innerHTML="fizz";

} else if ( i%5 === 0 ) {
// se il numero è divisibile per 5 aggiungo classe buzz
divJs.classList.add("buzz");
divJs.innerHTML="buzz";
} 

}