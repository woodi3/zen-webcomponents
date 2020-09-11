import { newSpecPage } from '@stencil/core/testing';
import { ZenInputGroup } from '../zen-input-group';

describe('zen-input-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenInputGroup],
      html: `<zen-input-group></zen-input-group>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-input-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </zen-input-group>
    `);
  });
});
