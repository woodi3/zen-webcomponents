import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-accordion-header',
  styleUrl: 'zen-accordion-header.css',
  shadow: true,
})
export class ZenAccordionHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
