import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'zen-button',
  styleUrl: 'zen-button.css'
})
export class ZenButton {

  @Prop() primary: boolean;
  @Prop() accent: boolean;
  @Prop() size: string; 
  @Prop() disabled: boolean;

  render() {
    return (
      <Host class={this.getClassName()}>
        <button disabled={this.disabled}>
          <slot></slot>
        </button>
      </Host>
    );
  }

  private getClassName(): string {
    const color = this.getBackgroundColor();
    const size = this.getSize();
    function disabledText () {
      return this.disabled ? 'disabled' : 'enabled';
    }

    return `zen-btn ${color} ${size} ${disabledText.call(this)}`;
  }
  private getBackgroundColor() {
    let color = 'default';
    if (this.primary) {
      color = 'primary';
    } else if (this.accent) {
      color = 'accent';
    }
    return color;
  }
  private getSize(): string {
    switch (this.size) {
      case 'sm':
      case 'small':
        return 'sm';
      case 'lg':
      case 'large':
        return 'lg';
      default:
        return 'md';
    }
  }

}
