import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-modal-header',
  styleUrl: 'zen-modal-header.css',
  shadow: true,
})
export class ZenModalHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
