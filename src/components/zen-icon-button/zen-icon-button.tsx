import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-icon-button',
  styleUrl: 'zen-icon-button.css',
  shadow: true,
})
export class ZenIconButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
