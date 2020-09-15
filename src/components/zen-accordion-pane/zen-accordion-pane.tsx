import { Component, Host, h, Prop } from '@stencil/core';
import { generatePaneId } from './utils/newId';

@Component({
  tag: 'zen-accordion-pane',
  styleUrl: 'zen-accordion-pane.css'
})
export class ZenAccordionPane {

  @Prop() open: boolean;
  _id: string;

  componentWillLoad() {
    this._id = generatePaneId();
  }

  render() {
    return (
      <Host id={this._id} class={this.getClasses()}>
        <slot></slot>
      </Host>
    );
  }

  private getClasses (): string {
    return `accordion-pane ${this.open ? 'open' : 'closed'}`;
  }

}
