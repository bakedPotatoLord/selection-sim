//@author  @bakedpotatolord
import ReadLine from 'readline';
import chalk from 'chalk';

let numWhite = 50
let numBlack = 50
let gen = 0

let tempWhite:number,tempBlack:number

interface generationData{
  numWhite:number
  numBlack:number
  gen?:number

  totalOrganisms?:number
  blackFrequency?:number
  whiteFrequency?:number
}


let data :generationData[] = [createData()]

const readLine = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log(chalk.greenBright('welcome to the natural selection simulation'))
getOption()


async function getOption(){
  console.log(" 'W' to run simuation, 'Q' to quit, 'S' to do shit")
  readLine.question('what do you want to do? ',(answer)=>{
    switch(answer.toUpperCase()){
      case 'W':
        runSimulation()
        getOption()
        break
      case 'Q':
        process.exit(0)
        break
      case 'S':
        doShit()
        getOption()
        break
      default:
        console.log(chalk.redBright('invalid option'))
        getOption()
    }
  })
}

function reset(){
  numWhite = 50
  numBlack = 50
  gen = 0
  data = [createData()]
}

function runSimulation(){
  reset()
  while(numWhite >0){
    gen++
    
    tempWhite = 0
    tempBlack = 0
  
    while(numWhite > 0 || numBlack > 0){
      
      let t1 = pickRandom(numWhite,numBlack)
      let t2 =  t1? pickRandom(numWhite,numBlack-1):pickRandom(numWhite-1,numBlack) 
  
      if(t1 && t2){
        numBlack-=2
        tempBlack+=2
      }else if((t1 || t2)){
        //remove from bag
        numWhite--
        numBlack--
        //add to outside bag
        tempWhite++
        tempBlack++
      }else{
        //remove 2 from outside bag 
        numWhite-=2
      }
    }
    //put remains back in bag
    numWhite = tempWhite
    numBlack = tempBlack
  
    data.push(createData())
  
  }
  console.log("\nsimulation complete")
  console.table(data)
}

export function pickRandom( white : number,black:number){
  // true-> black
  // false-> white
  return Math.random() < (black/(black + white))
}

function createData():generationData{
  return {
    totalOrganisms: (numWhite + numBlack )/2,
    numBlack,
    numWhite,
    blackFrequency: Number((numBlack/(numWhite + numBlack)).toPrecision(4)),
    whiteFrequency: Number((numWhite/(numWhite + numBlack)).toPrecision(4))
  }
}

function doShit() {
  console.log('shit done')
}
