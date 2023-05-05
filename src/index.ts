//@author  @bakedpotatolord
import './style.css'
import { GenerationData, pickRandom} from './runSimulation.js'
import {drawBackground, drawOverlayText,drawMarbles, nextButton, graph, ffwdButton} from './drawing.js'

const c = document.querySelector('canvas')
export const ctx = c.getContext('2d')
const showData = <HTMLButtonElement>document.querySelector("#showData")

export const cw = c.width = 600
export const ch = c.height = 400

let generation = 0

let bagWhite = 50, bagBlack = 50,
aliveWhite = 0, aliveBlack = 0,
deadWhite = 0
let data: GenerationData[] =[new GenerationData(bagBlack,bagWhite,generation)]

function mainLoop(){
  requestAnimationFrame(mainLoop)

  drawBackground()
  drawOverlayText(generation)
  drawMarbles(
    bagBlack,
    bagWhite,
    aliveBlack,
    aliveWhite,
    deadWhite
  )
  nextButton()
  ffwdButton()
  graph(data)

}

function next(){
  if(bagWhite+bagBlack > 0){

    let t1 = pickRandom(bagWhite,bagBlack)
    let t2 =  t1? pickRandom(bagWhite,bagBlack-1):pickRandom(bagWhite-1,bagBlack) 

    if(t1 && t2){
      bagBlack-=2
      aliveBlack+=2
    }else if((t1 || t2)){
      //remove from bag
      bagWhite--
      bagBlack--
      //add to outside bag
      aliveWhite++
      aliveBlack++
    }else{
      //remove 2 from outside bag 
      bagWhite-=2
      deadWhite+=2
    }
    return false
  }else{
    bagBlack = aliveBlack
    bagWhite = aliveWhite
    aliveBlack = 0
    aliveWhite = 0
    generation++
    data.push(new GenerationData(bagBlack,bagWhite,generation))
    return true
  }

}

function ffwd(){
  while(!next()){}
}

c.onclick = (e)=>{
  if(e.x > 10 && e.x < 90 && e.y > 340 && e.y < 370){
    next()
  }
  if(e.x >100 && e.x <180 && e.y >340 && e.y < 370){
    ffwd()

  }
}


window.onload = ()=>{

  mainLoop()
}

