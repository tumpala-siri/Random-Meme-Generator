let img=document.getElementById("img")
let btn = document.getElementById("but")
async function randomMemeGenerator(){
    let res=await fetch("https://meme-api.com/gimme")
    let json = await res.json()
    let url = json.url
    img.src=url
}
randomMemeGenerator()
btn.addEventListener("click",randomMemeGenerator)
