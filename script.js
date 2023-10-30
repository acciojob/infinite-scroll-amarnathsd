//your code here!

const infiList = document.getElementById("infi-list");
const list = infiList;
const loadMoreThreshold = 200; // You can adjust this value based on your needs

// Function to add new list items
function addMoreItems() {
  for (let i = 0; i < 2; i++) {
    const newItem = document.createElement("li");
    newItem.textContent = "New List Item";
    list.appendChild(newItem);
  }
}

// Function to check if the user has scrolled to the bottom of the list
function isScrolledToBottom() {
  return list.scrollTop + list.clientHeight >= list.scrollHeight - loadMoreThreshold;
}

// Initial load of 10 list items
for (let i = 0; i < 10; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = "List Item " + (i + 1);
  list.appendChild(listItem);
}

// Add more items when the user scrolls to the bottom
list.addEventListener("scroll", () => {
  if (isScrolledToBottom()) {
    addMoreItems();
  }
});

// You can also trigger the initial loading of more items when the page loads.
// addMoreItems();
