import { Component, h } from '@stencil/core';

@Component({
  tag: 'zen-drawer-footer',
  styleUrl: 'zen-drawer-footer.css'
})
export class ZenDrawerFooter {

  render() {
    return (
      <footer class={this.getClasses()}>
        <slot></slot>
      </footer>
    );
  }

  private getClasses (): string {
    return `drawer-footer`;
  }

}
