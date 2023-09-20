
// for crousel


const crouselImage=[
    {id:1,image:"https://i.pinimg.com/736x/88/38/27/8838274c4a1a5d4e796f084d6fbf07c1--chocolate-bars-chocolates.jpg"},
    {id:2,image:"https://i.pinimg.com/736x/e8/7b/92/e87b92cbe62cb3fdd9fceb0b54827e72--chocolate-design-chocolate-brands.jpg"},
    {id:3,image:"https://i.pinimg.com/736x/26/90/6b/26906b3f7c46b8201d3c9af6fb79839d--food-packaging-packaging-design.jpg"},
    {id:4,image:"https://i.pinimg.com/736x/7b/76/2d/7b762d3a7cc906e3c25caca85aacc36f--photo-retouching-food-drawing.jpg"}
]


let crousel=document.querySelector(".crousel");

crouselImage.map((data,index)=>{
  const crousel_slide=document.createElement("div");
  crousel_slide.classList.add("crousel-slide");
  crousel_slide.innerHTML=`<img src=${data.image} alt="image1">`

  crousel.appendChild(crousel_slide)
    
})

const slides = document.querySelectorAll('.crousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    crousel.style.transform = `translateX(${offset}%)`;
}

// Automatically rotate the carousel
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}, 5000);



// for add chocolates

const chocolatescollections=[
    {id:1,name:"Cadbury chocolates",price:50,image:"https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/cadbury-chocolates.jpg"},
    {id:2,name:"Nestle Chocolates",price:20,image:"https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/nestle-chocolates.jpg"},
    {id:3,name:"Amul Chocolates",price:80,image:"https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/amul-chocolates.jpg"},
    {id:4,name:"Parle Chocolates",price:30,image:"https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/parle-chocolates.jpg"},
    {id:5,name:"Mars Chocolates",price:40,image:"https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/mars-chocolates.jpg"},
    {id:6,name:"Ferrero Rocher",price:150,image:"https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/ferrero-rocher-chocolates.jpg"},
    {id:7,name:" Lotus Chocolates",price:150,image:"https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/lotus-chocolates.jpg"},
    {id:8,name:"Campco Chocolates",price:70,image:"https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/campco-chocolates.jpg"},
    {id:9,name:"Hershey Chocolates",price:10,image:"https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/hershey-chocolates.jpg"},
    {id:10,name:"Pacari Chocolates",price:120,image:"https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/cadbury-chocolates.jpg"}
]
const chocolate_list=document.querySelector(".chocolate-list")

chocolatescollections.map((data)=>{
    const chocolate_item= document.createElement("div")
    chocolate_item.classList.add("chocolate-item")
    chocolate_item.innerHTML=`<img src=${data.image} alt="chocolate" class="choco-img">
           <div class="chocolate-name">${data.name}</div>
           <div class="chocolate-price">Price : &#8360; ${data.price}</div>
            <button class="add-chocolate-button" data-price=${data.price}>Add To Bunddle</button>`    
         chocolate_list.appendChild(chocolate_item)
})





const addChocolateButtons = document.querySelectorAll('.add-chocolate-button');
const selectedChocolatesList = document.getElementById('selected-chocolates-list');
const totalPriceSpan = document.getElementById('total-price');

let selectedChocolates = [];

addChocolateButtons.forEach((button) => {
    button.addEventListener('click', addChocolate);
});
function addChocolate(event) {
    const button = event.target;
    const chocolateItem = button.parentElement;
    const chocolateName = chocolateItem.querySelector('.chocolate-name').textContent;
    const chocolatePrice = parseFloat(button.getAttribute('data-price'));
    const chocolateImage= chocolateItem.querySelector('.choco-img').src;
    console.log(chocolateImage)

    const isAlreadySelected = selectedChocolates.some((chocolate) => chocolate.name === chocolateName);

    if (selectedChocolates.length >= 8) {
        alert("You can select a maximum of 8 chocolates.");
        return;
    }

    if (!isAlreadySelected) {
        selectedChocolates.push({ name: chocolateName, price: chocolatePrice, image:chocolateImage });
        updateSelectedChocolatesList();
        updateTotalPrice();
    } else {
        alert("This chocolate is already added to the pack.");
    }
}

function removeChocolate(chocolateName) {
    selectedChocolates = selectedChocolates.filter((chocolate) => chocolate.name !== chocolateName);
    updateSelectedChocolatesList();
    updateTotalPrice();
}

function updateTotalPrice() {
    let totalPrice = 0;
    selectedChocolates.forEach((chocolate) => {
        totalPrice += chocolate.price;
    });

    totalPriceSpan.textContent = totalPrice.toFixed(2);
}

function updateSelectedChocolatesList() {
    selectedChocolatesList.innerHTML = "";
    selectedChocolates.forEach((chocolate) => {
        const listItem = document.createElement('li');
        listItem.classList.add("listItem")
        listItem.innerHTML = `<img src=${chocolate.image} alt="">
                        <div>${chocolate.name}</div>
                        <div>Price : &#8360; ${chocolate.price.toFixed(2)}</div>
        `

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeChocolate(chocolate.name));

        listItem.appendChild(removeButton);
        selectedChocolatesList.appendChild(listItem);
    });
}


