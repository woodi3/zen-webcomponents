import { newSpecPage } from '@stencil/core/testing';
import { ZenFileDrop } from '../zen-file-drop';

describe('zen-file-drop', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenFileDrop],
      html: `<zen-file-drop></zen-file-drop>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-file-drop>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-file-drop>
    `);
  });
});
