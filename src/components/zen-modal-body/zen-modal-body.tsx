import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-modal-body',
  styleUrl: 'zen-modal-body.css',
  shadow: true,
})
export class ZenModalBody {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
