//@author  @bakedpotatolord



type bead = "white" | "black";

let arr : bead[] =[...Array(50).fill("white"), ...Array(50).fill("black")]
let gen = 0

while(arr.includes("white")){
  gen++

  arr = shuffle(arr)

  let nextGen: bead[] = []

  while(arr.length >1){

    let beads: [bead,bead] = [<bead>arr.shift(),<bead>arr.shift()]

    if(beads[0] == 'black' || beads[1] == 'black'){
      nextGen.push(...beads)
    }
  }

  arr = nextGen
  console.log("\ngeneration",gen)
  console.log("amount of individuals",arr.length/2)
  console.log("total black",arr.filter(x => x == 'black').length)
  console.log("total white",arr.filter(x => x == 'white').length)
  console.log("black frequency",arr.filter(x => x == 'black').length/arr.length)
  console.log("white frequency",arr.filter(x => x == 'white').length/arr.length)
  
}

function shuffle(arr:any[]){
  let currentIndex = arr.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }
  return arr;
}