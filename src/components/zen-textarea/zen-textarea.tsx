import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-textarea',
  styleUrl: 'zen-textarea.css',
  shadow: true,
})
export class ZenTextarea {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
