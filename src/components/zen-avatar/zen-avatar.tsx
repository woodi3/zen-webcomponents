import { Component, Host, h, Prop } from '@stencil/core';
import { getSize } from '../../utils/utils';

@Component({
  tag: 'zen-avatar',
  styleUrl: 'zen-avatar.css'
})
export class ZenAvatar {

  @Prop() altText;
  @Prop() initials;
  @Prop() imgSrc: string;
  @Prop() fallbackSrc: string;
  @Prop() size: 'sm' | 'small' | 'md' | 'lg' | 'large' = 'md';

  render() {
    if (this.useInitials()) {
      return (
        <Host class={this.getClasses()}>
          <div class="initials">
            {this.initials}
          </div>
        </Host>
      );
    } else {
      return (
        <Host class={this.getClasses()}>
          <zen-image altText={this.altText} imgSrc={this.imgSrc} fallbackSrc={this.fallbackSrc}></zen-image>
        </Host>
      );
    }
  }

  private getClasses () {
    return `zen-avatar ${getSize(this.size)}`
  }

  private useInitials (): boolean {
    if (this.initials != '' && this.initials != undefined && this.imgSrc == undefined) {
      return true;
    }
    return false;
  }

}
