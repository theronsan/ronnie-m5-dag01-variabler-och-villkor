// Variabler

// 1.
// Med typ
const firstName: string = 'Ronnie'
// Utan typ
const lastName = 'Sandberg'
// Skriver ut till konsolen
console.log(firstName)
console.log(lastName)

// 2.
let tal1: number = 1
let tal2: number = 2
let summa: number = tal1 + tal2
// Skriver ut till konsolen
// Summa med mallsträng
console.log(`Summa (kr): ${tal1 + tal2} kr`)
// Summa som number
console.log(summa)
// Summa med +
console.log('Summa: ' + summa + ' kr')

// 3.
let tal: number = 20
let resultat: string = ''
if (tal > 10) {
    resultat = 'Större än 10'
} else {
    resultat = 'Mindre än 10'
}
// Skriver ut till konsolen
console.log('Talet är ' + resultat)

// 4.
//Vet ej

// 5.
function theNumber(talet) {
    console.log('Skriver ut talet två gånger: ' + talet + ' ' + talet)
}
theNumber(23)
