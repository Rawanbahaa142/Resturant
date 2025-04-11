let all = [];

async function getsalt() {
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json();
    console.log(data.recipes)
    all = data.recipes;
    show(all);
}

function show(list) {
    const box = document.getElementById("recipes");
    box.innerHTML = list.map(item => `
    <div class="recipe">
      <img src="${item.image}">
      <p>${item.name}</p>
    </div>
  `).join('');
}

document.getElementById("search").oninput = function (e) {
    const word = e.target.value.toLowerCase();
    const filtered = all.filter(item => item.name.toLowerCase().includes(word));

    show(filtered);
};
getsalt();
