import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menuCard", "search", "menuTitle", "noResults"];
  originalMenu = ""; // empty variable used to store original content of menu

  connect() {
    // console.log("Hello, you are inside the search_bar controller!");
    this.originalMenu = document.querySelector(".menu-content").innerHTML; // selects the innerHTML of the menu-content as the page loads
    this.noResultsTarget.classList.add("hidden");
    console.log(this.menuCardTargets);
  }

  search() {
    // console.log(event);
    const searchInput = this.searchTarget.value.toLowerCase(); // assigns the value of the text in the input field
    // console.log(searchInput);
    let hasMatch = false; // by default there are no matches yet

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
        hasMatch = true; // there is a match, so hasMatch = true
        // console.log("match");
      } else {
        menuCard.classList.add("hidden"); // hide the rest of menu cards of all the items that do not match the input
        this.menuTitleTargets.forEach((title) => title.classList.add("hidden"));
        // console.log("no match");
      }
    });

    if (hasMatch) {
      this.noResultsTarget.classList.add("hidden"); // if there is a match, do not show the 'no results' message!
    } else {
      this.noResultsTarget.classList.remove("hidden"); // show the message!
    }
  }

  moveCardToTop(card) {
    // I want to be able to move the match card to the top of the menu-content class for better UI
    const menuContent = document.querySelector(".menu-content"); // finds the menu content on the webpage
    const firstCard = menuContent.firstElementChild; // finds the first card in the menu content class

    if (firstCard !== card) { // checks if the first card in menu content is NOT the same as the card we want to move
       card.style.marginTop = "30px";  // applies some margin-top to the menu card when it moves to the top
      menuContent.insertAdjacentElement("afterbegin", card);
    }
  }

  clear() {
    this.menuCardTargets.forEach((menuCard) => {
      menuCard.classList.remove('hidden'); // removes the hidden class from menu-cards
    });
    this.menuTitleTargets.forEach((title) => title.classList.remove("hidden")); // removes the hidden class from cat-titles and cat-subtitles
    const menuContent = document.querySelector(".menu-content"); // selecting the current menu-content
    menuContent.innerHTML = this.originalMenu; // storing the originalMenu in the current menuContentw
    this.noResultsTarget.classList.add("hidden");
  }
}

// Done:
// If I type 'woo woo' in the search bar, woo woo comes up nicely and properly formatted
// If I delete my search input, the menu reverts back to its original formatting
// I type 'lolly' and noResults message comes up as 'lolly' isn't on the menu!
// If i type something that does not exist on the menu, there is some text
// saying "No results match your search"

// Fix:
// If I mistype or write something, erase it and begin re-typing it, it should show the result again
// but it currently isn't.
