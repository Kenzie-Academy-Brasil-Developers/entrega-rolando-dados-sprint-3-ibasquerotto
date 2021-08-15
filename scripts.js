
// pegar um numero aleatorio entre dois valores 

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

 // função rolar o dado
 const rollDice = () => randomNumber(1, 6)

 let diceOne 
 let diceTwo 
 let sumDices 
 
 let numDice = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]


const resultadoList = document.getElementById("resultadoList")
const resultadosBarra = document.getElementById("resultadosBarra")



const rolarDados = function (rodadas)  {

for (let i = 1; i <= rodadas; i++){
   diceOne = rollDice()
   diceTwo = rollDice()
   sumDices = diceOne + diceTwo
    
//    console.log (diceOne)
//    console.log (diceTwo)
//    console.log ("a soma é: " + sumDices)


    if (sumDices == 2){ 
        result[0] += 1
        
    }

    if (sumDices == 3){ 
        result[1] += 1
        
    }

    if (sumDices == 4){ 
        result[2] += 1
        
    }

    if (sumDices == 5){ 
        result[3] += 1
        
    }
    
    if (sumDices == 6){ 
        result[4] += 1
        
    }

    if (sumDices == 7){ 
        result[5] += 1
        
    }

    if (sumDices == 8){ 
        result[6] += 1
       
    }

    if (sumDices == 9){ 
        result[7] += 1
       
    }

    if (sumDices == 10){ 
        result[8] += 1
       
    }

    if (sumDices == 11){ 
        result[9] += 1
        
    }

    if (sumDices == 12){ 
        result[10] += 1
      
    }
}


for (let i = 0; i < result.length; i++){
    let resultados = (numDice[i] + ":" + result[i])

    let larguraBarra = result[i]

    let resultadosList = document.createElement("div")    
    resultadosList.innerHTML = resultados
    resultadosList.style.width = `${larguraBarra}px`
    resultadosList.style.backgroundColor = `#ddd`

    
    resultadoList.appendChild(resultadosList)

    
   
   
}


}

function reset(){
    resultadoList.innerHTML = ""

}

const buttonrollDice = document.getElementById("rollDice")

buttonrollDice.addEventListener("click", function(){
    reset()
    result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    rolarDados(1000)
    
})



