import { Component, Host, h } from '@stencil/core';
import { TooltipService } from '../../services/tooltip';

@Component({
  tag: 'zen-tooltip'
})
export class ZenTooltip {

  _ts: TooltipService;
  componentWillLoad() {
    // TODO
    // figure out best way to handle content that isn't viewable yet
    this._ts = new TooltipService();
    this._ts.init();
  }

  render() {
    return (
      <Host>
      </Host>
    );
  }

}
