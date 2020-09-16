import { Component, Host, h, Prop } from '@stencil/core';
import { getSize } from '../../utils/utils';

@Component({
  tag: 'zen-spinner',
  styleUrl: 'zen-spinner.css'
})
export class ZenSpinner {

  @Prop() size: string = 'md';
  @Prop() accent: boolean;
  @Prop() label: string = 'Content is loading...';

  render() {
    return (
      <Host class={this.getClasses()}>
        <div class="loader">
          <span class="sr-only">{this.label}</span>
        </div>
      </Host>
    );
  }

  private getClasses (): string {
    return `zen-spinner ${getSize(this.size)}${this.accent ? ' accent' : ''}`;
  }

}
