const smallImg = document.querySelectorAll(".gallery img");
const fullImg = document.querySelector(".full-image");
const modal = document.querySelector(".modal");
smallImg.forEach(img=>{
    img.addEventListener("click",()=>{
        const fullsize = img.getAttribute("alt")
        const path =`img-folder/full/f${fullsize}.jpg`
        fullImg.src=path
        modal.classList.add("open")
    })
})
modal.addEventListener("click",(e)=>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open")
    }
})
//  Added Close with Esc
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') modal.classList.remove('open');
});