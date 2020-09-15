import { Component, Host, h, Prop, State, Watch } from '@stencil/core';
import { Breakpoint, BREAK_POINTS } from './utils';

const MAX_COLUMNS = 16;

@Component({
  tag: 'zen-column',
  styleUrl: 'zen-column.css'
})
export class ZenColumn {

  @Prop() span: string | number = 'auto';
  @Prop() pull: string | number;
  @Prop() push: string | number;
  @Prop() breakpoints: Breakpoint[] = [];

  @State() windowDimensions: {innerWidth: number, innerHeight: number};
  @Watch('windowDimensions')
  watchWindowDimensionsHandler() {
    this.setStyles(this.span, this.pull, this.push, this.breakpoints);
  }

  @State() internalStyle: any = {};


  componentWillLoad() {
    // hook up window listener
    this.setResizeListener();
    this.handleResize();
  }
  disconnectedCallback() {
    this.removeResizeListener();
  }

  render() {
    return (
      <Host class={this.getClasses()} style={this.internalStyle}>
        <slot></slot>
      </Host>
    );
  }

  private getClasses (): string {
    return `zen-column`;
  }

  private setResizeListener () {
    window.addEventListener('resize', this.handleResize.bind(this));
  }
  private removeResizeListener () {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }
  /**
   * Sets the dimensions of the current window size.
   */
  private handleResize () {
    this.windowDimensions = {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth
    };
  }
  /**
   * Sets the internal style for the component.
   * TODO: generate class on the fly
   * @param span the amount of columns to span
   * @param pull the amount of columns to pull (margin right)
   * @param push the amount of columns to push (margin left)
   * @param breakpoints set different span, push, or pull based on breakpoints. Overrides the other values.
   */
  private setStyles(span: string | number, pull?: string | number, push?: string | number, breakpoints?: Breakpoint[]) {
    // usage of 'var' is intended
    // use breakpoints if they exist
    if (breakpoints.length > 0) {
      var breakpointKey = this.getBreakpointKey();
      var statisfiedBreakpoint = breakpoints.find(function matchBreakpoint(breakpoint: Breakpoint) {
        return breakpoint.size == breakpointKey;
      });
      if (statisfiedBreakpoint) {
        var flex = `0 0 ${this.getPercentage(statisfiedBreakpoint.span)}`;
        if (statisfiedBreakpoint.pull != undefined) {
          var marginRight = this.getPercentage(statisfiedBreakpoint.pull);
        }
        if (statisfiedBreakpoint.push != undefined) {
          var marginLeft = this.getPercentage(statisfiedBreakpoint.push);
        }
      } else {
        console.warn('zen-component(warning): No breakpoint found!');
      }
    } else {
      if (span == 'auto') {
        var flex = '0 1 auto';
      } else {
        var flex = `0 0 ${this.getPercentage(span)}`;
      }
      if (pull != undefined) {
        var marginRight = this.getPercentage(pull);
      }
      if (push != undefined) {
        var marginLeft = this.getPercentage(push);
      }
    }
    // set the styles
    this.internalStyle = {
      flex,
      marginLeft,
      marginRight
    };
  }
  /**
   * Calculate percentage (some value / 16)
   * @param someValue value to get percentage out of 16
   */
  private getPercentage(someValue: string | number): string {
    var parsedValue = parseInt(someValue.toString(), 10);
    if (parsedValue > MAX_COLUMNS) {
      console.log(`zen-component(warning): Tried to use value greater than max columns: (${MAX_COLUMNS}). Using max columns value.`);
      parsedValue = MAX_COLUMNS;
    }
    var percentage = Math.floor((parsedValue / MAX_COLUMNS) * 100);
    return `${percentage}%`;
  }
  /**
   * Get the current breakpoint based on screen width
   */
  private getBreakpointKey(): string {
    var width = this.windowDimensions.innerWidth;
    var satisfiedBreakpoints = Object.keys(BREAK_POINTS).filter(function dimensionsMatch(breakpointKey) {
      var [min, max] = BREAK_POINTS[breakpointKey];
      return width >= min && width <= max;
    });
    return satisfiedBreakpoints[0];
  }

}
