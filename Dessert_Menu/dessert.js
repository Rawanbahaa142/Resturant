let all = [];

async function getDesserts() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
  const data = await res.json();
  console.log(data.meals);
  all = data.meals;
  show(all);
}

function show(list) {
  const box = document.getElementById("recipes");
  box.innerHTML = list.slice(0,15).map(item => `
    <div class="recipe">
      <img src="${item.strMealThumb}">
      <p>${item.strMeal}</p>
    </div>
  `).join('');
}

document.getElementById("search").oninput = function(e) {
  const word = e.target.value.toLowerCase();
  const filtered = all.filter(item => item.strMeal.toLowerCase().includes(word));

  show(filtered);
};

getDesserts();