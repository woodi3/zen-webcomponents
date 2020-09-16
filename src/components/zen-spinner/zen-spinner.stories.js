import { argTypes } from './argTypes';
import { createStoryArgs } from '../../utils/utils';

export default {
    title: 'Zen Spinner',
    argTypes
};

const args = createStoryArgs(argTypes);

const Template = ({ size, accent, label }) => {
    return /*html */`
  <zen-spinner accent=${accent} label=${label} size=${size}></zen-spinner>
  `;
}

export const All = Template.bind({});
All.args = args;