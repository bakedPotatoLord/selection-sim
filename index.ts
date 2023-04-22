//@author  @bakedpotatolord

let numWhite = 50
let numBlack = 50
let gen = 0

let tempWhite
let tempBlack

while(numWhite >0){
  gen++
  log()

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
}
log()
console.log("\nsimulation complete")

function pickRandom( white : number,black:number){
  // true-> black
  // false-> white
  const total = black + white
  return   Math.random()  < (black/total)
}

function log(){
  const total = numWhite + numBlack
  console.log("\ngeneration",gen)
  console.log("amount of individuals",total)
  console.log("total black",numBlack)
  console.log("total white",numWhite)
  console.log("black frequency",numBlack/total)
  console.log("white frequency",numWhite/total)
}