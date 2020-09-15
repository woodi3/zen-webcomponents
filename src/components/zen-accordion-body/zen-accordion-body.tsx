import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'zen-accordion-body',
  styleUrl: 'zen-accordion-body.css'
})
export class ZenAccordionBody {

  render() {
    return (
      <Host class={this.getClasses()}>
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }

  private getClasses (): string {
    return `accordion-body`;
  }

}
