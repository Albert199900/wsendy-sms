import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {
  @property() message = 'Welcome!';

  static styles = [
    styles,
    css`
      main {
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f5f5f5;
        min-height: 100vh;
      }
      sl-card {
        width: 100%;
        max-width: 400px;
        margin-top: 20px;
      }
      .input-group {
        margin-bottom: 15px;
        text-align: left;
      }
      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      input, textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
      }
    `
  ];

  render() {
    return html`
      <main>
        <sl-card>
          <h2 slot="header" style="color: #2196F3; margin: 0; text-align: center;">Wsendy SMS</h2>
          
          <div class="input-group">
            <label>Namba ya Mpokeaji</label>
            <input type="tel" placeholder="07XXXXXXXX">
          </div>
          
          <div class="input-group">
            <label>Ujumbe</label>
            <textarea rows="4" placeholder="Andika ujumbe wako hapa..."></textarea>
          </div>
          
          <sl-button slot="footer" variant="primary" @click="${() => alert('SMS inatuma...')}" style="width: 100%;">
            TUMA SMS
          </sl-button>
        </sl-card>
      </main>
    `;
  }
}
