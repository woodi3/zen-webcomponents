import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-icon',
  styleUrl: 'zen-icon.css',
  shadow: true,
})
export class ZenIcon {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
