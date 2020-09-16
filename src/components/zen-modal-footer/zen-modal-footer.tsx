import { Component, h } from '@stencil/core';

@Component({
  tag: 'zen-modal-footer',
  styleUrl: 'zen-modal-footer.css'
})
export class ZenModalFooter {

  render() {
    return (
      <footer class={this.getClasses()}>
        <slot></slot>
      </footer>
    );
  }

  private getClasses (): string {
    return `modal-footer`;
  }

}
