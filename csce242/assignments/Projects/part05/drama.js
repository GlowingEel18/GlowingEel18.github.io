// Array of Drama Books
const dramaBooks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A deeply moving and powerful story of racial injustice in the deep South.",
        image: "to_kill_a_mockingbird.jpg"
    },
    {
        title: "Death of a Salesman",
        author: "Arthur Miller",
        description: "A tragic reflection on the American Dream and the struggles of an aging salesman.",
        image: "death_of_a_salesman.jpg"
    },
    {
        title: "The Crucible",
        author: "Arthur Miller",
        description: "A haunting drama about the Salem witch trials and moral hysteria.",
        image: "the_crucible.jpg"
    },
    {
        title: "A Streetcar Named Desire",
        author: "Tennessee Williams",
        description: "An emotionally charged play about human frailty and desire in New Orleans.",
        image: "streetcar_named_desire.jpg"
    },
    {
        title: "Fences",
        author: "August Wilson",
        description: "A powerful story about race, family, and broken dreams in 1950s Pittsburgh.",
        image: "fences.jpg"
    }
];

// Function to display a random drama book
function displayRandomDramaBook() {
    const randomIndex = Math.floor(Math.random() * dramaBooks.length);
    const book = dramaBooks[randomIndex];
    
    // Populate the featured book section with details
    const featuredBookElement = document.getElementById("featured-book");
    featuredBookElement.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>By ${book.author}</p>
        <p>${book.description}</p>
    `;
}

// Call the function to display the book when the page loads
window.onload = displayRandomDramaBook;