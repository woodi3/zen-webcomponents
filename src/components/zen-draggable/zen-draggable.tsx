import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-draggable',
  styleUrl: 'zen-draggable.css',
  shadow: true,
})
export class ZenDraggable {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
