import { newSpecPage } from '@stencil/core/testing';
import { ZenDragZone } from '../zen-drag-zone';

describe('zen-drag-zone', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenDragZone],
      html: `<zen-drag-zone></zen-drag-zone>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-drag-zone>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-drag-zone>
    `);
  });
});
