export const argTypes = {
    span: {
        description: 'Sets the flex basis property where 16 (100%) is the max columns.',
        control: {
            type: 'text'
        }
    },
    push: {
        description: 'Sets the margin left based on number of columns where 16 is the max.',
        control: {
            type: 'text'
        }
    },
    pull: {
        description: 'Sets the margin right based on number of columns where 16 is the max.',
        control: {
            type: 'text'
        }
    },
    breakpoints: {
        description: 'Sets responsive breakpoints based on screen size. Uses the above properties. If array is set, overrides the above properties.',
        hide: true
    }
};