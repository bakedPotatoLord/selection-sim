//@author  @bakedpotatolord
import './style.css'
import {runSimulation, GenerationData} from './runSimulation.js'
import {drawBackground, drawOverlayText,drawMarbles} from './drawing.js'

const c = document.querySelector('canvas')
export const ctx = c.getContext('2d')
const tArea = document.querySelector('textarea')
const showData = <HTMLButtonElement>document.querySelector("#showData")

tArea.hidden = true

export const cw = c.width = 600
export const ch = c.height = 400

let data: GenerationData[] =[]
let generation = 0

function mainLoop(){
  requestAnimationFrame(mainLoop)

  drawBackground()
  drawOverlayText(generation)
  drawMarbles()

}

window.onload = ()=>{
  data = runSimulation()

  mainLoop()
}

showData.onclick = ()=>{
  tArea.hidden = false
  tArea.value = runSimulation()
  .map(el=>JSON.stringify(el))
  .join(',\n')
}
