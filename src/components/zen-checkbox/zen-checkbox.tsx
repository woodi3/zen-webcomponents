import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-checkbox',
  styleUrl: 'zen-checkbox.css',
  shadow: true,
})
export class ZenCheckbox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
