import { Component, Host, h, EventEmitter, Event, Element } from '@stencil/core';

@Component({
  tag: 'zen-accordion-header',
  styleUrl: 'zen-accordion-header.css'
})
export class ZenAccordionHeader {

  @Element() el: HTMLZenAccordionHeaderElement;
  @Event() toggle: EventEmitter<HTMLZenAccordionHeaderElement>; 

  render() {
    return (
      <Host class={this.getClasses()}>
        <div>
          <zen-flex justify="space-between" onClick={this.handleClick.bind(this)}>
            <div>
              <slot></slot>
            </div>
            <zen-icon class="accordion-arrow" icon="chevron-down"></zen-icon>
          </zen-flex>
        </div>
      </Host>
    );
  }

  private getClasses (): string {
    return `accordion-header`;
  }
  private handleClick () {
    this.toggle.emit(this.el);
  }

}
