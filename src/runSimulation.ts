export class GenerationData{
  numWhite:number
  numBlack:number
  generation:number
  totalOrganisms?:number
  blackFrequency?:number
  whiteFrequency?:number
  constructor(black:number,white:number,generation:number=0){
    this.generation = generation
    this.numWhite = white
    this.numBlack = black
    this.totalOrganisms = (black+white)/2
    this.blackFrequency = Number((this.numBlack/this.totalOrganisms/2).toPrecision(4))
    this.whiteFrequency = Number((this.numWhite/this.totalOrganisms/2).toPrecision(4))
  }
}

export function runSimulation(){
  let gen = 0
  let numWhite = 50
  let numBlack = 50
  let data = [new GenerationData(50,50,gen)]
  let tempWhite:number,tempBlack:number
  while(numWhite >0){

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
    data.push(new GenerationData(numBlack,numWhite,gen))
  }
  return data
}

export function pickRandom( white : number,black:number){
  // true-> black
  // false-> white
  return Math.random() < (black/(black + white))
}

