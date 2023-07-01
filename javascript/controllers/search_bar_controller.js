import { Controller } from 'stimulus'

export default class extends Controller {

  connect() {
    console.log("Hello, you are inside the search_bar controller!");
  }

  search(event) {
    console.log(event);
  }

}
