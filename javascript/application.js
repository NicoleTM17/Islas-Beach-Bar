import { Application } from "@hotwired/stimulus";

import SearchBarController from "../javascript/controllers/search_bar_controller.js";
import BarStatusController from "../javascript/controllers/bar_status_controller.js";
// import BarInfoController from "../javascript/controllers/bar_info_controller.js"

window.Stimulus = Application.start();

Stimulus.register("search-bar", SearchBarController);
Stimulus.register("bar-status", BarStatusController);
// Stimulus.register("bar-info", BarInfoController);
