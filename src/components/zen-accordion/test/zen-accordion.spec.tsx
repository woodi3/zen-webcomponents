import { newSpecPage } from '@stencil/core/testing';
import { ZenAccordion } from '../zen-accordion';

describe('zen-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenAccordion],
      html: `<zen-accordion></zen-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-accordion>
    `);
  });
});
