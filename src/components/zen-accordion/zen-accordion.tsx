import { Component, Host, h, Listen, Element, Prop } from '@stencil/core';

@Component({
  tag: 'zen-accordion',
  styleUrl: 'zen-accordion.css'
})
export class ZenAccordion {

  @Element() root: HTMLZenAccordionElement;

  panes: HTMLZenAccordionPaneElement[];
  openPane: HTMLZenAccordionPaneElement;

  @Prop() allowToggle: boolean;
  @Prop() maxHeight: string = '200px';

  @Listen('toggle', {capture: true})
  handleToggle(evt: CustomEvent<HTMLZenAccordionHeaderElement>) {
    var pane = evt.detail.parentElement as HTMLZenAccordionPaneElement;
    var paneIsClosed = pane['open'] == undefined || pane['open'] == false;
    if (!this.openPane) {
      this.openPane = pane;
      this.openPane['open'] = true;
    }
    else if (this.openPane.id != pane.id && paneIsClosed) {
      // close the current opened pane
      this.openPane['open'] = false;

      this.setPaneBodyAriaHidden(this.openPane, 'true');
      this.setMaxHeight(this.openPane, '0');

      // open new pane
      pane['open'] = true;
      this.openPane = pane;
    }
    else if (this.allowToggle) {
      this.openPane['open'] = false;
      this.setPaneBodyAriaHidden(this.openPane, 'true');
      this.setMaxHeight(this.openPane, '0');
      this.openPane = null;
    }

    if (this.openPane) {
      this.setMaxHeight(this.openPane, this.maxHeight);
      this.setPaneBodyAriaHidden(this.openPane, 'false');
    }
  }

  componentWillLoad() {
    var paneNodes = this.root.querySelectorAll('zen-accordion-pane');
    this.panes = Array.prototype.slice.call(paneNodes);
  }
  componentDidLoad() {
    this.panes.forEach(function initPane(pane) {
      this.setPaneBodyAriaHidden(pane, 'true');
    }.bind(this));
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

  private setMaxHeight (pane: HTMLZenAccordionPaneElement, height: string) {
    var body = pane.querySelector('.accordion-body > div') as HTMLElement;
    body.style.maxHeight = height;
  }

  private setPaneBodyAriaHidden (pane: HTMLZenAccordionPaneElement, val: string) {
    var body = pane.querySelector('.accordion-body > div');
    body.setAttribute('aria-hidden', val);
  }

}
