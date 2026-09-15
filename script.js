document.getElementById("year").textContent = new Date().getFullYear();

function showPlaceholder(event, item) {
  event.preventDefault();
  alert(item + " link is a placeholder. Add the real URL in index.html.");
}
