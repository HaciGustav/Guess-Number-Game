//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================
//! audio 
const soundtrack = document.querySelector(".soundtrack")
const winningAudio = document.querySelector(".winning-audio")
const losingAudio = document.querySelector(".losing-audio")
const clickAudio = document.querySelector(".click-audio")
//! audio button
const audioBtn = document.querySelector("#audio-btn")
console.log(audioBtn.classList.contains("music"))

audioBtn.addEventListener("click", ()=>{
    
    if(audioBtn.firstElementChild.classList.contains("off")){
        soundtrack.play()
        audioBtn.innerHTML = `<i class="fa-solid fa-volume-high text-white music on"></i>`
    }else{
        soundtrack.pause()
        audioBtn.innerHTML = `<i class="fa-solid fa-volume-xmark text-white music off"></i>`
    }
   

})
//? 1-100 arasinda bir sayi tut
const randomNumber =()=>{ return Math.round(Math.random() * 100 + 1)}
let scrtNumber = randomNumber()
console.log(scrtNumber)

let score = 10
let topScore = 0

document.querySelector(".check-btn").addEventListener("click", ()=>{
    const guessInput = Number(document.querySelector(".guess-input").value)
    const msg = document.querySelector(".msg")
    clickAudio.play()
    if(!guessInput){
    msg.innerText = "Please enter a number!"
    }else if(scrtNumber === guessInput){
        msg.innerHTML = `Congrats You Win! <i class="fa-solid fa-face-grin-hearts fa-2x"></i>`
        winningAudio.play()
        document.body.className = "bg-success" 
        document.querySelector(".check-btn").disabled = true
        if(score > topScore){
            topScore = score;
            document.querySelector(".top-score").textContent = topScore
        }
        document.querySelector(".secret-number").textContent = scrtNumber
    }else{
        score--
        if(score > 0){

        guessInput > scrtNumber 
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE`, document.querySelector(".guess-input").value = "")
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE`, document.querySelector(".guess-input").value = "")
    }else {
        msg.innerText = "You Lost"
        document.body.className = "bg-danger"
        audioBtn.classList.add("bg-danger")
        audioBtn.firstElementChild.classList.add("bg-danger")
        losingAudio.play()
        document.querySelector(".check-btn").disabled = true
        
    }
    document.querySelector(".score").textContent = score
    }
})
    document.querySelector(".again-btn").addEventListener("click", ()=> {
    
    score = 10
    document.querySelector(".score").textContent = score
    scrtNumber = randomNumber()
    console.log(scrtNumber)
    document.querySelector(".check-btn").disabled = false
    document.querySelector(".secret-number").textContent = "?"
    document.body.classList.remove("bg-danger", "bg-success")
    document.querySelector(".guess-input").value = ""
    document.querySelector(".msg").textContent = "Starting.."
})
document.querySelector(".guess-input").addEventListener("keydown", (e)=>{
    if(e.code === "Enter"){
        document.querySelector(".check-btn").click()
}
})






//? Check btn basildiginda kontrolleri yap






