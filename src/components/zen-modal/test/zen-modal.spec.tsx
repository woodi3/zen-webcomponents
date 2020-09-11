import { newSpecPage } from '@stencil/core/testing';
import { ZenModal } from '../zen-modal';

describe('zen-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenModal],
      html: `<zen-modal></zen-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-modal>
    `);
  });
});
