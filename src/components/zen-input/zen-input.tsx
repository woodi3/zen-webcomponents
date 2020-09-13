import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { getSize } from '../../utils/utils';

@Component({
  tag: 'zen-input',
  styleUrl: 'zen-input.css'
})
export class ZenInput {
  
  @Prop() ariaLabel: string;
  @Prop() ariaLabelledBy: string;
  @Prop() disabled: boolean;
  @Prop() inputId: string;
  @Prop() invalid: boolean;
  @Prop() isReadOnly: boolean;
  @Prop() max: number;
  @Prop() maxLength: number;
  @Prop() min: number;
  @Prop() minLength: number;
  @Prop() name: string;
  @Prop() placeholder: string;
  @Prop() required: boolean;
  @Prop() size: string = 'md';
  @Prop() type: string = 'text';
  @Prop() variant: 'outline' | 'flushed' | 'unstyled' = 'outline';
  @Prop() value: string = '';

  @Watch('variant')
  validateVariant(newValue: string) {
    if (newValue != undefined) {
      if (newValue != 'flushed' && newValue != 'outline' && newValue != 'unstyled') {
        throw new Error(`invalid input variant used: ${newValue}`);
      }
    }
  }
  

  render() {
    return (
      <Host class={this.getClasses()}>
        <input 
          aria-label={this.ariaLabel}
          aria-labelledby={this.ariaLabelledBy}
          aria-disabled={this.disabled}
          aria-invalid={this.invalid}
          disabled={this.disabled}
          id={this.inputId}
          max={this.max}
          maxLength={this.maxLength}
          min={this.min}
          minLength={this.minLength}
          name={this.name}
          placeholder={this.placeholder}
          readOnly={this.isReadOnly}
          required={this.required}
          type={this.type}
          value={this.value}
        />
      </Host>
    );
  }

  private getClasses (): string {
    return `zen-input ${this.variant} ${getSize(this.size)}${this.disabled ? ' disabled': ''}${this.required ? ' required':''}`;
  }
}