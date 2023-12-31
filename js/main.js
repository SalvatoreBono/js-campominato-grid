"use strict"

/* Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
 */
const btnGeneratorInput = document.getElementById("generator");
const containerFlowers = document.querySelector(".container-flowers");
const numberBlockGeneratorInput = document.getElementById("number-block");

//L’utente clicca su un bottone
btnGeneratorInput.addEventListener("click", function () {
    //Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
    const numberBlockGenerator = numberBlockGeneratorInput.value;

    //Math.sqrt calcola la radice
    //in questo caso Math.sqrt calcola la radice del numero che metti nella select
    const BlockGenerator = Math.sqrt(numberBlockGenerator);

    //Al click del btn aggiungi quello che viene dopo
    containerFlowers.innerHTML = "";

    containerFlowers.classList.add("d-flex");
    //Ogni cella ha un numero progressivo, dato dalla select "numberBlockGenerator".
    for (let i = 1; i <= numberBlockGenerator; i++) {

        //genererà i div virtuali.
        const boxFlowers = document.createElement("div");

        //viene data la classe creata nel css
        boxFlowers.classList.add("box-flowers");

        //stampa nel boxFlowers tutte le "i" che sono tutti i numeri
        boxFlowers.innerHTML = i;

        //al boxFlowers dare un flex basiss con un "calc 100% / la radice dei numeri generati"
        boxFlowers.style.flexBasis = `calc(100% / ${BlockGenerator})`;

        //collegare i div creati virtualmente
        containerFlowers.append(boxFlowers);

        boxFlowers.addEventListener("click", function () {
            //Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro
            boxFlowers.classList.toggle("bg-primary");
            // emetto un messaggio in console con il numero della cella cliccata.
            console.log(i);
        })
    }
})

/* Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con “facile”=> 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con “medio” => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con “difficile” => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
 */
