import { argTypes } from './argTypes';
import { createStoryArgs } from '../../utils/utils';

export default {
    title: 'Zen Modal',
    argTypes
};

const args = createStoryArgs(argTypes);

const Template = ({centered, size, overlay}) => {
    return /*html*/`
    <div>
      <h4>Zen Modal</h4>
      <zen-button onclick="openModal()">Open Modal</zen-button>
      <div id="modal-container">
        <zen-modal id="modal" centered=${centered} overlay=${overlay} size=${size}>
          <zen-modal-header>
            <h4>Basic Header</h4>
          </zen-modal-header>
          <zen-modal-body>
            <p>A body</p>
          </zen-modal-body>
          <zen-modal-footer>
            <zen-button primary plain onclick="closeModal()">Primary</zen-button>
            <zen-button accent plain onclick="closeModal()">Accent</zen-button>
            <zen-button plain onclick="closeModal()">Close</zen-button>
          </zen-modal-footer>
        </zen-modal>
      </div>
    </div>
  `;
}

export const All = Template.bind({});
All.args = args;
