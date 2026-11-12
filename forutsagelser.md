# Förutsägelser (steg 8)

Skriv din gissning FÖRST. Skriv sedan raden i STEG 7 i `src/main.ts`, kör den och fyll i vad som hände. Skriv också vad TypeScript sa (ofta understryker den raden).

| Uttryck             | Min gissning | Det som hände       | Vad sa TypeScript?                                                                                              | Hade jag rätt? |
| ------------------- | ------------ | ------------------- | --------------------------------------------------------------------------------------------------------------- | -------------- |
| `"5" + 3`           | 53           | 53                  | Ingenting                                                                                                       | Ja             |
| `"5" - 3`           | typfel       | 2                   | Error: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type. | Nej            |
| `true + 1`          | true1        | 2                   | Error: Operator '+' cannot be applied to types 'boolean' and 'number'.                                          | Nej            |
| `0.1 + 0.2`         | 0.3          | 0.30000000000000004 | Ingenting                                                                                                       | Ja             |
| `"" === 0`          | true         | false               | Error: This comparison appears to be unintentional because the types 'string' and 'number' have no overlap.     | Nej            |
| `null == undefined` | true         | true                | Ingenting                                                                                                       | Ja             |

## Min regel för det jag missade

Skriv en mening med egna ord för varje uttryck du hade fel på.

Rad 2: Trots att "5" är en sträng går det alltså att använda strängen för att räkna med (5-3=2)?
Rad 3: true är 1 och false är 0. Jag borde ha förstått att resultatet då blir 2 eftersom 1+1=2
Rad 5: En tom sträng är inte lika med 0, och uttrycket är därmed false. Det borde jag ha förstått.

## Tänk efter

Tre av raderna ger ett typfel i TypeScript, men JavaScript kör dem ändå. Vilka tre, och vad säger det om vad TypeScript kan och inte kan göra?

Rad 2, 3 och 5. Det säger att TypeScript kan hitta fel men kan inte stoppa JavaScript från att köra koden.
