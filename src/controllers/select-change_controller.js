import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["label"];

  connect() {
    console.log("Hello, Stimulus!", this, this.scope);
  }

  handleChange = e => {
    this.labelTarget.textContent = e.target.value;
  };
}
