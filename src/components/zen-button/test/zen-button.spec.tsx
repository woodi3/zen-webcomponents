import { newSpecPage } from '@stencil/core/testing';
import { ZenButton } from '../zen-button';

describe('zen-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenButton],
      html: `<zen-button></zen-button>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-button class="default enabled md zen-btn">
        <button></button>
      </zen-button>
    `);
  });
});
