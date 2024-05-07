//Crie uma função que emite uma mensagem no console com base na nota de um aluno,
 //se a nota for igual ou maior que 5, a mensagem que deve ser exibida é “Passou”, 
 //caso contrário deve ser exibida “Reprovou”, a função deve receber a nota do aluno nos parâmetros

 const Aluno = (nota)=>{
if (nota>= 5){
      console.log('Passou!')
}else{
    console.log('Reprovou!')
}
  
 }

const NotaDeAluno= Aluno(5);
