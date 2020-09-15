import { argTypes } from './argTypes';
import { createStoryArgs } from '../../utils/utils';
import { ZenAccordion } from './zen-accordion';

export default {
    title: 'Zen Accordion',
    argTypes
};

const args = createStoryArgs(argTypes);

const Template = ({
    allowToggle,
    maxHeight
}) => {
    return /*html*/`
    <zen-accordion>
        <zen-accordion-pane>
            <zen-accordion-header>Header 1</zen-accordion-header>
            <zen-accordion-body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </zen-accordion-body>
        </zen-accordion-pane>
        <zen-accordion-pane>
            <zen-accordion-header>Header 2</zen-accordion-header>
            <zen-accordion-body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </zen-accordion-body>
        </zen-accordion-pane>
        <zen-accordion-pane>
            <zen-accordion-header>Header 3</zen-accordion-header>
            <zen-accordion-body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </zen-accordion-body>
        </zen-accordion-pane>
    </zen-accordion>
  `;
}

export const All = Template.bind({});
All.args = args;
