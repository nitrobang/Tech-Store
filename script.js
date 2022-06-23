let products = {
    data: [
      {
        productName: "SmartPhone A",
        category: "SmartPhone",
        price: "30",
        image: "phonea.jpg",
      },
      {
        productName: "Laptop A",
        category: "Laptop",
        price: "49",
        image: "laptopa.jpg",
      },
      {
        productName: "SmartWatch A",
        category: "Watch",
        price: "99",
        image: "watch1.webp",
      },
      {
        productName: "SmartPhone B",
        category: "SmartPhone",
        price: "29",
        image: "phoneb.png",
      },
      {
        productName: "Tablet A",
        category: "Tablet",
        price: "129",
        image: "tablet1.webp",
      },
      {
        productName: "Laptop B",
        category: "Laptop",
        price: "89",
        image: "laptopb.png",
      },
      {
        productName: "Tablet B",
        category: "Tablet",
        price: "189",
        image: "tablet2.webp",
      },
      {
        productName: "SmartWatch B",
        category: "Watch",
        price: "49",
        image: "watch2.jpg",
      },
      {
        productName: "SmartPhone C",
        category: "SmartPhone",
        price: "99",
        image: "phonec.avif",
      },
    ],
  };
  
  for (let i of products.data) {
  
    let card = document.createElement("div");
  
    card.classList.add("card", i.category, "hide");
  
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
  
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
  
    let container = document.createElement("div");
    container.classList.add("container");
    
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  function filterProduct(value) {
    
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    
    let elements = document.querySelectorAll(".card");
    
    elements.forEach((element) => {
      
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        
        if (element.classList.contains(value)) {
          
          element.classList.remove("hide");
        } else {
          
          element.classList.add("hide");
        }
      }
    });
  }
  
  
  document.getElementById("search").addEventListener("click", () => {
    
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    
    elements.forEach((element, index) => {
     
      if (element.innerText.includes(searchInput.toUpperCase())) {
        
        cards[index].classList.remove("hide");
      } else {
        
        cards[index].classList.add("hide");
      }
    });
  });
  
  
  window.onload = () => {
    filterProduct("all");
  };