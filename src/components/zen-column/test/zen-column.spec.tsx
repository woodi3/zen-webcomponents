import { newSpecPage } from '@stencil/core/testing';
import { ZenColumn } from '../zen-column';

describe('zen-column', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenColumn],
      html: `<zen-column>
        <div> Some content </div>
      </zen-column>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-column class="zen-column" style="flex: 0 1 auto;">
        <div> Some content </div>
      </zen-column>
    `);
  });
});
