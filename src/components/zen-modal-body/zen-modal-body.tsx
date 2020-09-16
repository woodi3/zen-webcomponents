import { Component, h } from '@stencil/core';

@Component({
  tag: 'zen-modal-body',
  styleUrl: 'zen-modal-body.css'
})
export class ZenModalBody {

  render() {
    return (
      <div class={this.getClasses()}>
        <slot></slot>
      </div>
    );
  }

  private getClasses (): string {
    return `modal-body`;
  }

}
