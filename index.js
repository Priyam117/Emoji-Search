const searchField = document.getElementById("searchBar");
const searchButton = document.getElementById("SubmitButton");
const displayDivContainer = document.getElementById("displayConatiner");


const searchEmoji = (event) => {
  event.preventDefault();
  // console.log(emojiList);

  const searchVal = searchField.value;

  const filteredList = emojiList.filter((element) => {
    if (element.aliases.some((e => e.startsWith(searchVal)))) {
      return true;
    }
    if (element.tags.some(e => e.startsWith(searchVal))) {
      return true;
    }
  });
  displayDivContainer.innerText = "";
  // console.log(displayDivContainer);
  filteredList.map((ele) => {
    const emoji = document.createElement("h1");
    const description = document.createElement("h3");
    const category = document.createElement("p");

    emoji.innerHTML = `${ele.emoji}<br>`;
    description.innerText = ele.description;
    category.innerText = ele.category;

    displayDivContainer.appendChild(emoji);
    displayDivContainer.appendChild(description);
    displayDivContainer.appendChild(category);
  });

}
searchButton.addEventListener("click", searchEmoji);
