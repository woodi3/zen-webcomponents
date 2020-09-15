import { Component, Host, h, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'zen-image',
  styleUrl: 'zen-image.css'
})
export class ZenImage {

  @Prop() imgSrc: string;
  @Watch('imgSrc')
  updateInternalSrc(newValue: string) {
    this._src = newValue;
  }
  @State() _src: string;

  @Prop() fallbackSrc: string;
  @Prop() altText: string;

  componentWillLoad() {
    this._src = this.imgSrc;
  }

  render() {
    return (
      <Host class={this.getClasses()}>
        <img alt={this.altText} src={this._src} onError={this.useFallbackOnError.bind(this)}/>
      </Host>
    );
  }

  private getClasses () {
    return 'zen-image';
  }

  private useFallbackOnError () {
    if (this._src != this.fallbackSrc) {
      this._src = this.fallbackSrc
    }
  }

}
