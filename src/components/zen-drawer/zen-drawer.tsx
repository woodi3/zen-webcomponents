import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-drawer',
  styleUrl: 'zen-drawer.css',
  shadow: true,
})
export class ZenDrawer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
