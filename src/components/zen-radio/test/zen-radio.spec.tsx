import { newSpecPage } from '@stencil/core/testing';
import { ZenRadio } from '../zen-radio';

describe('zen-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenRadio],
      html: `<zen-radio></zen-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-radio>
    `);
  });
});
