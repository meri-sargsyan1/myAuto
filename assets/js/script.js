const root = document.querySelector('.root');


const items = [
    {
        name:'Легковые ',
        imgSrc:'./assets/img/Rectangle.svg'
    },
    {
        name:'Легковые ',
        imgSrc:'./assets/img/Rectangle.svg'
    },
    {
        name:'Легковые ',
        imgSrc:'./assets/img/Rectangle.svg'
    },
    {
        name:'Легковые ',
        imgSrc:'./assets/img/Rectangle.svg'
    },
];
const div = document.createElement('div');
const div1 = document.createElement('div')
root.appendChild(div);
root.appendChild(div1);
items.forEach((item,index)=>{
    
    const itemDiv = document.createElement('p');
    itemDiv.textContent = item.name;
    const imgElement = document.createElement('img');
    imgElement.src = item.imgSrc;

   div.appendChild(itemDiv);
   div1.appendChild(imgElement);
    
    
})

