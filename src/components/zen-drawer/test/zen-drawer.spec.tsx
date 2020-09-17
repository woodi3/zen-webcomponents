import { newSpecPage } from '@stencil/core/testing';
import { ZenDrawer } from '../zen-drawer';

describe('zen-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenDrawer],
      html: `<zen-drawer></zen-drawer>`,
    });
    expect(page.root).toEqualHtml(`
    <zen-drawer class="right md zen-drawer">
      <div class="drawer-overlay"></div>
      <zen-focus-lock>
        <div class="closed drawer-content"></div>
      </zen-focus-lock>
      </zen-drawer>
    `);
  });
});
