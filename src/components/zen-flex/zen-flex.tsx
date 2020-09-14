import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'zen-flex',
  styleUrl: 'zen-flex.css'
})
export class ZenFlex {
  
  @Prop() justify: 
    'center' | 
    'space-between' |
    'space-around' | 
    'space-evenly' |
    'flex-start' |
    'flex-end';
  @Prop() align: 
    'stretch' |
    'center' |
    'flex-start' |
    'flex-end' |
    'baseline';
  @Prop() direction: 
    'row' |
    'row-reverse' |
    'column' |
    'column-reverse' = 'row';
  @Prop() wrap: 
    'wrap' |
    'nowrap' |
    'wrap-reverse' = 'nowrap';

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
    return `zen-flex${this.getJustify()}${this.getAlign()}${this.getDirection()}${this.getFlexWrap()}`;
  }
  private getJustify (): string {
    var hasJustify = this.stringExists(this.justify);
    return this.thisOrThat(hasJustify, ` j-${this.justify}`, '');
  }
  private getAlign (): string {
    var hasAlign = this.stringExists(this.align);
    return this.thisOrThat(hasAlign, ` a-${this.align}`, '');
  }
  private getDirection (): string {
    return ` d-${this.direction.toLowerCase()}`;
  }
  private getFlexWrap (): string {
    return ` w-${this.wrap.toLowerCase()}`;
  }
  private thisOrThat (bool, t, that) {
    return bool ? t.toLowerCase() : that.toLowerCase();
  }
  private stringExists (val: string): boolean {
    return val != undefined && val.trim() != '';
  }
}
