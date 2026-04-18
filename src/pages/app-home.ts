import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('app-home')
export class AppHome extends LitElement {
  static styles = css`
    /* CSS YAKO NIMEIWEKA HAPA */
    :host {
      display: block;
      padding: 10px;
      font-family: sans-serif;
    }
    .header {
      background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
      color: white;
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .sms-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .form-input, textarea {
      padding: 0.75rem;
      border: 1px solid #E0E0E0;
      border-radius: 8px;
      width: 100%;
    }
    .btn-primary {
      background: #2196F3;
      color: white;
      padding: 1rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
    }
    /* ... Unaweza kuongeza CSS yako yote hapa ... */
  `;

  render() {
    return html`
      <div class="header">
        <div class="header-content">
          <div class="logo-text">Wsendy SMS</div>
        </div>
      </div>

      <main class="main-content">
        <div class="container">
          <form class="sms-form">
            <div class="form-group">
              <label>Namba ya Simu</label>
              <input type="tel" class="form-input" placeholder="07XXXXXXXX">
            </div>
            
            <div class="form-group">
              <label>Ujumbe</label>
              <textarea placeholder="Andika ujumbe wako hapa..."></textarea>
            </div>

            <button type="button" class="btn-primary" @click=${this._sendMessage}>
              Tuma SMS
            </button>
          </form>
        </div>
      </main>
    `;
  }

  _sendMessage() {
    alert("SMS inatuma... (Hapa utaweka logic yako ya kutuma)");
  }
}
