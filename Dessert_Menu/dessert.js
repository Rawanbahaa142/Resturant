


let all = [];

function getDesserts() {
  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert')
    .then(res => res.json())
    .then(data => {
      all = data.meals;
      show(all);

      all = data.meals.map(item => ({
        ...item,
        price: (Math.random() * (30 - 5) + 5).toFixed(2),  
        description: generateDescription()
      }));

      show(all);
    })
    .catch(error => console.error('Error fetching data:', error));
}

function generateDescription() {
  const descriptions = [
    "A refreshing drink to brighten your day.",
    "A classic cocktail with a twist of flavor.",
    "A perfect blend of sweetness and tang.",
    "A drink to enjoy with friends and laughter.",
    "A vibrant and colorful cocktail to impress."
  ];
  for (let i=0;i<descriptions.length;i++){
  return descriptions[i];
  }
}

function show(list) {
  const box = document.getElementById("recipes");
  box.innerHTML = list.map(item => `
    <div class="recipe">
      <img src="${item.strMealThumb}">
      <p>${item.strMeal}</p>
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








