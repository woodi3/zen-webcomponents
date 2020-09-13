import {argTypes} from './argTypes';

export default {
    title: 'Zen Input',
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
    max,
    maxLength,
    min,
    minLength,
    name,
    placeholder,
    isReadOnly,
    required,
    size,
    type,
    variant,
    value
}) => {
    return /*html*/`
    <zen-input ariaLabel="${ariaLabel}"
        ariaLabelledBy="${ariaLabelledBy}"
        disabled="${disabled}"
        id="${id}"
        invalid="${invalid}"
        max="${max}"
        maxLength="${maxLength}"
        min="${min}"
        minLength="${minLength}"
        name="${name}"
        placeholder="${placeholder}"
        isReadOnly="${isReadOnly}"
        required="${required}"
        size="${size}"
        type="${type}"
        variant="${variant}
        value="${value}"
    />
  `;
}

export const All = Template.bind({});
All.args = args;
