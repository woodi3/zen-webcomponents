export const argTypes = {
    centered: {
        description: 'Centers the modal.',
        control: {
            type: 'boolean'
        }
    },
    closeOnOverlayClick: {
        description: 'Allows the modal to be closed when clicking overlay. Overlay prop must be true.',
        control: {
            type: 'boolean'
        }
    },
    height: {
        description: 'Sets the height of the modal content.',
        defaultValue: '100%',
        control: {
            type: 'text'
        }
    },
    overlay: {
        description: 'Shows overlay when modal is opened.',
        defaultValue: true,
        control: {
            type: 'boolean'
        }
    },
    size: {
        description: 'Sets the size of the modal.',
        defaultValue: 'md',
        control: {
            type: 'select',
            options: ['sm', 'md', 'lg']
        }
    }
};