// EXERCICI 1
/* let x = 4;
if (x % 3 == 0 || x % 7 == 0) {
    console.log("És múltiple de 3 o de 7");
} else {
    console.log("No és múltiple");
}
 */

// EXERCICI 2
/* let x = 15
let y = 99
let r1 = (x >= 10 && x <= 50) ? "x està en rang" : "x fora de rang";
let r2 = (y >= 10 && y <= 50) ? "y està en rang" : "y fora de rang";
console.log(r1);
console.log(r2);
 */

// EXERCICI 3
/* let x = 6;

if (x < 5) console.log("Suspès");
else if (x < 6) console.log("Suficient");
else if (x < 7) console.log("Bé");
else if (x < 9) console.log("Notable");
else console.log("Excel·lent");
 */

// EXERCICI 4
/* let x = 21;
let m3 = (x % 3 === 0);
let m7 = (x % 7 === 0);

let op = (m3 ? 1 : 0) + (m7 ? 2 : 0);

switch (op) {
    case 1: console.log("Múltiple de 3"); break;
    case 2: console.log("Múltiple de 7"); break;
    case 3: console.log("Múltiple de 3 i 7"); break;
    default: console.log("No és múltiple");
}
 */

// EXERCICI 5
/* let suma = 0;
let contador = "0";
let n = 0;
let x = 15;

while (suma + (n + 1) <= x) {
    n++;
    suma += n;
    contador += " + " + n
}

console.log(contador + " <= " + x);
console.log(suma)
 */

// EXERCICI 6
/* let x = "j58kdj18fh2"
let sumaDigits = 0;

for (let c of x) {
    if (!isNaN(c))
        sumaDigits += Number(c);
}

console.log(sumaDigits);
 */

// EXERCICI 7
/* let a = 16, b = 65, c = 8;
let max, min, mid;

if (a >= b && a >= b) max = a;
else if (b >= a && b >= c) max = b;
else max = c;

if (a <= b && a <= c) min = a;
else if (b <= a && b <= c) min = b;
else min = c;

mid = (a + b + c) - max - min;
console.log(max + " > " + mid + " > " + min)
 */

// EXERCICI 8
/* let a = 9
for (let b = 0; b <= a; b++) {
    console.log(b + (b % 2 === 0 ? " es parell" : " es senar"))
}
 */

// EXERCICI 9
/* let a = "";
for (let i = 0; i < 5; i++) {
    a += "* "
    console.log(a)
}
 */

// EXERCICI 10
/* let i = 0;
let suma = 0;

do {
    if (i % 3 === 0 || i % 5 === 0) suma += i;
    i++;
} while (i <= 1000);

console.log(suma);
 */

// EXERCICI 11
/* for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) continue;
    console.log("* ".repeat(i));
}
 */

// EXERCICI 12
let x = 123456
let s = String(x);
let resultat = "";

for (let i = 0; i < s.length; i += 2) {
    resultat += s[i + 1] + s[i];
}

console.log(resultat);
