import { argTypes } from './argTypes';
import { createStoryArgs } from '../../utils/utils';

export default {
    title: 'Zen Column',
    argTypes
};

const args = createStoryArgs(argTypes);

const Template = ({
    span,
    push,
    pull,
    breakpoints
}) => {
    return /*html*/`
    <zen-flex>
        <zen-column span="${span}" push="${push}" pull="${pull}" breakpoints=${breakpoints}>
            <div style="background-color: red;">A column</div>
        </zen-column>
    </zen-flex>
  `;
}

export const All = Template.bind({});
All.args = args;
