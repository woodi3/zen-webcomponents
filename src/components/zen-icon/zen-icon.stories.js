export default {
    title: 'Zen Icon',
    argTypes: {
        size: {
            description: "Sets the icon's size to the appropriate values",
            defaultValue: 'md',
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg', 'xl'],
            }
        },
        color: {
            description: "Sets the color of the icon.",
            control: {
                type: 'color'
            },
            defaultValue: 'black'
        },
        icon: {
            description: "Picks the icon to use. If icon does not exist, a warning is logged.",
            control: {
                type: 'text'
            }
        }
    },
};

const Template = ({ size, icon, color }) => {
    return /*html */`
  <zen-icon icon=${icon} size=${size} color=${color}></zen-icon>
  `;
}

export const All = Template.bind({});
All.args = { size: 'md', icon: 'activity', color: 'black' };
