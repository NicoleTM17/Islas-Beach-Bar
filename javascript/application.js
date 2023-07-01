import { Application } from "stimulus";

import SearchBarController from "./controllers/search_bar_controller.js";

window.Stimulus = Application.start();

Stimulus.register("search-bar", SearchBarController);
