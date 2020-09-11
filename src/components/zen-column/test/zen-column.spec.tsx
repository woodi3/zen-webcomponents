import { newSpecPage } from '@stencil/core/testing';
import { ZenColumn } from '../zen-column';

describe('zen-column', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenColumn],
      html: `<zen-column></zen-column>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-column>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-column>
    `);
  });
});
