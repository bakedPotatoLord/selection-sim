import {ch, ctx, cw} from './index.js'

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
  ctx.ellipse(400,360,10,10,0,0,TAU)
  ctx.fill()
  ctx.beginPath()
  ctx.ellipse(435,335,10,10,0,0,TAU)
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
  
  ctx.fillText((deadWhite/2).toString(),420,366)
  ctx.fillText((deadWhite/2).toString(),452,341)
  
}

export function nextButton(){
  ctx.fillStyle = 'green'
  ctx.fillRect(30,340,100,30)
}