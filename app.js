const resultSection = document.getElementById("results");

dados.sort((a, b) => b.rating - a.rating);

const input = document.getElementById("search-input");
const btn = document.getElementById("search-btn");
const allBtn = document.getElementById("all-btn");
const searchForm = document.getElementById("search");
const sortBtn = document.getElementById("sort-btn");

let isDescending = true;

function sortData(data) {
  return data.sort((a, b) => {
    return isDescending ? b.rating - a.rating : a.rating - b.rating;
  });
}

function buildCard(player) {
  const card = document.createElement("a");
  card.href = player.url;
  card.target = "_blank";
  card.className = "card";
  if (player.type === "gold") {
    card.style.backgroundImage = "url('public/imgs/gold.webp')";
  } else if (player.type === "icon") {
    card.style.backgroundImage = "url('public/imgs/icon.webp')";
  } else if (player.type === "hero") {
    card.style.backgroundImage = "url('public/imgs/hero-card.webp')";
  }
  card.innerHTML = `
          <div class="player" style="background-image: url('${player.image}');">
            <div class="info">
              <span>
                <h2>${player.rating}</h2>
                <h3>${player.position}</h3>
              </span>
              <div class="stats">
                <h2 class="player-name">${player.name}</h2>
                <div class="main-stats">
                  <span>
                    <h4>rit</h4>
                    <h3>${player.stats.pace}</h3>
                  </span>
                  <span>
                    <h4>fin</h4>
                    <h3>${player.stats.shooting}</h3>
                  </span>
                  <span>
                    <h4>pas</h4>
                    <h3>${player.stats.passing}</h3>
                  </span>
                  <span>
                    <h4>dri</h4>
                    <h3>${player.stats.dribbling}</h3>
                  </span>
                  <span>
                    <h4>def</h4>
                    <h3>${player.stats.defense}</h3>
                  </span>
                  <span>
                    <h4>fis</h4>
                    <h3>${player.stats.physical}</h3>
                  </span>
                </div>
              </div>
            </div>
          </div>
        `;
  return card;
}

function loadAll() {
  resultSection.innerHTML = "";
  const sortedData = sortData(dados);

  sortedData.forEach((player) => {
    const card = buildCard(player);
    resultSection.appendChild(card);
  });
}

function updateBtn() {
  btn.disabled = input.value.length < 3;
}

function toggleSortOrder() {
  isDescending = !isDescending;
  sortBtn.textContent = isDescending ? "Geral +" : "Geral -";
  loadAll();
}

loadAll();
updateBtn();

input.addEventListener("input", () => {
  updateBtn();
});

allBtn.addEventListener("click", loadAll);

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  resultSection.innerHTML = "";

  const filter = dados.filter((item) => {
    return (
      item &&
      item.fullName
        .normalize("NFD")
        .replace(/[^a-zA-Z\s]/g, "")
        .toLocaleLowerCase()
        .includes(input.value.toLowerCase())
    );
  });

  const sortedFilter = sortData(filter);
  if (sortedFilter.length === 0) {
    const noResults = document.createElement("div");
    noResults.id = "no-results";
    noResults.innerHTML = "<h1>Nenhum resultado encontrado.</h1>";
    resultSection.appendChild(noResults);
  } else {
    sortedFilter.forEach((player) => {
      const card = buildCard(player);
      resultSection.appendChild(card);
    });
  }

  input.value = "";
  updateBtn();
});

sortBtn.addEventListener("click", toggleSortOrder);
