import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-home')
export class AppHome extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: sans-serif;
      background-color: #f5f5f5;
      min-height: 100vh;
    }
    .header {
      background: #2196F3;
      color: white;
      padding: 20px;
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
    }
    .container {
      padding: 20px;
      max-width: 400px;
      margin: 0 auto;
    }
    .sms-card {
      background: white;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    .input-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
    }
    input, textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-sizing: border-box;
    }
    button {
      width: 100%;
      padding: 15px;
      background: #2196F3;
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <div class="header">Wsendy SMS App</div>
      <div class="container">
        <div class="sms-card">
          <div class="input-group">
            <label>Namba ya Mpokeaji</label>
            <input type="tel" placeholder="07XXXXXXXX">
          </div>
          <div class="input-group">
            <label>Ujumbe</label>
            <textarea rows="4" placeholder="Andika ujumbe hapa..."></textarea>
          </div>
          <button @click=${() => alert('SMS inatuma...')}>TUMA SMS</button>
        </div>
      </div>
    `;
  }
}
