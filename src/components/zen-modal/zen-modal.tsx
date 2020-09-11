import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-modal',
  styleUrl: 'zen-modal.css',
  shadow: true,
})
export class ZenModal {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
