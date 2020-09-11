import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-code',
  styleUrl: 'zen-code.css',
  shadow: true,
})
export class ZenCode {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
