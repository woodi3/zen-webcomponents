import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-spinner',
  styleUrl: 'zen-spinner.css',
  shadow: true,
})
export class ZenSpinner {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
