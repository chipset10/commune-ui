import { fixture, fixtureCleanup, nextFrame } from '@open-wc/testing-helpers';
import { html } from 'lit';
import { afterEach, assert, describe, it, vi } from 'vitest';

import { Button } from '../../../../../src/components/common';

describe('commune button component', function () {
  afterEach(() => {
    fixtureCleanup();
  });

  it('is defined', () => {
    const el = document.createElement('commune-action-button');
    assert.instanceOf(el, Button);
  });

  it('displays the button text', async () => {
    const el = await fixture<Button>(
      html`<commune-action-button text="Click me"></commune-action-button>`
    );
    assert.equal(el.text, 'Click me');
    assert.include(el.shadowRoot?.textContent, 'Click me');
  });

  it('does not handle the click event when disabled', async () => {
    const onClickMock = vi.fn();
    const el = await fixture(
      html`<commune-action-button
        @onClick=${onClickMock}
        .disabled=${true}
      ></commune-action-button>`
    );

    el.shadowRoot?.querySelector('button')?.click();
    await nextFrame();

    assert.equal(onClickMock.mock.calls.length, 0);
  });

  it('shows loader icon when loading', async () => {
    const el = await fixture(
      html`<commune-action-button .isLoading=${true}></commune-action-button>`
    );
    await nextFrame();

    const loader = el.shadowRoot?.querySelector('.loaderIcon');
    assert.isNotNull(
      loader,
      'Loader icon (SVG) should be present when loading'
    );
  });

  it('applies correct classes based on properties', async () => {
    const el = await fixture(
      html`<commune-action-button
        .disabled=${true}
        .isLoading=${true}
      ></commune-action-button>`
    );
    await nextFrame();
    const buttonElement = el.shadowRoot?.querySelector(
      'button'
    ) as HTMLButtonElement;

    const classList = buttonElement?.classList;
    assert.isTrue(classList.contains('disabled'));
    assert.isTrue(classList.contains('loading'));
  });
});
