import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-accordion',
  styleUrl: 'zen-accordion.css',
  shadow: true,
})
export class ZenAccordion {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
