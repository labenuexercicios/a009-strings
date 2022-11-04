/* # Exercício 1

Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
    ```
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3
    ```
    
Você deve usar apenas um `console.log()` para isso */

const name = prompt(`Qual seu nome?`);
const food1 = prompt(`Qual sua comida favorita?`);
const food2 = prompt(`Outra comida favorita?`);
const food3 = prompt(`Mais uma comida favorita:`);

console.log(`Estas são as comidas favoritas de ${name} \n-${food1} \n-${food2} \n-${food3}`)

 /*  <details> 
  <summary> 💡 Dica</summary>
  
    ⭐ Você pode juntar texto com variáveis de duas formas:
    - Concatenando as strings (com o sinal de +)
    - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
    Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
  </details> */