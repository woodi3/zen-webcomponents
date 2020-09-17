import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';
import { getSize } from '../../utils/utils';

@Component({
  tag: 'zen-drawer',
  styleUrl: 'zen-drawer.css'
})
export class ZenDrawer {

  @Element() root: HTMLZenDrawerElement;

  @Event() close: EventEmitter<void>;

  @Prop() closeOnOverlayClick: boolean = true;
  @Prop() fullscreen: boolean;
  @Prop() placement: 'top' | 'bottom' | 'left' | 'right' = 'right';
  @Prop() open: boolean;
  @Prop() overlay: boolean = true;
  @Prop() size: string = 'md';


  drawerContentRef: HTMLDivElement;

  renderOverlay () {
    return (
      <div class={`drawer-overlay${this.open ? ' open' : ''}`} onClick={this.overlayClick.bind(this)}></div>
    );
  }

  render() {
    return (
      <Host class={this.getClasses()}>
        {this.overlay ? this.renderOverlay() : null}
        <zen-focus-lock>
          <div class={this.getDrawerContentClasses()} 
            ref={(el) => this.drawerContentRef = el}>
            <slot></slot>
          </div>
        </zen-focus-lock>
      </Host>
    );
  }

  private getClasses (): string {
    var size = getSize(this.size);
    if (this.fullscreen) {
      size = 'full'
    }
    return `zen-drawer ${this.placement} ${size}`
  }
  private overlayClick () {
    if (this.closeOnOverlayClick) {
      this.close.emit();
    }
  }
  private getDrawerContentClasses (): string {
    return `drawer-content ${this.open ? 'open' : 'closed'}`;
  }

}
