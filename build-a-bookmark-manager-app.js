const bookmarkList = document.getElementById("bookmark-list-section");
const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const viewCategory = document.getElementById("view-category-button");
const addBookmark = document.getElementById("add-bookmark-button");
const goBack = document.getElementById("close-form-button");
const addBookmarkForm = document.getElementById("add-bookmark-button-form");


const changeViews = () => {
  // bookmarkList.classList.toggle("hidden");
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
};

viewCategory.addEventListener("click", changeViews);

goBack.addEventListener("click", changeViews);


