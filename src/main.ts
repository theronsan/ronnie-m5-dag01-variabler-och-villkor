import './kalibrering'

// Dag 1: Variabler, typer och villkor. Följ README.md steg för steg.
// Resultatet syns i Console (F12). Spara, så laddas sidan om av sig själv.
// Röda understrykningar i VS Code är TypeScript som varnar. Håll musen över dem och läs.

// STEG 1 ------------------------------------------------------------
// TODO: skriv ut texten "Hej från Kafé Kardemumma" med console.log
console.log('Hej från Kafé Kardemumma')

// STEG 2 ------------------------------------------------------------
// TODO: skapa konstanten kafeNamn (string) med värdet "Kafé Kardemumma"
// TODO: skapa konstanterna prisBulle (number, 35) och prisKaffe (number, 32)
// TODO: skapa variablerna antalBullar (2) och antalKaffe (1) med let, båda number
// TODO: skriv ut kafeNamn
//       Skriv typen själv, till exempel:  const kafeNamn: string = "..."
const kafeNamn: string = 'Kafé Kardemumma'
const prisBulle: number = 35
const prisKaffe: number = 32
let antalBullar: number = 2
let antalKaffe: number = 1
console.log(kafeNamn)

// STEG 3 ------------------------------------------------------------
// TODO: skapa en string, ett number, en boolean, en undefined och en null
//       Typerna heter string, number, boolean, undefined och null
// TODO: skriv ut typeof för alla fem på en rad (tips: separera med komma)
// TODO: prova att ge number-variabeln en text. Vad säger TypeScript?
const customerName: string = 'Kalle'
const customerSinceYear: number = 2026
let isVerified: boolean = true
let customerAddress
let customerPhone = null

// Jag tror att null har typen object

console.log(
    typeof customerName,
    typeof customerSinceYear,
    typeof isVerified,
    typeof customerAddress,
    typeof customerPhone
)

// STEG 4 ------------------------------------------------------------
// TODO: räkna ut summa = antalBullar * prisBulle + antalKaffe * prisKaffe
// TODO: räkna ut momsDel (12 % ingår i priset): summa * 0.12 / 1.12
// TODO: skriv ut "Summa: ... kr" och "Varav moms (12 %): ... kr"
//       Moms ska ha två decimaler (toFixed(2))
//       Håll musen över momsDel.toFixed(2). Vilken typ ger toFixed?
const summa = antalBullar * prisBulle + antalKaffe * prisKaffe
const momsDel = (summa * 0.12) / 1.12
console.log(`Summa: ${summa} kr. Varav moms (12 %): ${momsDel.toFixed(2)}`)

// STEG 5 ------------------------------------------------------------
// TODO: skapa ärStudent (boolean, true). Om ärStudent är true: rabatt 10 %.
// TODO: räkna ut attBetala (number) och skriv ut "Att betala: ... kr"
const isStudent: boolean = true
if (isStudent === true) {
    const attBetala = summa - summa * 0.1
    const varavMoms = (attBetala * 0.12) / 1.12
    console.log(
        `Att betala: ${attBetala} kr. Varav moms (12 %): ${varavMoms.toFixed(2)}`
    )
} else {
    console.log(`Summa: ${summa} kr. Varav moms (12 %): ${momsDel.toFixed(2)}`)
}

// STEG 6 ------------------------------------------------------------
// TODO: skapa veckodag (string, "lördag") och klockslag (number, 15)
// TODO: avgör om kaféet är öppet (boolean): vardagar 7–18, helger 9–16
// TODO: skriv ut "Öppet just nu: ja" eller "Öppet just nu: nej"

// STEG 7 ------------------------------------------------------------
// TODO: se README. Gissa först, kör sedan.
