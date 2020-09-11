import { newSpecPage } from '@stencil/core/testing';
import { ZenDraggable } from '../zen-draggable';

describe('zen-draggable', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenDraggable],
      html: `<zen-draggable></zen-draggable>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-draggable>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-draggable>
    `);
  });
});
