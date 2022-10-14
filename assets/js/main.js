const btnEl = document.getElementById("btn");
btnEl.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(malumot => malumot.json())
    .then(data => {
        data.forEach(e => {
            const imgEl = document.createElement("img");
            box.appendChild(imgEl)
            imgEl.src = e.url
            imgEl.className = "pictures"
        });
    })
})
const btnRemove = document.getElementById("btn-delete");
btnRemove.addEventListener('click', () => {
    box.innerHTML = ""
})