let all = [];

async function getsalt() {
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json();
    console.log(data.recipes);

    // Add random price and description
    all = data.recipes.map(item => ({
        ...item,
        price: (Math.random() * (30 - 5) + 5).toFixed(2),  // Random price between $5 and $30
        description: generateRandomDescription()  // Generate random description
    }));

    show(all);
}

// Function to generate random descriptions
function generateRandomDescription() {
    const descriptions = [
        "A simple yet flavorful recipe for quick meals."
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
}

function show(list) {
    const box = document.getElementById("recipes");
    box.innerHTML = list.map(item => `
    <div class="recipe">
        <img src="${item.image}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p><strong>Price:</strong> $${item.price}</p>
    </div>
  `).join('');
}

document.getElementById("search").oninput = function (e) {
    const word = e.target.value.toLowerCase();
    const filtered = all.filter(item => item.name.toLowerCase().includes(word));

    show(filtered);
};

getsalt();
// Navbar Scroll Effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
  });
  