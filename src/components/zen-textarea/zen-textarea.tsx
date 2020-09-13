import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'zen-textarea',
  styleUrl: 'zen-textarea.css'
})
export class ZenTextarea {

  @Prop() ariaLabel: string;
  @Prop() ariaLabelledBy: string;
  @Prop() disabled: boolean;
  @Prop() inputId: string;
  @Prop() invalid: boolean;
  @Prop() isReadOnly: boolean;
  @Prop() maxLength: number;
  @Prop() minLength: number;
  @Prop() name: string;
  @Prop() placeholder: string;
  @Prop() required: boolean;
  @Prop() resize: 'horizontal' | 'vertical' | 'none' = 'vertical';
  @Prop() value: string = '';
  @Prop() variant: 'outline' | 'flushed' | 'unstyled' = 'outline';

  render() {
    return (
      <Host class={this.getClasses()}>
        <textarea
          aria-label={this.ariaLabel}
          aria-labelledby={this.ariaLabelledBy}
          aria-disabled={this.disabled}
          aria-invalid={this.invalid}
          disabled={this.disabled}
          id={this.inputId}
          maxLength={this.maxLength}
          minLength={this.minLength}
          name={this.name}
          placeholder={this.placeholder}
          readOnly={this.isReadOnly}
          required={this.required}
          value={this.value}
        ></textarea>
      </Host>
    );
  }

  private getClasses(): string {
    return `zen-textarea ${this.variant} ${this.resize}${this.invalid ? ' invalid' : ''}${this.disabled ? ' disabled' : ''}${this.required ? ' required' : ''}`;
  }

}
