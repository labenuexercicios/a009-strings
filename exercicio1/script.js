function imprimirComidasFavoritas (){
  let nome = prompt('Qual o seu nome?')
  let comidaFavorita1 = prompt('Qual sua  primeira comida favorita?')
  let comidaFavorita2 = prompt('Qual sua  segunda comida favorita?')
  let comidaFavorita3 = prompt('Qual sua  terceira comida favorita?')
  console.log(`Estas são as comidas favoritas de ${nome}:\n-${comidaFavorita1}\n-${comidaFavorita2}\n-${comidaFavorita3}`)
}

imprimirComidasFavoritas();