import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-home')
export class AppHome extends LitElement {
  static styles = css`
    :host {
      display: block;
      --primary-color: #2196F3;
      --primary-dark: #1976D2;
      --light-bg: #F5F5F5;
      --text-primary: #212121;
    }

    .header {
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
      color: white;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    .main-content {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .sms-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    label {
      font-weight: bold;
      color: var(--text-primary);
    }

    input, textarea {
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 1rem;
      width: 100%;
      box-sizing: border-box;
    }

    .btn-primary {
      background: var(--primary-color);
      color: white;
      padding: 15px;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s;
    }

    .btn-primary:hover {
      background: var(--primary-dark);
      transform: translateY(-2px);
    }

    .tabs {
      display: flex;
      justify-content: space-around;
      background: white;
      margin-bottom: 20px;
      border-radius: 8px;
      overflow: hidden;
    }

    .tab-btn {
      padding: 15px;
      flex: 1;
      border: none;
      background: none;
      cursor: pointer;
      border-bottom: 3px solid transparent;
    }

    .tab-btn.active {
      color: var(--primary-color);
      border-bottom-color: var(--primary-color);
    }
  `;

  render() {
    return html`
      <div class="header">
        <div class="logo-text">Wsendy SMS</div>
      </div>

      <nav class="tabs">
        <button class="tab-btn active">Compose</button>
        <button class="tab-btn">Inbox</button>
        <button class="tab-btn">Sent</button>
      </nav>

      <main class="main-content">
        <div class="sms-form">
          <div class="form-group">
            <label>Namba ya Mpokeaji</label>
            <input type="tel" placeholder="07XXXXXXXX" />
          </div>

          <div class="form-group">
            <label>Ujumbe Wako</label>
            <textarea placeholder="Andika ujumbe hapa..."></textarea>
          </div>

          <button class="btn-primary" @click="${this._handleSend}">
            Tuma SMS Sasa
          </button>
        </div>
      </main>
    `;
  }

  _handleSend() {
    alert("Wsendy: SMS yako inatayarishwa kutumwa!");
  }
}
