import { Component, h } from '@stencil/core';

@Component({
  tag: 'zen-drawer-body',
  styleUrl: 'zen-drawer-body.css'
})
export class ZenDrawerBody {

  render() {
    return (
      <div class={this.getClasses()}>
        <slot></slot>
      </div>
    );
  }

  private getClasses (): string {
    return `drawer-body`;
  }

}
