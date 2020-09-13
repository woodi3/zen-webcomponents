export const argTypes = {
    ariaLabel: {
        description: 'Sets the aria-label attribute on the textarea.',
        control: {
            type: 'text'
        }
    },
    ariaLabelledBy: {
        description: 'Sets the aria-labelledby attribute on the textarea.',
        control: {
            type: 'text'
        }
    },
    disabled: {
        description: 'Sets the aria-disabled and disable attributes on the textarea.',
        control: {
            type: 'boolean'
        }
    },
    inputId: {
        description: 'Sets the id attribute on the textarea.',
        control: {
            type: 'text'
        }
    },
    invalid: {
        description: 'Sets the aria-invalid attribute on the textarea.',
        control: {
            type: 'boolean'
        }
    },
    isReadOnly: {
        description: 'Sets the readOnly attribute on the textarea.',
        control: {
            type: 'boolean'
        }
    },
    maxLength: {
        description: 'Sets the maxLength attribute on the textarea.',
        control: {
            type: 'number'
        }
    },
    minLength: {
        description: 'Sets the minLength attribute on the textarea.',
        control: {
            type: 'number'
        }
    },
    name: {
        description: 'Sets the name attribute on the textarea.',
        control: {
            type: 'text'
        }
    },
    placeholder: {
        description: 'Sets the placeholder attribute on the textarea.',
        control: {
            type: 'text'
        }
    },
    required: {
        description: 'Sets the required attribute on the textarea.',
        control: {
            type: 'boolean'
        }
    },
    resize: {
        description: 'Sets the resize direction of the textarea.',
        defaultValue: 'vertical',
        control: {
            type: 'select',
            options: ['horizontal', 'vertical', 'none']
        }
    },
    value: {
        description: 'The textarea value.',
        control: {
            type: 'text'
        }
    },
    variant: {
        description: 'Chooses the textarea variant.',
        defaultValue: 'outline',
        control: {
            type: 'select',
            options: ['flushed', 'outline', 'unstyled']
        }
    },
};