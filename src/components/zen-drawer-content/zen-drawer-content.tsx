import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-drawer-content',
  styleUrl: 'zen-drawer-content.css',
  shadow: true,
})
export class ZenDrawerContent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
