import { argTypes } from './argTypes';

export default {
    title: 'Zen Flex',
    argTypes
};

const args = {};
Object.keys(argTypes).map(key => {
    const val = argTypes[key];
    const isBoolean = val.control.type == 'boolean';
    const hasDefault = val.defaultValue != undefined;
    args[key] = isBoolean ? false
        : (
            hasDefault ? val.defaultValue : ''
        );
});

const Template = ({
    align,
    direction,
    justify,
    wrap
}) => {
    return /*html*/`
    <zen-flex align="${align}" 
        direction="${direction}"
        justify="${justify}"
        wrap="${wrap}"> 
        <div style="flex: 0 0 33%; background-color: blue; height: 100px;">
            Some content
        </div>
        <div style="flex: 0 0 33%; background-color: red; height: 50px; margin: 0 .5rem 0 .5rem;">
            Some content
        </div>
        <div style="flex: 0 0 33%; background-color: yellow; height: 150px;">
            Some content
        </div>
    </zen-flex>
  `;
}

export const All = Template.bind({});
All.args = args;
