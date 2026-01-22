const bookmarkList = document.getElementById("bookmark-list-section");
const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const viewCategory = document.getElementById("view-category-button");
const addBookmark = document.getElementById("add-bookmark-button");
const closeFormButton = document.getElementById("close-form-button");
const addBookmarkForm = document.getElementById("add-bookmark-button-form");
const categoryName = document.querySelector(".category-name");
const categoryDropdown = document.getElementById("category-dropdown");
const nameForm = document.getElementById("name");
const urlForm = document.getElementById("url");
const closeListButton = document.getElementById("close-list-button");

const getBookmarks = () => {
  const storedBookMarks = localStorage.getItem('bookmarks')
  if(!storedBookMarks){
    return [];
   }
   try {
    const bookmarks = JSON.parse(storedBookMarks);
    return Array.isArray(bookmarks) && (typeof(bookmarks[0]) === "object") && bookmarks[0].hasOwnProperty("name") && bookmarks[0].hasOwnProperty("category") && bookmarks[0].hasOwnProperty("url") ? bookmarks : [];
  } catch {
    return [];
  }
}


function updateBookmarks() {
    var existingBookmarks = getBookmarks();
    var entryName = nameForm.value;
    var entryURL = urlForm.value;
    var entry = {
        "name": entryName,
        "category": categoryDropdown.value,
        "url": entryURL
    };
    
    existingBookmarks.push(entry);
    localStorage.setItem("bookmarks", JSON.stringify(existingBookmarks));
    nameForm.value = "";
    urlForm.value = "";
    displayOrCloseForm();
};

const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
};

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

const displayOrCloseList = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
};

viewCategory.addEventListener("click", () => {displayOrHideCategory()} );
closeFormButton.addEventListener("click", displayOrCloseForm);
addBookmark.addEventListener("click", () =>{
  categoryName.innerText = categoryDropdown.value;
  displayOrCloseForm()});
addBookmarkForm.addEventListener("click", updateBookmarks)
closeListButton.addEventListener("click", displayOrCloseList)



