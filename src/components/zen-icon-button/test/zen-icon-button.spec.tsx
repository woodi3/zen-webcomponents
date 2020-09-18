import { newSpecPage } from '@stencil/core/testing';
import { ZenIconButton } from '../zen-icon-button';

describe('zen-icon-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ZenIconButton],
      html: `<zen-icon-button></zen-icon-button>`,
    });
    expect(page.root).toEqualHtml(`
     <zen-icon-button>
       <zen-button plain="">
         <span class="sr-only"></span>
         <zen-icon></zen-icon>
       </zen-button>
     </zen-icon-button>
    `);
  });
});
