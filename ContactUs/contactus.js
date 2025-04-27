document.getElementById('save').onclick = (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }
   
    let existdata = localStorage.getItem('user');
    let data = existdata ? JSON.parse(existdata) : [];

    let newdata = { name, email, message };
    data.push(newdata);
    localStorage.setItem('user', JSON.stringify(data));

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";

    let successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
};
