import { newSpecPage } from '@stencil/core/testing';
import { ZenAccordionBody } from '../zen-accordion-body';

describe('zen-accordion-body', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenAccordionBody],
      html: `<zen-accordion-body></zen-accordion-body>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-accordion-body>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-accordion-body>
    `);
  });
});
