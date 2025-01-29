function removeTwitchTags() {
  const tagsToRemove = document.querySelectorAll('.tw-tag');
  tagsToRemove.forEach(tag => tag.remove());
}

// Run the function when the page loads
removeTwitchTags();

// Also run the function when the DOM content changes
const observer = new MutationObserver(removeTwitchTags);
observer.observe(document.body, { childList: true, subtree: true });
