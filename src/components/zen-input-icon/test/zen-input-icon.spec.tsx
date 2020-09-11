import { newSpecPage } from '@stencil/core/testing';
import { ZenInputIcon } from '../zen-input-icon';

describe('zen-input-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenInputIcon],
      html: `<zen-input-icon></zen-input-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-input-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-input-icon>
    `);
  });
});
