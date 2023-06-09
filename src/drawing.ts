import {ch, ctx, cw} from './index.js'
import { GenerationData } from './runSimulation.js'

export const TAU = Math.PI * 2
export function drawBackground(){
  ctx.fillStyle = 'beige'
  ctx.fillRect(0,0,cw,ch)
  ctx.fillStyle = 'rgb(50,50,50)'
  ctx.fillRect(0,250,cw,150)


  ctx.fillStyle = '#a3895d'

  ctx.fillRect(100,100,120,220)

  ctx.fillStyle = '#826d49'
  ctx.beginPath()
  ctx.moveTo(220,100)
  ctx.lineTo(220,320)
  ctx.lineTo(260,300)
  ctx.lineTo(260,80)
  ctx.fill()

  ctx.fillStyle = '#6b5733'
  ctx.beginPath()
  ctx.moveTo(100,100)
  ctx.lineTo(220,100)
  ctx.lineTo(260,80)
  ctx.lineTo(160,80)
  ctx.fill()

  ctx.fillStyle= 'lightgrey'

  ctx.beginPath()
  ctx.moveTo(200,380)
  ctx.lineTo(320,380)
  ctx.lineTo(400,320)
  ctx.lineTo(280,320)
  ctx.fill()
  ctx.beginPath()
  ctx.moveTo(340,380)
  ctx.lineTo(460,380)
  ctx.lineTo(540,320)
  ctx.lineTo(420,320)
  ctx.fill()
}

export function drawOverlayText(generation:number){
  ctx.font = '20px serif'
  ctx.fillStyle = 'black'
  ctx.fillText("generation: "+generation, 10,20)
}

export function drawMarbles(
  bagBlack:number,
  bagWhite:number,
  aliveBlack:number,
  aliveWhite:number,

  deadWhite:number
  ){
  ctx.fillStyle = 'white'
  ctx.beginPath()
  ctx.ellipse(120,200,10,10,0,0,TAU)
  ctx.fill()
  ctx.beginPath()
  ctx.ellipse(260,360,10,10,0,0,TAU)
  ctx.fill()
  ctx.beginPath()
  ctx.ellipse(417.5,347.5,10,10,0,0,TAU)
  ctx.fill()
  ctx.font = '18px serif'
  ctx.fillStyle = 'black'
  ctx.beginPath()
  ctx.ellipse(120,240,10,10,0,0,TAU)
  ctx.fill()
  ctx.beginPath()
  ctx.ellipse(295,335,10,10,0,0,TAU)
  ctx.fill()

  ctx.fillText(bagBlack.toString(),140,245)
  ctx.fillText(bagWhite.toString(),140,205)
  
  ctx.fillText(aliveWhite.toString(),280,366)
  ctx.fillText(aliveBlack.toString(),312,341)
  
  ctx.fillText((deadWhite).toString(),434,353.5)
}

export function nextButton(){
  ctx.fillStyle = 'green'
  ctx.fillRect(10,340,80,30)
  ctx.fillStyle = 'white'
  ctx.font = '30px serif'
  ctx.fillText("Next",20,364)
}

export function ffwdButton(){
  ctx.fillStyle = 'green'
  ctx.fillRect(100,340,80,30)
  ctx.fillStyle = 'white'
  ctx.font = '30px serif'
  ctx.fillText("Ffwd",110,364)
}

export function graph(data:GenerationData[]){
  ctx.fillStyle = 'lightGrey'
  ctx.font = '14px serif'
  ctx.fillRect(300,5,250,240)
  ctx.fillStyle = 'black'
  ctx.fillText("Generation",310,20)
  ctx.fillText("white",380,20)
  ctx.fillText("black",420,20)
  ctx.fillText("wf",460,20)
  ctx.fillText("bf",505,20)
  for(let i=0; i<data.length; i++){
    ctx.fillText(data[i].generation.toString(),310,40+i*20)
    ctx.fillText(data[i].numWhite.toString(),380,40+i*20)
    ctx.fillText(data[i].numBlack.toString(),420,40+i*20)
    ctx.fillText(data[i].whiteFrequency.toPrecision(4),460,40+i*20)
    ctx.fillText(data[i].blackFrequency.toPrecision(4),505,40+i*20)
    
  }
}