import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-accordion-pane',
  styleUrl: 'zen-accordion-pane.css',
  shadow: true,
})
export class ZenAccordionPane {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
