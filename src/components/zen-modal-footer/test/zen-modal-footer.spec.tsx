import { newSpecPage } from '@stencil/core/testing';
import { ZenModalFooter } from '../zen-modal-footer';

describe('zen-modal-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenModalFooter],
      html: `<zen-modal-footer></zen-modal-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-modal-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-modal-footer>
    `);
  });
});
