export const argTypes = {
    closeOnOverlayClick: {
        description: 'Allows the drawer to be closed when clicking overlay. Overlay prop must be true.',
        control: {
            type: 'boolean'
        }
    },
    fullscreen: {
        description: 'Covers entire screen with drawer. Overrides the size prop.',
        control: {
            type: 'boolean'
        }
    },
    open: {
        description: 'Opens the drawer.',
        control: {
            type: 'boolean'
        }
    },
    overlay: {
        description: 'Shows overlay when drawer is opened.',
        defaultValue: true,
        control: {
            type: 'boolean'
        }
    },
    placement: {
        description: 'Sets the placement for the drawer.',
        defaultValue: 'right',
        control: {
            type: 'select',
            options: ['left', 'right', 'top', 'bottom']
        }
    },
    size: {
        description: 'Sets the size of the drawer.',
        defaultValue: 'md',
        control: {
            type: 'select',
            options: ['sm', 'md', 'lg']
        }
    }
};