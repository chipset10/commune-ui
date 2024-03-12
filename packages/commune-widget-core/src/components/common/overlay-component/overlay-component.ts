import { html } from 'lit';
import type { HTMLTemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseComponent } from '../base-component/base-component';
import { styles } from './styles';

@customElement('commune-overlay-component')
export class OverlayComponent extends BaseComponent {
  static styles = styles;

  render(): HTMLTemplateResult {
    return html` <div class="overlay">
      <div class="loadingSpinner"></div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'commune-overlay-component': OverlayComponent;
  }
}
