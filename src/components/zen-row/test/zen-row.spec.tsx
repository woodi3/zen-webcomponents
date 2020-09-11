import { newSpecPage } from '@stencil/core/testing';
import { ZenRow } from '../zen-row';

describe('zen-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenRow],
      html: `<zen-row></zen-row>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-row>
    `);
  });
});
