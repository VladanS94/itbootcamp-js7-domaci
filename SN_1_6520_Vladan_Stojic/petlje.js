// 9. Zadatak
// Ispisati dvostruku vrednost brojeva od 5 do 15.

let dvostrukaVrednost = 5;
for(i = dvostrukaVrednost; i <= 15; i++){
    dvostrukaVrednost = i + i;
    console.log(dvostrukaVrednost);
}





// 10.Zadatak
// Odrediti sumu brojeva od n do m .

let n = 3;
let m = 10;
suma = 0;
for(i = n; i <= m; i++) {
    suma += i;
}
console.log(suma);






// 11. Zadatak
// Odrediti sumu kvadrata brojeva od n do m.

n = 1;
m = 5;

suma = 0;

for(i = n; i <= m; i++){
    suma += i * i;
}
console.log(suma);







// 12.Zadatak
// Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.

n = 20;
m = 100;

proizvod = 1;
for(i = n; i <= m; i++){
    if(i % 11 == 0){
        proizvod *= i;
    }
}
console.log(proizvod);






// 13.Zadatak
// Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.

n = -11;
m = 25;
suma = 0;
let suma1 = 0;
for(i = n; i<=m; i++){
    if(i < 0 ) {
        suma++;
    }
    if(i >= 0){
        suma1++;
    }
}
console.log(`Od ${n} do 0 ima ${suma} negativnih brojeva `);
console.log(`Od 0 do ${m} ima ${suma1} pozitivnih brojeva ukljucujuci i 0`);






//14.Zadatak
// Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.

n = 5;
m = 50;

suma = 0;
for(i = n; i<= m; i++){
    if(i % 3 == 0 || i % 5 == 0){
        suma++;
    }
}
console.log(`Broj brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5 je: ${suma}`);





// 15.Zadatak
// Odrediti proizvod brojeva od n do m koji su deljivi brojem a.

n = 5;
m = 10;
let a = 3;
proizvod = 1;
for(i = n; i <= m; i++){
    if(i % a == 0){
        proizvod *= i;
    }
}
console.log(`Proizvod brojeva od ${n} do ${m} koji su deljivi sa ${a} je: ${proizvod}`);





// 16.Zadatak
// Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su.
// Npr. za broj 15, delioci su 1, 3, 5 i 15, što znači da ima 2 delioca koji su deljivi brojem
// 3 i neparni su (to su brojevi 3 i 15)
// Npr. za broj 6, delioci su 1, 2, 3, 6, što znači da ima 2 delioca koji su deljivi brojem 3
// (3 i 6), ali samo jedan od njih je neparan (broj 3), te je rešenje ovog primera 1.

let p = 17;
suma = 0;
for(i = 1; i <= p; i++) {
    if(i % 3 == 0 && i % 2 == 1) {
        suma++;
        console.log(`Broj od 0 do ${p} kosi je deljivi sa 3 i neparan je: ${i}`);
    }
}
console.log(`Ukupno brojeva od 0 do ${p} koji su deljivi sa 3 i neparni su: ${suma}`);





// 17.Zadatak
// Odrediti zbir cifara unetog celog broja i dobijeni zbir ispisati na ekranu.

p = 29;
let o = p;
let zbir = 0;
while(p) {
    zbir += p % 10;
    p = Math.floor(p / 10);
}
console.log(`Zbir cifara za ${o} je: ${zbir}`);






// 18.Zadatak
// Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je
// prikazano na slici.

let lista = "<ul>";
for(i = 1; i <= 10; i++){
    
    if(i % 3 == 0){
        lista +=
        `
         <ul>
         <li class="purple">Element ${i}
         </li>
         </ul>
         `
    }
    else {
        lista += `<li>Elemnt ${i}</li>`
    }
}
lista += `</ul>`

document.body.innerHTML += lista;


// 19.Zadatak
// Kreirati 64 span elemenata i rasporediti ih kao na slici, tako da elementi izgledaju
// kao polja šahovske table.
// U realizaciji ovog zadatka koristiti for petlju.

let sah = `<div class="sah">`;
let b = 1;

for(i = 1; i <= 8; i++){
    if(i % 2 == 1){
        sah +=
        `
        <div class="bela">
            <span>${b++}</span>
            <span>${b++}</span>
            <span>${b++}</span>
            <span>${b++}</span>
            <span>${b++}</span>
            <span>${b++}</span>
            <span>${b++}</span>
            <span>${b++}</span>
        </div>
        `
        }
        else if(i % 2 == 0) {
            sah +=
            `
            <div class="crna">
                <span>${b++}</span>
                <span>${b++}</span>
                <span>${b++}</span>
                <span>${b++}</span>
                <span>${b++}</span>
                <span>${b++}</span>
                <span>${b++}</span>
                <span>${b++}</span>
            </div>
            `
        }
        
}
sah += `</div>`;
document.body.innerHTML += sah;

