import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-avatar',
  styleUrl: 'zen-avatar.css',
  shadow: true,
})
export class ZenAvatar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
