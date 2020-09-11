export default {
  title: 'Zen Button',
  parameters: {
    actions: {
      handles: ['click']
    }
  },
  argTypes: {
    size: {
      description: "Sets the button's size to the appropriate values",
      defaultValue: 'md',
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      }
    },
    disabled: {
      description: "Disables the button.",
      control: {
        type: 'boolean'
      },
      defaultValue: 'false'
    }
  },
};

const Template = ({size, disabled}) => {
  return /*html */`
  <zen-button disabled=${disabled} size=${size}>Default button</zen-button>
  <zen-button disabled=${disabled} size=${size} primary>Primary button</zen-button>
  <zen-button disabled=${disabled} size=${size} accent>Accent button</zen-button>
  `;
}

export const All = Template.bind({});
All.args = { size: 'md', disabled: false };

// export function All () {
//   return /*html */`
//   <zen-button>Default button</zen-button>
//   <zen-button primary>Primary button</zen-button>
//   <zen-button accent>Accent button</zen-button>
//   `;
// };
// export function Size () {
//   return /*html*/ `
//   <zen-button size="sm">Small button</zen-button>
//   <zen-button primary size="sm">Small button</zen-button>
//   <zen-button accent size="sm">Small button</zen-button>
//   <zen-button size="lg">Large button</zen-button>
//   <zen-button primary size="lg">Large button</zen-button>
//   <zen-button accent size="lg">Large button</zen-button>
//   `;
// };
// export function Disabled () {
//   return /*html*/ `
//   <zen-button disabled>Disabled button</zen-button>
//   <zen-button disabled primary>Disabled button</zen-button>
//   <zen-button disabled accent>Disabled button</zen-button>
//   `;
// }