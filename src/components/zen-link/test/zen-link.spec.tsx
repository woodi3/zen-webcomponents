import { newSpecPage } from '@stencil/core/testing';
import { ZenLink } from '../zen-link';

describe('zen-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenLink],
      html: `<zen-link></zen-link>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-link>
    `);
  });
});
