/**Exercício 1

Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas.
 Em seguida, Imprima no console a seguinte mensagem:

```
Estas são as comidas favoritas de nomeDoUsuario
- Comida1
- Comida2
- Comida3 
*/

let nomeDoUsuario = prompt(`Qual es seu nome?`);
let comida1 = prompt("Qual e su comida favorita?");
let comida2 = prompt("Qual e su comida favorita?");
let comida3 = prompt("Qual e su comida favorita?");

const frase = `Estas são as comidas favoritas de ${nomeDoUsuario}`
+`\n${comida1}`
+`\n${comida2}`
+`\n${comida3}`
console.log(frase);