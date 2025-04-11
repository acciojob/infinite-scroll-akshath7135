//your code here!

// Function to create and add list items
function addListItems(count) {
    const list = document.getElementById('infi-list');
    for (let i = 0; i < count; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${list.children.length + 1}`; // Create item text
        list.appendChild(listItem); // Append the new item to the list
    }
}

// Initial population of the list with 10 items
addListItems(10);

// Function to check if the user has scrolled to the bottom of the list
function checkScroll() {
    const list = document.getElementById('infi-list');
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        // If scrolled to the bottom, add more items
        addListItems(2);
    }
}

// Add scroll event listener to the list
document.getElementById('infi-list').addEventListener('scroll', checkScroll);