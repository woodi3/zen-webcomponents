import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-radio',
  styleUrl: 'zen-radio.css',
  shadow: true,
})
export class ZenRadio {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
