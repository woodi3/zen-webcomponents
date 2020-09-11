import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-input-icon',
  styleUrl: 'zen-input-icon.css',
  shadow: true,
})
export class ZenInputIcon {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
