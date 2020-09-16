import { Component, Host, h, Prop, Element, Event, EventEmitter } from '@stencil/core';
import { setLastFocusableElement, setFirstFocusableElement, getSize, listenForEscape, getArrayFromNodeList, focusableElementStr } from '../../utils/utils';

@Component({
  tag: 'zen-modal',
  styleUrl: 'zen-modal.css'
})
export class ZenModal {

  @Element() root: HTMLZenModalElement;

  @Event() close: EventEmitter<void>;

  @Prop() centered: boolean;
  @Prop() closeOnOverlayClick: boolean = true;
  @Prop() height: string = '100%';
  @Prop() open: boolean;
  @Prop() overlay: boolean = true;
  @Prop() size: string = 'md';

  startLockRef: HTMLDivElement;
  endLockRef: HTMLDivElement;
  modalContentRef: HTMLDivElement;

  elementThatTriggered: HTMLElement;

  renderOverlay () {
    return (
      <div class="modal-overlay" onClick={this.overlayClick.bind(this)}></div>
    );
  }

  componentDidLoad () {
    document.body.classList.add('zen-no-scroll');
    this.elementThatTriggered = document.activeElement as HTMLElement;
    this.setAriaHidden();
    if (this.modalContentRef) {
        const setFocus = this._setFirstFocusableElement();
        if (!setFocus) {
          this.modalContentRef.focus();
        }
        listenForEscape(this.modalContentRef, this.handleEscapeClick.bind(this));
    }
  }
  disconnectedCallback () {
    document.body.classList.remove('zen-no-scroll');
    this.removeAriaHidden();
    if (this.elementThatTriggered) {
      this.elementThatTriggered.focus();
    }
  }

  render() {
    return (
      <Host class={this.getClasses()}>
        {this.overlay ? this.renderOverlay() : null}
        <div tabIndex={0} ref={(el) => this.startLockRef = el} onFocus={this._setLastFocusableElement.bind(this)}></div>
        <div class={this.getModalContentClasses()} 
          ref={(el) => this.modalContentRef = el}
          style={{height: this.height }}>
          <slot></slot>
        </div>
        <div tabIndex={0} ref={(el) => this.endLockRef = el} onFocus={this._setFirstFocusableElement.bind(this)}></div>
      </Host>
    );
  }

  private getClasses (): string {
    return `zen-modal`;
  }
  private getModalContentClasses (): string {
    return `modal-content ${getSize(this.size)}${this.centered ? ' centered' : ''}`;
  }
  private overlayClick () {
    if (this.closeOnOverlayClick) {
      this.close.emit();
    }
  }
  private _setFirstFocusableElement() {
    return setFirstFocusableElement(document, this.modalContentRef);
  }
  private _setLastFocusableElement () {
    setLastFocusableElement(document, this.modalContentRef);
  }
  private handleEscapeClick () {
    this.close.emit();
  }
  private getElementsOutsideModal () {
    const allTabbableElements = getArrayFromNodeList(document.querySelectorAll(focusableElementStr));
    const modalFocusableElements = getArrayFromNodeList(this.modalContentRef.querySelectorAll(focusableElementStr));
    return allTabbableElements
      .filter(function isElOutside(el) {
        return modalFocusableElements.findIndex(function elEquals(el2) {
          el2.isEqualNode(el)
        }) < 0;
      });
  }
  private setAriaHidden () {
    const outsideModal = this.getElementsOutsideModal();
    if (outsideModal.length > 0) {
        outsideModal.forEach(el => el.setAttribute('aria-hidden', 'true'));
    }
  }
  private removeAriaHidden () {
    const allTabbableElements = getArrayFromNodeList(document.querySelectorAll(focusableElementStr));
    if (allTabbableElements.length > 0) {
        allTabbableElements.forEach(function hide(el) {
          el.setAttribute('aria-hidden', 'false');
        });
    }
  }
}
