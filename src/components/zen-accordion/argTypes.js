export const argTypes = {
    allowToggle: {
        description: 'Allows pane to be toggled open or closed.',
        control: {
            type: 'boolean'
        }
    },
    maxHeight: {
        description: 'Sets the max height of the accordion body for every pane.',
        defaultValue: '150px',
        control: {
            type: 'text'
        }
    }
};