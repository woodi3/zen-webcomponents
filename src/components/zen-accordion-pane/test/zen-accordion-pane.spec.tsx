import { newSpecPage } from '@stencil/core/testing';
import { ZenAccordionPane } from '../zen-accordion-pane';

describe('zen-accordion-pane', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenAccordionPane],
      html: `<zen-accordion-pane></zen-accordion-pane>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-accordion-pane>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-accordion-pane>
    `);
  });
});
