//Crie uma função que recebe o array de strings 
//(Vulgo, lugares em que iremos visitar juntos um dia) [“Estados unidos”, “Canadá”, “Inglaterra”, “Reino unido”, “Portugal”, “Japão”, “Noruega”] 
//como parâmetro, percorra este array e  simplesmente exiba o nome do lugar que está percorrendo no formato “Em nosso thour pelo mundo, começaremos por {lugar}”


const tourPeloMundo=(lugares)=> {
 for (let index = 0; index < lugares.length;index+=1) {
    console.log(`Em nosso tour pelo mundo, começaremos por ${lugares[index]}.`);

}

 }
const lugaresParaVisitar = ["Estados Unidos", "Canadá", "Inglaterra", "Reino Unido", "Portugal", "Japão", "Noruega"];
tourPeloMundo(lugaresParaVisitar);