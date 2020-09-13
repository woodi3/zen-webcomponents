import { argTypes } from './argTypes';

export default {
    title: 'Zen Textarea',
    argTypes,
    parameters: {
        actions: {
            handles: ['input']
        }
    }
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
    ariaLabel,
    ariaLabelledBy,
    disabled,
    id,
    invalid,
    maxLength,
    minLength,
    name,
    placeholder,
    isReadOnly,
    required,
    resize,
    value,
    variant
}) => {
    return /*html*/`
    <zen-textarea ariaLabel="${ariaLabel}"
        ariaLabelledBy="${ariaLabelledBy}"
        disabled="${disabled}"
        id="${id}"
        invalid="${invalid}"
        maxLength="${maxLength}"
        minLength="${minLength}"
        name="${name}"
        placeholder="${placeholder}"
        isReadOnly="${isReadOnly}"
        required="${required}"
        resize="${resize}"
        value="${value}"
        variant="${variant}"
    ></zen-textarea>
  `;
}

export const All = Template.bind({});
All.args = args;
