import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-input-group',
  styleUrl: 'zen-input-group.css',
  shadow: true,
})
export class ZenInputGroup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
