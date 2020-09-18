import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'zen-icon-button',
  styleUrl: 'zen-icon-button.css'
})
export class ZenIconButton {

  @Prop() accent: boolean;
  @Prop() icon: string;
  @Prop() label: string;
  @Prop() primary: boolean;
  @Prop() size: string;
  

  render() {
    return (
      <zen-button accent={this.accent} primary={this.primary} plain size={this.size}>
          <span class="sr-only">{this.label}</span>
          <zen-icon icon={this.icon} size={this.size}></zen-icon>
      </zen-button>
    );
  }

}
