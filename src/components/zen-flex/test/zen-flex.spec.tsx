import { newSpecPage } from '@stencil/core/testing';
import { ZenFlex } from '../zen-flex';

describe('zen-flex', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenFlex],
      html: `<zen-flex></zen-flex>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-flex class="zen-flex w-nowrap d-row">
        <div></div>
      </zen-flex>
    `);
  });
});
