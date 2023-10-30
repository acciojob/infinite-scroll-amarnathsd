// Function to create a new list item
function createListItem(number) {
  const li = document.createElement("li");
  li.textContent = `List Item ${number}`;
  return li;
}

const list = document.getElementById("infi-list");
let nextItemNumber = 11;

// Add about 10 list items by default
for (let i = 1; i <= 10; i++) {
  list.appendChild(createListItem(i));
}

// Function to handle scroll event and add more items
function handleScroll() {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // User has reached the end of the list
    for (let i = 0; i < 2; i++) {
      list.appendChild(createListItem(nextItemNumber));
      nextItemNumber++;
    }
  }
}

// Attach the scroll event listener
list.addEventListener("scroll", handleScroll);
