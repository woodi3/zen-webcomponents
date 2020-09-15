export const argTypes = {
    altText: {
        description: 'Sets the alt text for the avatar.',
        control: {
            type: 'text'
        }
    },
    imgSrc: {
        description: 'Sets the source for the avatar.',
        control: {
            type: 'text'
        }
    },
    fallback: {
        description: 'Sets the fallback source if the original source errors.',
        control: {
            type: 'text'
        }
    },
    initials: {
        description: 'Uses initials.',
        control: {
            type: 'text'
        }
    },
    size: {
        description: 'Sets the size of the avatar.',
        defaultValue: 'md',
        control: {
            type: 'select',
            options: ['sm', 'md', 'lg']
        }
    }
};