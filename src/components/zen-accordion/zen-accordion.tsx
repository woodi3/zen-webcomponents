import { Component, Host, h, Listen } from '@stencil/core';

@Component({
  tag: 'zen-accordion',
  styleUrl: 'zen-accordion.css'
})
export class ZenAccordion {

  // @Prop() 
  openPane: HTMLZenAccordionPaneElement;

  @Listen('toggle', {capture: true})
  handleToggle(evt: CustomEvent<HTMLZenAccordionHeaderElement>) {
    var pane = evt.detail.parentElement as HTMLZenAccordionPaneElement;
    var paneIsClosed = pane['open'] == undefined || pane['open'] == false;
    if (!this.openPane) {
      this.openPane = pane;
      this.openPane['open'] = true;
    }
    else if (this.openPane.id != pane.id && paneIsClosed) {
      // open the pane and close the open pane
      this.openPane['open'] = false;
      pane['open'] = true;
      this.openPane = pane;
    }
  }

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
    return `zen-accordion`;
  }

}
