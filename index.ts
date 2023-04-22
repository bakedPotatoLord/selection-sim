//@author  @bakedpotatolord

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

function pickRandom( white : number,black:number){
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