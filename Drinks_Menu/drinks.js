let all = [];

async function getDrinks() {
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
  const data = await res.json();
  
  all = data.drinks.map(item => ({
    ...item,
    price: (Math.random() * (30 - 5) + 5).toFixed(2),  
    description: generateRandomDescription()  
  }));

  show(all);
}

function generateRandomDescription() {
  const descriptions = [
    "A refreshing drink to brighten your day.",
    "A classic cocktail with a twist of flavor.",
    "A perfect blend of sweetness and tang.",
    "A drink to enjoy with friends and laughter.",
    "A vibrant and colorful cocktail to impress."
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

function show(list) {
  const box = document.getElementById("recipes");
  box.innerHTML = list.slice(0, 15).map(item => `
    <div class="recipe">
      <img src="${item.strDrinkThumb}" alt="${item.strDrink}">
      <h3>${item.strDrink}</h3>
      <p>${item.description}</p>
      <p><strong>Price:</strong> $${item.price}</p>
    </div>
  `).join('');
}

document.getElementById("search").oninput = function(e) {
  const word = e.target.value.toLowerCase();
  const filtered = all.filter(item => item.strDrink.toLowerCase().includes(word));

  show(filtered);
};

getDrinks();
