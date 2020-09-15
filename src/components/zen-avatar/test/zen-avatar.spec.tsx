import { newSpecPage } from '@stencil/core/testing';
import { ZenAvatar } from '../zen-avatar';

describe('zen-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenAvatar],
      html: `<zen-avatar initials="ww"></zen-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-avatar class="zen-avatar md" initials="ww">
        <div class="initials">
          ww
        </div>
      </zen-avatar>
    `);
  });
});
