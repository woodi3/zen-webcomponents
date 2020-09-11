import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-drag-zone',
  styleUrl: 'zen-drag-zone.css',
  shadow: true,
})
export class ZenDragZone {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
