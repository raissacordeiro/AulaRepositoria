// Desafio 1: faça um programa que forneça um número aleatório.
function numeroAleatório()
{

    let numeroAleatório = Math.floor(Math.random() * 10 );
    return numeroAleatório;
 } 
// Desafio 2: Faça um programa que forneça uma letra aleatória.
function letraAleatória()
{
   let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let position = Math.floor( Math.random() * alfabeto.length )

   if (position == alfabeto.length) {
       position = alfabeto.length - 1;
   }

   return alfabeto.charAt(position);
}

// Desafio 3: Faça um programa para gerar uma placa com 3 letras e 4 números (modelo antigo LLL+NNNN).
  console.log (letraAleatória() + letraAleatória() + letraAleatória() + '-' + numeroAleatório() + numeroAleatório() + numeroAleatório() + numeroAleatório()) 

  function gerarPlacaAntiga()
 {  
    let placa = '';
    
    for (let i = 0; i <= 6 ;i++)
    {
        if (i <= 2 || i==5){
            placa += letraAleatória();
        } else if (i == 3){
            placa += '-';
        } else if (i == 4 || i > 5){
            placa += numeroAleatório();
        }
    }
 }