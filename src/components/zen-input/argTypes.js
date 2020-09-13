export const argTypes = {
    ariaLabel: {
        description: 'Sets the aria-label attribute on the input.',
        control: {
            type: 'text'
        }
    },
    ariaLabelledBy: {
        description: 'Sets the aria-labelledby attribute on the input.',
        control: {
            type: 'text'
        }
    },
    disabled: {
        description: 'Sets the aria-disabled and disable attributes on the input.',
        control: {
            type: 'boolean'
        }
    },
    inputId: {
        description: 'Sets the id attribute on the input.',
        control: {
            type: 'text'
        }
    },
    invalid: {
        description: 'Sets the aria-invalid attribute on the input.',
        control: {
            type: 'boolean'
        }
    },
    isReadOnly: {
        description: 'Sets the readOnly attribute on the input.',
        control: {
            type: 'boolean'
        }
    },
    max: {
        description: 'Sets the max attribute for number inputs.',
        control: {
            type: 'number'
        }
    },
    maxLength: {
        description: 'Sets the maxLength attribute on the input.',
        control: {
            type: 'number'
        }
    },
    min: {
        description: 'Sets the min attribute for number inputs.',
        control: {
            type: 'number'
        }
    },
    minLength: {
        description: 'Sets the minLength attribute on the input.',
        control: {
            type: 'number'
        }
    },
    name: {
        description: 'Sets the name attribute on the input.',
        control: {
            type: 'text'
        }
    },
    placeholder: {
        description: 'Sets the placeholder attribute on the input.',
        control: {
            type: 'text'
        }
    },
    required: {
        description: 'Sets the required attribute on the input.',
        control: {
            type: 'boolean'
        }
    },
    size: {
        description: 'Sets the size of the input.',
        defaultValue: 'md',
        control: {
            type: 'select',
            options: ['sm', 'md', 'lg', 'xl']
        }
    },
    type: {
        description: 'Sets the type attribute on the input.',
        defaultValue: 'text',
        control: {
            type: 'text'
        }
    },
    variant: {
        description: 'Chooses the input variant.',
        defaultValue: 'outline',
        control: {
            type: 'select',
            options: ['flushed', 'outline', 'unstyled']
        }
    },
    value: {
        description: 'The input value.',
        control: {
            type: 'text'
        }
    }
};