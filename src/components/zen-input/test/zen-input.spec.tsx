import { newSpecPage } from '@stencil/core/testing';
import { ZenInput } from '../zen-input';

describe('zen-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenInput],
      html: `<zen-input />`,
    });
    expect(page.root).toEqualHtml(`
      <zen-input class="md outline zen-input">
       <input type="text" value="">
      </zen-input>
    `);
  });
});
