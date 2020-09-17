import { Component, h, Event, Prop, EventEmitter } from '@stencil/core';

@Component({
  tag: 'zen-drawer-header',
  styleUrl: 'zen-drawer-header.css'
})
export class ZenDrawerHeader {

  @Event() close: EventEmitter<void>;

  @Prop() showCloseBtn: boolean = true;

  render() {
    return (
      <header class={this.getClasses()}>
        <div>
            <slot></slot>
        </div>
        {
        this.showCloseBtn ? (
            <zen-button class="close-btn"
              onClick={this.handleClose.bind(this)}
              plain
              size="sm">
              <span class="sr-only">Close</span>
              <zen-icon icon="x"></zen-icon>
          </zen-button>
          ) : null
        }
      </header>
    );
  }

  private getClasses (): string {
    return `drawer-header`;
  }
  private handleClose () {
    this.close.emit();
  }

}
