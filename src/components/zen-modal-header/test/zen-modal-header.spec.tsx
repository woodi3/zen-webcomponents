import { newSpecPage } from '@stencil/core/testing';
import { ZenModalHeader } from '../zen-modal-header';

describe('zen-modal-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenModalHeader],
      html: `<zen-modal-header></zen-modal-header>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-modal-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-modal-header>
    `);
  });
});
