const selectoption = document.querySelector(".product-filter0");
const selectoption1 = document.querySelector(".product-filter1");
const selectoption2 = document.querySelector(".product-filter2");
const selectoption3 = document.querySelector(".product-filter3 ");
const card_data = [
  {
    productImage: "../images/product-3.png",
    name: "Denim Skirt",
    colorsOptions: {
      colorOne: "blue",
      colorTwo: "white",
    },
    chan:{
  oneimg:"../images/product-1.png",
  twoimg:"../images/product-5.png"
    },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 80.0, 
    current :1,
    id:0,
    nameColor: "Black",
    size :'small'
  },
  {
    productImage: "../images/product-1.png",
    name: "Daisy Dress",
    color: "purple",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 90.0, current :1, 
    id :1,
    nameColor: "Purple",
        size :'large'
  },
  {
    productImage: "../images/product-4.png",
    name: "Woll Cardigan",
    colorsOptions: {
      colorOne: "black",
      colorTwo: "orange",
      colorThree: "purple",
    },chan:{
      oneimg:"../images/product-3.png",
      twoimg:"../images/product-5.png",
      threeimg:"../images/product-6.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",

    },
    previousPrice: 139.9,
    currentPrice: 100.0, current :1,
    id:2,
    nameColor: "Grey", 
        size :'small',
  },
  {
    productImage: "../images/product-4.png",
    name: "Over jacket",
    color: "black",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 90.0, current :1,
    id:3,
    nameColor: "Grey",
     size :'small'
  },
  {
    productImage: "../images/product-5.png",
    name: "Denim Skirt",
    color: "purple",
    colorsOptions: {
      colorOne: "black",
      colorTwo: "Purple",
    },
    chan:{
      oneimg:"../images/product-5.png",
      twoimg:"../images/product-3.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 60.0, current :1,
    id:4,
    nameColor: "Blue",
     size :'small'
  },
  {
    productImage: "../images/product-1.png",
    name: "Daisy Dress",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    colorsOptions: {
      colorOne: "white",
      colorTwo: "black",
    },
    chan:{
      oneimg:"../images/product-6.png",
      twoimg:"../images/product-5.png"
        },
    previousPrice: 139.9,
    currentPrice: 60.0, current :1,
    id:5,
    nameColor: "Purple",
     size :'large'
  },
  {
    productImage: "../images/product-2.png",
    name: "Woll Cardigan",
    colorsOptions: {
      colorOne: "black",
      colorTwo: "orange",
    },
    chan:{
      oneimg:"../images/product-2.png",
      twoimg:"../images/product-1.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 85.0, current :1,
    id:6,
    nameColor: "Grey",
     size :'extra large'
  },
  {
    productImage: "../images/product-3.png",
    name: "Over jacket",
    color: "black",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 78.0, current :1,
    id:7,
    nameColor: "Grey",
    colorsOptions: {
      colorOne: "white",
      colorTwo: "black",
    },
    chan:{
      oneimg:"../images/product-3.png",
      twoimg:"../images/product-1.png"
        },
         size :'small'
  },

  {
    productImage: "../images/product-6.png",
    name: "Woll Cardigan",
    colorsOptions: {
      colorOne: "black",
      colorTwo: "orange",
      colorThree: "purple",
    },
    chan:{
      oneimg:"../images/product-3.png",
      twoimg:"../images/product-5.png",
      threeimg:"../images/product-1.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 86.0, current :1,
    id:8,
    nameColor: "Grey",
     size :'small'
  },
  {
    productImage: "../images/product-4.png",
    name: "Over jacket",
    color: "black",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:9,
    nameColor: "Grey",
     size :'small'
  },
  {
    productImage: "../images/product-5.png",
    name: "Denim Skirt",
    colorsOptions: {
      colorOne: "blue",
      colorTwo: "white",
    },
    chan:{
      oneimg:"../images/product-1.png",
      twoimg:"../images/product-5.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:10,
    nameColor: "Blue",
     size :'small'
  },
  
  {
    productImage: "../images/product-2.png",
    name: "Daisy Dress",
    color: "purple",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:11,
    nameColor: "Purple",
     size :'large'
  },
  {
    productImage: "../images/product-3.png",
    name: "Denim Skirt",
    colorsOptions: {
      colorOne: "blue",
      colorTwo: "white",
    },
    chan:{
      oneimg:"../images/product-3.png",
      twoimg:"../images/product-1.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 90.0, current :1,
    id:12,
    nameColor: "Blue",
     size :'large'
  },
  {
    productImage: "../images/product-1.png",
    name: "Woll Cardigan",
    colorsOptions: {
      colorOne: "black",
      colorTwo: "orange",
    },
    chan:{
      oneimg:"../images/product-3.png",
      twoimg:"../images/product-4.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:13,
    nameColor: "Grey",
         size :'large'
  },
  {
    productImage: "../images/product-4.png",
    name: "Over jacket",
    color: "black",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 100.0, current :1,
    id:14,
    nameColor: "Grey",
         size :'large'
  },
  {
    productImage: "../images/product-5.png",
    name: "Denim Skirt",
    colorsOptions: {
      colorOne: "blue",
      colorTwo: "white",
    },
    chan:{
      oneimg:"../images/product-1.png",
      twoimg:"../images/product-5.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:15,
    nameColor: "Blue",
         size :'extra large'
  },
  {
    productImage: "../images/product-6.png",
    name: "Daisy Dress",
    color: "purple",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:16,
    nameColor: "Purple",
             size :'extra large'
  },
  {
    productImage: "../images/product-3.png",
    name: "Woll Cardigan",
    colorsOptions: {
      colorOne: "black",
      colorTwo: "orange",
    },
    chan:{
      oneimg:"../images/product-3.png",
      twoimg:"../images/product-2.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 95.0, current :1,
    id:17,
    nameColor: "Grey",
             size :'extra large'
  },
  {
    productImage: "../images/product-6.png",
    name: "Over jacket",
    color: "black",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:18,
    nameColor: "Grey",
             size :'extra large'
  },
  {
    productImage: "../images/product-5.png",
    name: "Denim Skirt",
    colorsOptions: {
      colorOne: "blue",
      colorTwo: "white",
    },
    chan:{
      oneimg:"../images/product-5.png",
      twoimg:"../images/product-6.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 75.0, current :1,
    id:19,
    nameColor: "Blue",
             size :'large'
  },
  {
    productImage: "../images/product-2.png",
    name: "Daisy Dress",
    color: "purple",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 77.0, current :1,
    id:20,
    nameColor: "Purple",
      size :'large'
  },
  {
    productImage: "../images/product-5.png",
    name: "Woll Cardigan",
    colorsOptions: {
      colorOne: "black",
      colorTwo: "orange",
    },
    chan:{
      oneimg:"../images/product-3.png",
      twoimg:"../images/product-4.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 95.0, current :1,
    id:21,
    nameColor: "Grey",
      size :'large'
  },
  {
    productImage: "../images/product-6.png",
    name: "Over jacket",
    color: "black",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:22,
    nameColor: "Grey",
      size :'large'
  },
  {
    productImage: "../images/product-4.png",
    name: "Denim Skirt",
    colorsOptions: {
      colorOne: "blue",
      colorTwo: "white",
    },
    chan:{
      oneimg:"../images/product-1.png",
      twoimg:"../images/product-6.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 78.0, current :1,
    id:23,
    nameColor: "Blue",
      size :'large'
  },
  {
    productImage: "../images/product-3.png",
    name: "Daisy Dress",
    color: "purple",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 110.0, current :1,
    id:24,
    nameColor: "Purple",
    size:'small'

  },
  {
    productImage: "../images/product-6.png",
    name: "Woll Cardigan",
    colorsOptions: {
      colorOne: "black",
      colorTwo: "orange",
    },chan:{
      oneimg:"../images/product-3.png",
      twoimg:"../images/product-6.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:25,
    nameColor: "Grey",
      size:'small'
  },
  {
    productImage: "../images/product-3.png",
    name: "Over jacket",
    color: "black",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:26,
    nameColor: "Grey",
      size:'small'
  },
  {
    productImage: "../images/product-6.png",
    name: "Denim Skirt",
    colorsOptions: {
      colorOne: "blue",
      colorTwo: "white",
    },
    chan:{
      oneimg:"../images/product-1.png",
      twoimg:"../images/product-6.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 79.0, current :1,
    id:27,
    nameColor: "Blue",
      size:'small'
  },
  {
    productImage: "../images/product-2.png",
    name: "Daisy Dress",
    color: "purple",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 80.0, current :1,
    id:28,
    nameColor: "Purple",
      size:'small'
  },
  {
    productImage: "../images/product-3.png",
    name: "Woll Cardigan",
    colorsOptions: {
      colorOne: "black",
      colorTwo: "orange",
    },chan:{
      oneimg:"../images/product-3.png",
      twoimg:"../images/product-4.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 110.0, current :1,
    id:29,
    nameColor: "Grey",
      size:'small'
  },
  {
    productImage: "../images/product-4.png",
    name: "Over jacket",
    color: "black",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 115.0, current :1,
    id:30,
    nameColor: "Grey",
      size:'large'
  },
  {
    productImage: "../images/product-1.png",
    name: "Denim Skirt",
    colorsOptions: {
      colorOne: "blue",
      colorTwo: "white",
    },
    chan:{
      oneimg:"../images/product-1.png",
      twoimg:"../images/product-6.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 105.0, current :1,
    id:31,
    nameColor: "Blue",
      size:'large'
  },
  {
    productImage: "../images/product-2.png",
    name: "Daisy Dress",
    color: "purple",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 100.0, current :1,
    id:32,
    nameColor: "Purple",
      size:'large'
  },
  {
    productImage: "../images/product-3.png",
    name: "Woll Cardigan",
    colorsOptions: {
      colorOne: "black",
      colorTwo: "orange",
    },chan:{
      oneimg:"../images/product-3.png",
      twoimg:"../images/product-6.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 76.0, current :1,
    id:33,
    nameColor: "Grey",
      size:'large'
  },
  {
    productImage: "../images/product-4.png",
    name: "Over jacket",
    color: "black",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 78.0, current :1,
    id:34,
    nameColor: "Grey",
      size:'large'
  },
  {
    productImage: "../images/product-1.png",
    name: "Denim Skirt",
    colorsOptions: {
      colorOne: "blue",
      colorTwo: "white",
    },
    chan:{
      oneimg:"../images/product-1.png",
      twoimg:"../images/product-6.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 80.0, current :1,
    id:35,
    nameColor: "Blue",
      size:'large'
  },
  {
    productImage: "../images/product-2.png",
    name: "Daisy Dress",
    color: "purple",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 79.0, current :1,
    id:36,
    nameColor: "Purple",
     size:'extra large'
  },
  {
    productImage: "../images/product-3.png",
    name: "Woll Cardigan",
    colorsOptions: {
      colorOne: "black",
      colorTwo: "orange",
    },chan:{
      oneimg:"../images/product-3.png",
      twoimg:"../images/product-1.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:37,
    nameColor: "Grey",
         size:'extra large'
  },
  {
    productImage: "../images/product-4.png",
    name: "Over jacket",
    color: "black",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 75.0, current :1,
    id:38,
    nameColor: "Grey",
         size:'extra large'
  },
  {
    productImage: "../images/product-6.png",
    name: "Denim Skirt",
    colorsOptions: {
      colorOne: "blue",
      colorTwo: "white",
    },chan:{
      oneimg:"../images/product-1.png",
      twoimg:"../images/product-5.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:39,
    nameColor: "Blue",
         size:'extra large'
  },
  {
    productImage: "../images/product-2.png",
    name: "Daisy Dress",
    color: "purple",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:40,
    nameColor: "Purple",
         size:'extra large'
  },
  {
    productImage: "../images/product-1.png",
    name: "Woll Cardigan",
    colorsOptions: {
      colorOne: "black",
      colorTwo: "orange",
    },chan:{
      oneimg:"../images/product-3.png",
      twoimg:"../images/product-1.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:41,
    nameColor: "Grey",
         size:'extra large'
  },
  {
    productImage: "../images/product-4.png",
    name: "Over jacket",
    color: "black",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 80.0, current :1,
    id:42,
    nameColor: "Grey",
         size:'large'
  },
  {
    productImage: "../images/product-3.png",
    name: "Denim Skirt",
    colorsOptions: {
      colorOne: "blue",
      colorTwo: "white",
    },chan:{
      oneimg:"../images/product-1.png",
      twoimg:"../images/product-5.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:43,
    nameColor: "Blue",
       size:'large'
  },
  {
    productImage: "../images/product-1.png",
    name: "Daisy Dress",
    color: "purple",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:44,
    nameColor: "Purple",
       size:'large'
  },
  {
    productImage: "../images/product-6.png",
    name: "Woll Cardigan",
    colorsOptions: {
      colorOne: "black",
      colorTwo: "orange",
    },chan:{
      oneimg:"../images/product-3.png",
      twoimg:"../images/product-5.png"
        },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 70.0, current :1,
    id:45,
    nameColor: "Grey",
       size:'large'
  },
  {
    productImage: "../images/product-3.png",
    name: "Over jacket",
    color: "black",
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 94.0, current :1,
    id:46,
    nameColor: "Grey",
       size:'small'
  },
  {
    productImage: "../images/product-2.png",
    name: "Denim Skirt",
    colorsOptions: {
      colorOne: "blue",
      colorTwo: "white",
    },
    chan:{
  oneimg:"../images/product-1.png",
  twoimg:"../images/product-5.png"
    },
    ratingNumber: 10,
    stars: {
      many: 5,
      starsImg: "../images/rating-star.png",
    },
    previousPrice: 139.9,
    currentPrice: 98.0, current :1,
    id:47,
    nameColor: "Black",
    size :'small'
  },
];
 
var array = [];
let arraylenght = 0;
let cardsize = 16;
let startindex = 1;
let endindex = 0;
let current = 1;
let maxindex = 0;
const allbutton = document.querySelector(".move-slides");
let button1 = document.createElement("button");
let button2 = document.createElement("button");
let icon = document.createElement("i");
icon.className = "ri-arrow-left-line";
let icon1 = document.createElement("i");
icon1.className = "ri-arrow-right-line";
function loadcalcolatiuon() {
  array = card_data;
  arraylenght = array.length;
  maxindex = array.length / cardsize;
  if (array.length % cardsize > 0) {
    maxindex++;
  }
}

function pagination() {
  loadcalcolatiuon();
  button1.append(icon);
  button1.addEventListener('click',prev)
  allbutton.append(button1);
  changeNamber()
  button2.append(icon1);
  button2.addEventListener('click',next)
  allbutton.append(button2);
  activebutton();
}
pagination()
 function changeNamber(){
  for (var i = 1; i <= maxindex; i++) {
    const button3 = document.createElement("button");
    button3.innerHTML = i;
    button3.classList.add('moving') 
    allbutton.append(button3);
   
  }
  const clickBtn=allbutton.querySelectorAll('.moving')
  clickBtn.forEach((e,i)=>
    e.addEventListener("click", () => { 
      activebutton() 
        indexpagenation(i+1)
    })
  )
 }

function activebutton() {
  startindex = (current - 1) * cardsize + 1;
  endindex = startindex + cardsize - 1;
  if (endindex > arraylenght) {
    endindex = arraylenght;
  }
  const buttons = document.querySelectorAll(".move-slides button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  const activeButton = document.querySelector(
    `.move-slides button:nth-child(${current + 1})`
  );
  if (activeButton) {
    activeButton.classList.add("active");
  }
  filterData()
}


function filterData(){
  const cards = document.querySelector(".cards");
  const selectoptionoption = document.querySelectorAll(".details-selest");
  selectoptionoption.forEach((e,i)=> {
   const fitterDataI= e.querySelectorAll(`.product-filter${i} option`);

let anything; 
let validData;
 const endFilter= fitterDataI.forEach(e=>{
  // console.dir(e);
    if(e.selected){
    validData =e.value;
    
  }

  const filterall= card_data.filter(e=>
     e.name=== validData||e.size===validData ||
     e. nameColor===validData ||e.currentPrice<=validData
    ) 
     anything=filterall    
  if(validData==='allName'){
    anything=card_data
  }

     let html = "";
     var start = startindex - 1;
     var end = Math.min(endindex,anything.length);
     for (var i =start; i <end; i++) {
      const carddata = anything[i];
      const coloroption=carddata.colorsOptions||{};
      const coloroptionone=coloroption.colorOne||'';
      const coloroptiontwo=coloroption.colorTwo||'';
      const coloroptionthree=coloroption.colorThree||'';
    const nooption= (!carddata.colorsOptions?carddata.color:'')
      html += ` <div class="card trans" data-name="${carddata.name}" data-size="${carddata.size}">
            <img class="img-product tran" src="${carddata.productImage}" alt="" />
            <div class="color">
            ${nooption===carddata.color ?`<span class="changimg" id="${nooption}"></span>`:'' }
             ${coloroptionone?`<span
                class="changimg"
                id="${coloroptionone}"
                data-image-src="${carddata.productImage}"
              ></span>`:""}
               ${coloroptiontwo?`<span
                class="changimg"
                id="${coloroptiontwo}"
                data-image-src="${carddata.chan ? carddata.chan.twoimg : ''}"
              ></span>`:""}
                ${coloroptionthree?`<span
                class="changimg"
                id="${coloroptionthree}"
                data-image-src="${carddata.chan.threeimg}"
              ></span>`:""}
            </div>
            <div class="space">
              <h2>${carddata.name}</h2>
              <p>${carddata.nameColor}</p>
              <div class="likeProduct">
                <div class="starlike "></div>
              <div class="starlike "></div>
              <div class="starlike"></div>
              <div class="starlike"></div>
              <div class="starlike "></div>
              <!-- </div> -->
              <i class="ri-thumb-up-line up" data-index=${carddata.id+1}></i>
              <i class="ri-thumb-down-line down" data-index=${carddata.id}></i>
             </div>
             
              <div class="stars">
                <p class="price1">$${carddata.previousPrice}</p>
                <p class='currentPrice'>$${carddata.currentPrice}.00</p>
              </div>
              <button class='view' data-id=${carddata.id}>buy now</button>
            </div>
          </div>`;
      cards.innerHTML = html;
      newbage()
    }

    
  })})};

selectoption.addEventListener("change", filterData);
selectoption1.addEventListener("change", filterData);
selectoption2.addEventListener("change", filterData);
selectoption3.addEventListener("change", filterData);
function indexpagenation(r){
 current=parseInt(r)
runAllFun()
}
function prev(){
  if(current >1){
    current--;
   runAllFun()
  }
}

function next(){
  if(current < maxindex){
    current++;
 runAllFun()
  }
}

function runAllFun(){
  activebutton()
  newbage();
  changImg()
  starData()
}
const transformcarddata =JSON.stringify(card_data)
localStorage.setItem("allobjectdata",transformcarddata)

function newbage(){document.querySelectorAll('.view').forEach(button => {
  button.addEventListener('click', function() {
    // الحصول على الـ id من الزر الذي تم النقر عليه
    const productId = this.getAttribute('data-id');

    // توجيه المستخدم إلى صفحة التفاصيل مع تمرير الـ id كمعامل في عنوان URL
    window.location.href = `product.html?id=${productId}`;
  });
 
})}
newbage()

 function starData(){
  const productviwe = document.querySelectorAll(".card"); 
  productviwe.forEach((card) => {
    console.log(card);
    let currentStar = 0;
     const stars = card.querySelectorAll(".starlike");
      const updateStars = (increment) => {
        currentStar = Math.max(0, Math.min(currentStar + increment, 50)); 
        stars.forEach((star, index) => { 
         let fillPercentage = Math.max(0, currentStar - index * 10); 
 
         star.style.background = `linear-gradient(to right, #ffcc00 ${fillPercentage}0%, transparent 10%)`; }); };
 
          card.querySelector(`.up`).addEventListener('click', () => updateStars(5)); 
 
          card.querySelector(`.down`).addEventListener('click', () => updateStars(-5)); 
 
 card.addEventListener('mouseleave', () => { currentStar = 0;  }); }); 
 }
 starData()