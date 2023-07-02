import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["text", "dot"];
  connect() {
    console.log("Connected to bar_status_controller!");
    this.updateStatus();
  }

  updateStatus(){
    const now = new Date(); // The current time right now!
    const openTime = new Date();
    const closeTime = new Date();
    openTime.setHours(9, 30, 0); // Set the opening time to 9:30 AM
    closeTime.setHours(18, 0, 0); // Set the closing time to 6:00 PM

    if(now >= openTime && now <= closeTime) {
      this.textTarget.textContent = "Open"; // text content changed to 'Open'
      this.textTarget.style.color = "green"; // text color changed to green
      this.dotTarget.style.color = "green"; // dot color changed to green
    } else {
      this.textTarget.textContent = "Closed"; // text content changed to 'Closed'
      this.textTarget.style.color = "red"; // text color changed to red
      this.dotTarget.style.color = "red"; // dot color changed to red
      this.textTarget.style.opacity = "0.5"; // also changed the opacity
      this.dotTarget.style.opacity = "0.5";
    }
  }
}
