import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["label"];
  count = 0;
  connect() {
    console.log("Hello, Stimulus!", this.element);
  }
  handleClick = e => {
    this.count++;
    this.labelTarget.textContent = this.count;
  };
}
