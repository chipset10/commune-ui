import { afterEach, assert, describe, it } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing-helpers';
import { html } from 'lit';
import { OverlayComponent } from '../../../../src/components';

describe('loader-component', function () {
  afterEach(() => {
    fixtureCleanup();
  });

  it('is defined', () => {
    const el = document.createElement('commune-overlay-component');
    assert.instanceOf(el, OverlayComponent);
  });

  it('renders loader', async () => {
    const el = await fixture(html`
      <commune-overlay-component></commune-overlay-component>
    `);

    const overlay = el.shadowRoot!.querySelector('.overlay') as HTMLElement;

    assert.isNotNull(overlay);
  });
});
