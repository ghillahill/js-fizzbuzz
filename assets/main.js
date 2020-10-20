//Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
//al posto dei multipli di 3, deve stampare "Fizz"
//al posto dei multipli di 5, deve stampare "Buzz"
//al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz"

for (var i = 1; i <= 100; i++) {
    //console.log(i);
    //Se un numero è multiplo sia di 3 che di 5 stampa FizzBuzz
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    }
    //Se un numero è multiplo di 3 stampa Fizz
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    //Se un numero è multiplo di 5 stampa Fizz
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    //Se un numero non è multiplo di 3 ne di 5 stampa il numero
    else {
        console.log(i);
    }
}
