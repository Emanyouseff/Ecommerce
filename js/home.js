

// Get all inner-div elements
const cards = document.querySelectorAll('.card');

// Loop through each inner-div
cards.forEach(function(card) {
    // Get all span-items within this inner-div
    const spanItems = card.querySelectorAll('.changimg');

    // Add click event listener to each span-item
    spanItems.forEach(function(spanItem) {
        spanItem.addEventListener('click', function() {
            // Find the main-image within this inner-div
            const mainImage = card.querySelector('.img-product');
           
console.log(spanItem);
            // Get the value of data-image-src attribute
            const imageSrc = spanItem.getAttribute('data-image-src');
            // console.log(imageSrc);
            // Change the main image source based on data-image-src
            if (imageSrc) {
              mainImage.style.opacity='0'
              setTimeout(function(){
                  mainImage.src = imageSrc;
                 mainImage.style.opacity='1'
              
              },300)
               
            }
        });
    });
});


const text=document.querySelectorAll('.aria-hidden')
console.log(text);
  const data=document.querySelectorAll('.text')
 text.forEach(function(item){
const arrow=item.querySelector('.arrow');
const content=item.querySelector('.text') 
   arrow.addEventListener('click',function(){ 
    content.style.display=(content.style.display==='none')?'block':'none'
    ;
    data.forEach(function(otherItem) {
      if (otherItem !== content) {
          otherItem.style.display = 'none';
      }
  });

   })
 
 })

const slider =document.querySelectorAll('.slidimg')
// console.log(slider);
const gotoslide=function(slide){
  slider.forEach((v,i)=>{v.style.transform=`translateX(${100*(i-slide)}%)`
}
)  
}
 const dots= document.querySelectorAll('.dot button')
console.log(dots);
  dots.forEach (e=> e.addEventListener('click',function(e){
  if(e.target.classList.contains('btn')){
  const {slid}=e.target.dataset
  gotoslide(slid)
  activatdot(slid)
  console.log(slid);
  }
  }) ) 

 const activatdot=function(slid){
    document.querySelectorAll('.btn').forEach(dot=> dot.classList.remove('btn-active'))
    document.querySelector(`.btn[data-slid="${slid}"]`).classList.add('btn-active')
 }
 activatdot()


 
