

document.addEventListener('DOMContentLoaded',function(){
    const localData=localStorage.getItem('cartdata');
    const useData=JSON.parse(localData)
    function getData( useData){
        let  part2=document.querySelector('.dinamicAppear')
        useData.forEach(element =>  {
            part2.innerHTML +=`
             <div class="pop_product" data-name="${element.id}">
    <div class="deyailsProduct">
      <img src="${element.productImage}" alt="">
    <div class="pop_product_details">
        <h4>${element.name}</h4>
        <p>${element.
            nameColor}</p>
    </div>
    </div>
    <div class="pop-current">
        <p>${element.current}</p>
    </div>
    <div class="pop-price">
      <p>$${element.currentPrice}.00</p>
  </div>
    </div>
            `
        });
    }
    getData(useData)
total()

})
  let active; 
   const check=document.querySelector('.check-Data')
 let indexed;
 function shippingCosts(){
    const circel =document.querySelectorAll('.checkbox-circle');
  
    circel.forEach((e,i)=>{
        e.style.backgroundColor=''  
        if(i===0){
          e.style.backgroundColor='#D9E8B6'  
        }
          e.addEventListener('click',function(){
            circel.forEach(e=>e.style.backgroundColor='')
        this.style.backgroundColor='#D9E8B6'
        active=this;
       if(i===1){
        indexed=i
     total()
       }
    })
 })
 } 
    shippingCosts()
    // console.log(indexed);

    function total(){
        const totalprice=localStorage.getItem('totalprice')
const totalm=JSON.parse(totalprice)
console.log(totalm);
console.log(indexed);
  const suptotal=document.querySelector('.cash')
  const totalCost=document.querySelector('.shippingCash')
  const charge=document.querySelector('.charge')
  console.log(charge);
  if(!indexed){
    console.log(indexed);
      suptotal.innerHTML=`$${totalm}.00`;
      totalCost.innerHTML=`$${totalm}.00`;
  }
  else{
    totalCost.innerHTML=`$${totalm +8}.00`;
  }
  
    }