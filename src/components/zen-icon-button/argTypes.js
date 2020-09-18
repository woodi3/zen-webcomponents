export const argTypes = {
    accent: {
        description: "Uses accent color.",
        control: {
            type: 'boolean'
        }
    },
    icon: {
        description: "Picks the icon to use. If icon does not exist, a warning is logged.",
        defaultValue: 'copy',
        control: {
            type: 'text'
        }
    },
    primary: {
        description: "Uses primary color.",
        control: {
            type: 'boolean'
        }
    },
    label: {
        description: "The label to use for screen readers.",
        control: {
            type: 'text'
        }
    },
    size: {
        description: "Sets the icon and button size to the appropriate values",
        defaultValue: 'md',
        control: {
            type: 'select',
            options: ['sm', 'md', 'lg'],
        }
    }
};