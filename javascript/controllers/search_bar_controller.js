import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menuCard", "search", "menuTitle"];

  connect() {
    // console.log("Hello, you are inside the search_bar controller!");
    console.log(this.menuCardTargets);
  }

  search() {
    // console.log(event);
    const searchInput = this.searchTarget.value.toLowerCase(); // assigns the value of the text in the input field
    // console.log(searchInput);

    if (searchInput === "") {
      this.clear();
      return;
    }

    this.menuCardTargets.forEach((menuCard) => {
      const itemName = menuCard.querySelector(".item-name").innerText.toLowerCase();
      console.log(itemName);

      if (itemName.includes(searchInput)) { // if the name of the menu item is the same as whatever is inputted in the search field
        menuCard.classList.remove("hidden"); // display the menu card of the menu item
        this.menuTitleTargets.forEach((title) => title.classList.remove("hidden"));
        this.moveCardToTop(menuCard);
        // console.log("match");
      } else {
        menuCard.classList.add("hidden"); // hide the menu card of all the items that do not match the input
        this.menuTitleTargets.forEach((title) => title.classList.add("hidden"));
        // console.log("no match");
      }
    });
  }

  moveCardToTop(card) {
    const menuContent = document.querySelector(".menu-content");
    const firstCard = menuContent.firstElementChild;

    if (firstCard !== card) {
      card.style.marginTop = "30px";
      menuContent.insertAdjacentElement("afterbegin", card);
      // menuContent.classList.add("search-results");
    }
  }

  clear() {
    this.menuCardTargets.forEach((menuCard) => {
      menuCard.classList.remove('hidden');
    });
    this.menuTitleTargets.forEach((title) => title.classList.remove("hidden"));

    const menuContent = document.querySelector(".menu-content");
    // menuContent.classList.remove("search-results");
  }
}

// Done:
// If I type 'woo woo' in the search bar, woo woo comes up nicely and properly formatted


// Fix:
// If I delete my search input, the menu does NOT revert back to its original formatting


// To-do:
// If i type something that does not exist on the menu, I would like there to be some text
// saying "No results match your search" or something like that
