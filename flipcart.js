
let mobilesdata=[
    {
        id:1,
        name:"Iphone",
        Image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/2/w/-original-imahggesubmyd2ht.jpeg?q=70",
        desc:"Apple iPhone 16 Pro (White Titanium, 256 GB",
        price:119000
   },
    {
        id:2,
        name:"Samsung",
        Image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/r/z/-original-imahgfmysgtszenh.jpeg?q=70",
        desc:"Samsung Galaxy S24 Ultra 5G (Titanium Black, 256 GB)  (12 GB RAM)",
        price:99999
   },
    {
        id:3,
        name:"Iqoo",
        Image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/l/0/-original-imahgmv5ut54783c.jpeg?q=70",
        desc:"IQOO 15 5G (Legend, 256 GB)  (12 GB RAM)",
        price:79000
   },
    {
        id:4,
        name:"redmi",
        Image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/j/s/-original-imahg2z9zcwf6yyy.jpeg?q=70",
        desc:"REDMI Note 14 SE 5G (Mystique White, 128 GB)  (6 GB RAM)",
        price:14999
   },
    {
        id:5,
        name:"vivo",
        Image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/v/z/-original-imahggewnzy24qma.jpeg?q=70",
        desc:"vivo X Fold5 5G (Grey, 512 GB)  (16 GB RAM)",
        price:100000
   },
    {
        id:6,
        name:"oppo",
        Image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/l/t/-original-imahfbycas2qckgk.jpeg?q=70",
        desc:"OPPO Reno14 5G (Forest Green, 256 GB)  (12 GB RAM)",
        price:44000
   },
    {
        id:7,
        name:"oneplus",
        Image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/x/f/-original-imahgt9jb9beqaaf.jpeg?q=70",
        desc:"OnePlus 15 5G (Sand Storm, 256 GB)  (12 GB RAM)",
        price:79000
   },
    {
        id:8,
        name:"moto",
        Image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/7/t/-original-imahgqnz4hjyk6fh.jpeg?q=70",
        desc:"MOTOROLA Edge 60 Fusion 5G (PANTONE Amazonite, 256 GB)  (8 GB RAM)",
        price:22999
   }
];
let div = document.getElementById('container');
let cart=[]

function data(products){
    div.innerHTML="";
    let a=products.map((item)=>{
        return `
         <div class="cards"> 
             <h2>${item.name}</h2>
             <img src="${item.Image}" class="img"/>
             <p>${item.desc}</p>
             <mark>${item.price}</mark><br><br>
             <button onclick="add(${item.id})">Add Products</button>
         </div>
        ` 
    })
    div.innerHTML=a.join("");
}
data(mobilesdata);

//filter
function filterData(){
    let search=document.getElementById('input').value.toLowerCase();
    let tempData=mobilesdata.filter(item => item.name.toLowerCase().includes(search));
    data(tempData)
}
function add(product){
    let temp=mobilesdata.find(item=>item.id == product);
    alert(`${temp.name} is added`)
    cart.push(temp)
    totalBill();
    document.getElementById('cart').innerHTML=cart.length;
}
function totalBill(){
    let sum=cart.reduce((acc,value)=>acc+value.price,0);
    document.getElementById('totalbill').innerHTML=sum;
}



