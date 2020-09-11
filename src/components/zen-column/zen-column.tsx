import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-column',
  styleUrl: 'zen-column.css',
  shadow: true,
})
export class ZenColumn {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
