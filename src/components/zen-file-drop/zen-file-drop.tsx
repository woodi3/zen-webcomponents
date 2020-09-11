import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-file-drop',
  styleUrl: 'zen-file-drop.css',
  shadow: true,
})
export class ZenFileDrop {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
