export const argTypes = {
    align: {
        description: 'Sets the align-items property for flex-box.',
        control: {
            type: 'select',
            options: ['baseline', 'center', 'flex-end', 'flex-start', 'stretch']
        }
    },
    direction: {
        description: 'Sets the flex-direction property for flex-box.',
        defaultValue: 'row',
        control: {
            type: 'select',
            options: ['column', 'column-reverse', 'row', 'row-reverse']
        }
    },
    justify: {
        description: 'Sets the justify-content property for flex-box.',
        control: {
            type: 'select',
            options: ['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'space-evenly']
        }
    },
    wrap: {
        description: 'Sets the flex-wrap property for flex-box.',
        defaultValue: 'nowrap',
        control: {
            type: 'select',
            options: ['nowrap', 'wrap', 'wrap-reverse']
        }
    },
};