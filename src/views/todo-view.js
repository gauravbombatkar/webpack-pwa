import { LitElement, html } from 'lit-element';
import axios from 'axios';

class TodoView extends LitElement {

  static get properties() {
    return {
      response: { type: String }
    };
  }

  constructor() {
    super();
    this.response = "";
  }

  firstUpdated() {

    axios.get(`http://localhost:8081/index`)
      .then(res => {
        const persons = res.data;
        this.response = persons.title;
      })
  }

  render() {
    const { response } = this;
    return html`
    <div>
    The message is: ${this.response}
    </div>
    `;
  }
}

customElements.define('todo-view', TodoView);
