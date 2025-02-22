import generateName from 'sillyname'; 
import superheroes from 'superheroes';



const sillyName = generateName();
function selectAHero(allSpHeroes) {
    const qttHeroes = allSpHeroes.length;
    console.log(`There are ${qttHeroes} heroes.`);
    const choosedIndice = Math.floor(qttHeroes*Math.random());    
    return allSpHeroes[choosedIndice];
}


console.log(`Meu nome é: ${sillyName}`);
console.log(`Eu sou: ${selectAHero(superheroes)}`);

