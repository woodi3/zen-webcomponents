import { newSpecPage } from '@stencil/core/testing';
import { ZenImage } from '../zen-image';

describe('zen-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenImage],
      html: `<zen-image></zen-image>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-image class="zen-image">
        <img>
      </zen-image>
    `);
  });
});
