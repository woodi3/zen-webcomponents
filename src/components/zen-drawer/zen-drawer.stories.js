import { argTypes } from './argTypes';
import { createStoryArgs } from '../../utils/utils';

export default {
    title: 'Zen Drawer',
    argTypes
};

const args = createStoryArgs(argTypes);

const Template = ({size, placement, overlay, fullscreen}) => {
    return /*html*/`
    <div>
      <h4>Zen Drawer</h4>
      <zen-button onclick="openDrawer()">Open Drawer</zen-button>
      <div id="drawer-container">
        <zen-drawer id="drawer" fullscreen=${fullscreen} size=${size} overlay=${overlay} placement=${placement}>
          <zen-drawer-header>
            <h4>Basic Header</h4>
          </zen-drawer-header>
          <zen-drawer-body>
            <p>Some drawer body</p>
          </zen-drawer-body>
          <zen-drawer-footer>
            <zen-button primary plain onclick="closeDrawer()">Primary</zen-button>
            <zen-button accent plain onclick="closeDrawer()">Accent</zen-button>
            <zen-button plain onclick="closeDrawer()">Close</zen-button>
          </zen-drawer-footer>
        </zen-drawer>
      </div>
    </div>
  `;
}

export const All = Template.bind({});
All.args = args;
