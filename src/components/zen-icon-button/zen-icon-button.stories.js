import { argTypes } from './argTypes';
import { createStoryArgs } from '../../utils/utils';

export default {
    title: 'Zen Icon Button',
    argTypes
};

const args = createStoryArgs(argTypes);

const Template = ({ size, icon, accent, primary, label }) => {
    return /*html */`
  <zen-icon-button accent=${accent} 
    label="${label}" 
    icon="${icon}" 
    size="${size}" 
    primary=${primary}></zen-icon-button>
  `;
}

export const All = Template.bind({});
All.args = args;
