import { argTypes } from './argTypes';
import { createStoryArgs } from '../../utils/utils';

export default {
    title: 'Zen Modal',
    argTypes
};

const args = createStoryArgs(argTypes);

const Template = ({}) => {
    return /*html*/`
    <zen-button onclick="openModal()">Open Modal</zen-button>
    <div id="modal-container">
    </div>
  `;
}

export const All = Template.bind({});
All.args = args;
