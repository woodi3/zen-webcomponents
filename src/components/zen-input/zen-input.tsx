import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-input',
  styleUrl: 'zen-input.css',
  shadow: true,
})
export class ZenInput {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
