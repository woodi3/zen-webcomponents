import { argTypes } from './argTypes';
import { createStoryArgs } from '../../utils/utils';

export default {
    title: 'Zen Avatar',
    argTypes
};

const args = createStoryArgs(argTypes);

const Template = ({
    imgSrc,
    fallbackSrc,
    altText,
    initials,
    size
}) => {
    return /*html*/`
    <zen-avatar imgSrc="${imgSrc}" 
        fallbackSrc="${fallbackSrc}" 
        altText="${altText}"
        initials="${initials}"
        size="${size}">
    </zen-avatar>
  `;
}

export const All = Template.bind({});
All.args = args;
