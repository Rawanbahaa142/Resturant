


let all = [];

async function getDesserts() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
  const data = await res.json();
  all = data.meals;
  show(all);

    all = data.meals.map(item => ({
        ...item,
        price: (Math.random() * (30 - 5) + 5).toFixed(2),  
        description: generateRandomDescription()  
    }));
  }

    show(all);


function generateRandomDescription() {
    const descriptions = [
        "A simple yet flavorful recipe for quick meals."
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
}


function show(list) {
  const box = document.getElementById("recipes");
  box.innerHTML = list .map(item => `
    <div class="recipe">
      <img src="${item.strMealThumb}">
      <p>${item.strMeal}</p>\
            <p>${item.description}</p>
    <p><strong>Price:</strong> $${item.price}</p>
    </div>
  `).join('');
}

document.getElementById("search").oninput = function(e) {
  const word = e.target.value.toLowerCase();
  const filtered = all.filter(item => item.strMeal.toLowerCase().includes(word));
  show(filtered);
};

getDesserts();

// Navbar Scroll Effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});

