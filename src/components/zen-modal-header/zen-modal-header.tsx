import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'zen-modal-header',
  styleUrl: 'zen-modal-header.css'
})
export class ZenModalHeader {

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
    return `modal-header`;
  }
  private handleClose () {
    this.close.emit();
  }

}
