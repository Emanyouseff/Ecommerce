const checkData =document.querySelectorAll('.check-Data')
checkData.forEach((e,i)=> {
    
e.addEventListener('click',function(){
    if(i===1){
    }
})
}
    
)


function setupEventListeners() {
    const checkDataElements = document.querySelectorAll('.check-Data');
    const inputs = document.querySelectorAll('.selectWidth');
    const placeholders = {
        'cardCheckbox': [
            'Name On Card',
            'Card Number',
            'Expiry Date',
            'CVC'
        ],
        'paypalCheckbox': [
            'Email Address',
            'Transaction ID',
            'Payment Date',
            'Amount'
        ]
    };

    checkDataElements.forEach(item => {
        item.addEventListener('click', function() {
            const checkbox = this.querySelector('input[type="checkbox"]');
            const id = checkbox.id; 
            if (checkbox.id) {
                const newPlaceholders = placeholders[id] || [];
                inputs.forEach((input, index) => {
                    if (newPlaceholders[index]) {
                        input.placeholder = newPlaceholders[index];
                    }
                });
            }
        });
    });
}

setupEventListeners();




   const removeData =document.querySelector('.finshed')
   const suptotal1=document.querySelector('.cash','.charge','.shippingCash')
   const suptotal2=document.querySelector('.charge')
   const suptotal=document.querySelector('.shippingCash')
   removeData.addEventListener('click',remove)
   function remove(){
    const finish=document.querySelector('.dinamicAppear')
    localStorage.removeItem('cartdata'),
    localStorage.removeItem('totalprice')
 finish.innerHTML=''
 suptotal1.innerHTML='$0'
 suptotal2.innerHTML='$0'
 suptotal.innerHTML='$0'
}