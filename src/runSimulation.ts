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

export function pickRandom( white : number,black:number){
  // true-> black
  // false-> white
  return Math.random() < (black/(black + white))
}

