import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menuCard"];

  connect() {
    console.log("Hello, you are inside the search_bar controller!");
  }

  search(event) {
    console.log(event);
    const searchInput = event.target.value.toLowerCase(); // assigns the value of the text in the input field

    this.menuCardTargets.forEach((menuCard) => {
      const itemName = menuCard.querySelector(".item-name").textContent.toLowerCase();

      if (itemName.includes(searchInput)) { // if the name of the menu item is the same as whatever is inputted in the search field
        menuCard.classList.remove("hidden"); // display the menu card of the menu item
      } else {
        menuCard.classList.add("hidden"); // hide the menu card of all the items that do not match the input
      }
    });
  }
}




// search(event) {
//   // console.log(event);
//   const inputValue = event.target.value.toLowerCase(); // assigns the value of the text in the input field
//   // to lowercase is ensuring that the search can be case insensitive and will match
//   // regardless of if you use uppercase or lowercase letters
//   const menuCards = Array.from(this.menuCardTargets); // assigining menucards into an array

//   menuCards.forEach((card) => {
//     const menuContent = card.textContent.toLowerCase(); // extracts the content of the menucards and converts to lowercase
//     if(menuContent.includes(inputValue)) {
//       card.classList.remove("hidden"); // if the content of the menucards are found within the search input, menucard is shown
//     } else {
//       card.classList.add("hidden"); // if the content is not found, it is hidden.
//     }
//   });
// }
