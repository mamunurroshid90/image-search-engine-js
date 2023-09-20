// let filename = 'index.js';
// console.log(filename.split('.').pop());

const accesskey = "Wo3vd66-EgJGYlY6cO57LWozcg2iiST0QMFvhsE1ngc";

const search_form = document.getElementById("search-form");
const search_box = document.getElementById("search-box");
const search_result = document.getElementById("search-result");
const show_more_btn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage() {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    search_result.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    search_result.appendChild(imageLink);
  });
  show_more_btn.style.display = "block";
  search_box.value = "";
}

search_form.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  keyword = search_box.value;
  searchImage();
});

show_more_btn.addEventListener("click", () => {
  page++;
  searchImage();
});
