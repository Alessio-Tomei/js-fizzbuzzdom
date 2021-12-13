// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3
// Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

const container = document.querySelector('main .container .row');

for (let i = 1; i <= 100; i++) {
    // console.log(i);
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log('FizzBuzz');
            const element = `<div class="col">
                                <div class="at_box at_box-color-3">
                                    <span class="at_center-text">FizzBuzz</span>
                                </div>
                            </div>`;
            container.innerHTML += element;
        }
        else {
            console.log('Fizz');
            const element = `<div class="col">
                                <div class="at_box at_box-color-1">
                                    <span class="at_center-text">Fizz</span>
                                </div>
                            </div>`;
            container.innerHTML += element;
        }
    } else if (i % 5 == 0) {
        console.log('Buzz');
        const element = `<div class="col">
                            <div class="at_box at_box-color-2">
                                <span class="at_center-text">Buzz</span>
                            </div>
                        </div>`;
            container.innerHTML += element;
    }
    else {
        console.log(i);
        const element = `<div class="col">
                           <div class="at_box">
                                <span class="at_center-text">${i}</span>
                            </div>
                        </div>`;
            container.innerHTML += element;
    }
}

