function Effect ()
{
let subheader =document.querySelector('.subheader');
let child_of_subheader =subheader.children;
for(let i=0;i<child_of_subheader.length;i++){
    child_of_subheader[i].addEventListener("mouseover",(e)=>{
         child_of_subheader[i].classList.add('hovereffect')
     })
     child_of_subheader[i].addEventListener("mouseout",(e)=>{
         child_of_subheader[i].classList.add('hoverout')
     })
    }
}
export default Effect;