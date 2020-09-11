import { newSpecPage } from '@stencil/core/testing';
import { ZenResizePane } from '../zen-resize-pane';

describe('zen-resize-pane', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenResizePane],
      html: `<zen-resize-pane></zen-resize-pane>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-resize-pane>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-resize-pane>
    `);
  });
});
