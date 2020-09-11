import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-row',
  styleUrl: 'zen-row.css',
  shadow: true,
})
export class ZenRow {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
