import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-link',
  styleUrl: 'zen-link.css',
  shadow: true,
})
export class ZenLink {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
