import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-home')
export class AppHome extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
      background-color: #ffffff;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }
    .container {
      max-width: 400px;
      margin: 0 auto;
      text-align: center;
    }
    input, textarea {
      width: 100%;
      padding: 12px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-sizing: border-box;
      font-size: 16px;
    }
    button {
      width: 100%;
      padding: 15px;
      background-color: #2196F3;
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <div class="container">
        <h2 style="color: #2196F3;">Wsendy SMS</h2>
        <input type="tel" placeholder="Namba ya Mpokeaji">
        <textarea rows="4" placeholder="Andika ujumbe wako hapa..."></textarea>
        <button @click="${() => alert('SMS inatuma...')}">TUMA SMS</button>
      </div>
    `;
  }
}
