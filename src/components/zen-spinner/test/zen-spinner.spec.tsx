import { newSpecPage } from '@stencil/core/testing';
import { ZenSpinner } from '../zen-spinner';

describe('zen-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenSpinner],
      html: `<zen-spinner></zen-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <zen-spinner class="zen-spinner md">
        <div class="loader">
          <span class="sr-only">Content is loading...</span>
        </div>
      </zen-spinner>
    `);
  });
});
