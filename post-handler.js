const postsContainer = document.getElementById("posts-container");

async function loadNotes() {
  const response = await fetch("./md/post1.md");
  const text = await response.text();
  const html = marked(text);
  const postElement = document.createElement("div");
  postElement.innerHTML = html;
  notesContainer.appendChild(postElement);
  // Add a link to the post.html page
}

// Load the notes when the page is ready
window.onload = loadNotes;
