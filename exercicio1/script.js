function imprimirComidasFavoritas (){
    const nome = prompt("Digite seu nome")
    const comida1 = prompt("Qual sua comida favorita?")
    const comida2 = prompt("Qual sua segunda comida favorita?")
    const comida3 = prompt ("Qual a terceira?")

    console.log(`Estas são as comidas favoritas de ${nome}:
    \n- ${comida1} \n- ${comida2}    \n- ${comida3}`)
}
imprimirComidasFavoritas ()



/* # Exercício 1
**Atenção:** para esse exercício você deve adicionar todas as soluções dentro da função **imprimirComidasFavoritas**.

Faça um programa que pergunte ao usuário seu **nome** e suas **três comidas favoritas**.
 Em seguida, imprima no console a seguinte mensagem:
    
    
   
    Estas são as comidas favoritas de nomeDoUsuario:
    - Comida1
    - Comida2
    - Comida3
  
    
Você deve usar apenas um `console.log()` para isso */