import { Application } from "stimulus";
import ClickCountController from "./controllers/click-count_controller";
import SelectChangeController from "./controllers/select-change_controller";

const application = Application.start();
application.register("click-count", ClickCountController);
application.register("select-change", SelectChangeController);
