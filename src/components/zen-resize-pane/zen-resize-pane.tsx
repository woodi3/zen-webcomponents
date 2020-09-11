import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-resize-pane',
  styleUrl: 'zen-resize-pane.css',
  shadow: true,
})
export class ZenResizePane {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
