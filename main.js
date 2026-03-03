const snacks = [
    {
        name: "칩",
        image: "https://placehold.co/250x250/EFEFEF/333333?text=칩"
    },
    {
        name: "초콜릿",
        image: "https://placehold.co/250x250/EFEFEF/333333?text=초콜릿"
    },
    {
        name: "사탕",
        image: "https://placehold.co/250x250/EFEFEF/333333?text=사탕"
    }
];

const iceCreams = [
    {
        name: "바닐라",
        image: "https://placehold.co/250x250/EFEFEF/333333?text=바닐라"
    },
    {
        name: "초콜릿",
        image: "https://placehold.co/250x250/EFEFEF/333333?text=초콜릿"
    },
    {
        name: "딸기",
        image: "https://placehold.co/250x250/EFEFEF/333333?text=딸기"
    }
];

const snackContainer = document.querySelector("#snacks .card-container");
const iceCreamContainer = document.querySelector("#ice-cream .card-container");
const themeToggle = document.querySelector("#theme-toggle");

function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
    const nextTheme = theme === "dark" ? "dark" : "light";
    document.body.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);

    if (themeToggle) {
        themeToggle.textContent = nextTheme === "dark" ? "화이트 모드" : "다크 모드";
    }
}

snacks.forEach(snack => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = snack.image;
    img.alt = snack.name;

    const name = document.createElement("h3");
    name.textContent = snack.name;

    card.appendChild(img);
    card.appendChild(name);
    snackContainer.appendChild(card);
});

iceCreams.forEach(iceCream => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = iceCream.image;
    img.alt = iceCream.name;

    const name = document.createElement("h3");
    name.textContent = iceCream.name;

    card.appendChild(img);
    card.appendChild(name);
    iceCreamContainer.appendChild(card);
});

if (themeToggle) {
    applyTheme(getInitialTheme());

    themeToggle.addEventListener("click", () => {
        const currentTheme = document.body.getAttribute("data-theme");
        applyTheme(currentTheme === "dark" ? "light" : "dark");
    });
}
