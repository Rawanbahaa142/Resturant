let all = [];

async function getDrinks() {
  // Fetch drinks from TheCocktailDB API
  const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
  const data = await res.json();
  all = data.drinks;
  show(all);
}

function show(list) {
  const box = document.getElementById("recipes");
  box.innerHTML = list.slice(0, 15).map(item => `
    <div class="recipe">
      <img src="${item.strDrinkThumb}" alt="${item.strDrink}">
      <p>${item.strDrink}</p>
    </div>
  `).join('');
}

document.getElementById("search").oninput = function(e) {
  const word = e.target.value.toLowerCase();
  const filtered = all.filter(item => item.strDrink.toLowerCase().includes(word));

  show(filtered);
};

getDrinks();
