import { Component, Host, h } from '@stencil/core';
import { setFirstFocusableElement, setLastFocusableElement } from '../../utils/utils';

@Component({
  tag: 'zen-focus-lock'
})
export class ZenFocusLock {

  startLockRef: HTMLDivElement;
  endLockRef: HTMLDivElement;
  contentRef: HTMLDivElement;

  componentDidLoad () {
    if (this.contentRef) {
      const setFocus = this._setFirstFocusableElement();
      if (!setFocus) {
        this.contentRef.focus();
      }
    }
  }

  render() {
    return (
      <Host>
        <div tabIndex={0} ref={(el) => this.startLockRef = el} onFocus={this._setLastFocusableElement.bind(this)}></div>
        <div ref={(el) => this.contentRef = el}>
          <slot></slot>
        </div>
        <div tabIndex={0} ref={(el) => this.endLockRef = el} onFocus={this._setFirstFocusableElement.bind(this)}></div>
      </Host>
    );
  }

  private _setFirstFocusableElement() {
    return setFirstFocusableElement(document, this.contentRef);
  }
  private _setLastFocusableElement () {
    setLastFocusableElement(document, this.contentRef);
  }

}
