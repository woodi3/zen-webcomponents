export const argTypes = {
    accent: {
        description: "Sets the color of the spinner to your accent color.",
        control: {
            type: 'boolean'
        }
    },
    label: {
        description: "Sets the accessiblity label. This label is positioned off the screen but should be picked up by screen readers.",
        defaultValue: "Content is loading...",
        control: {
            type: 'text'
        }
    },
    size: {
        description: "Sets the spinner's size to the appropriate values.",
        defaultValue: 'md',
        control: {
            type: 'select',
            options: ['sm', 'md', 'lg', 'xl'],
        }
    }    
}