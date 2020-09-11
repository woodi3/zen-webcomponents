import { newSpecPage } from '@stencil/core/testing';
import { ZenCode } from '../zen-code';

describe('zen-code', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenCode],
      html: `<zen-code></zen-code>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-code>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-code>
    `);
  });
});
