// @todo
// 1- Kişiler ve filmlerin tüm bilgileri yer alan bir Star Wars Bilgi Sayfası

const createNode = element => document.createElement(element);

const append = (parent, el) => {
    parent.appendChild(el);
};

const url = param => `https://swapi.co/api/${param}/`;
const infoDiv = document.querySelector("#info-wrapper ul");
const handlePeopleBtn = document.getElementById("handlePeople");
const handleFilmsBtn = document.getElementById("handleFilms");

const addHandleEventListener = () => {
    handlePeopleBtn.addEventListener("click", () => {
        fetchPeople();
    });
    handleFilmsBtn.addEventListener("click", () => {
        fetchFilms();
    });
};

const fetchPeople = () => {
    handleFilmsBtn.classList.remove("btn-active");
    handlePeopleBtn.className += " btn-active";
    infoDiv.innerHTML = "";
    fetch(url("people"))
        .then(resp => resp.json())
        .then(data => {
            const { results } = data;
            results.map(people => {
                const { name } = people;
                let li = createNode("li");
                li.innerHTML = name;
                append(infoDiv, li);
            });
        })
        .catch(function(error) {
            console.log(error);
        });
};
const fetchFilms = () => {
    handlePeopleBtn.classList.remove("btn-active");
    handleFilmsBtn.className += " btn-active";
    infoDiv.innerHTML = "";
    fetch(url("films"))
        .then(resp => resp.json())
        .then(data => {
            const { results } = data;
            results.map(films => {
                const { title } = films;
                let li = createNode("li");
                li.innerHTML = title;
                append(infoDiv, li);
            });
        })
        .catch(function(error) {
            console.log(error);
        });
};
document.addEventListener("DOMContentLoaded", () => {
    addHandleEventListener();
});