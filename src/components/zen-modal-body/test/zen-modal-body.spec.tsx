import { newSpecPage } from '@stencil/core/testing';
import { ZenModalBody } from '../zen-modal-body';

describe('zen-modal-body', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenModalBody],
      html: `<zen-modal-body></zen-modal-body>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-modal-body>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-modal-body>
    `);
  });
});
