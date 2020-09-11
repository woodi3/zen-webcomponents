import { newSpecPage } from '@stencil/core/testing';
import { ZenAccordionHeader } from '../zen-accordion-header';

describe('zen-accordion-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenAccordionHeader],
      html: `<zen-accordion-header></zen-accordion-header>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-accordion-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-accordion-header>
    `);
  });
});
