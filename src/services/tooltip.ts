import { getArrayFromNodeList } from '../utils/utils';
const TOOLTIP_DATA_TAG = 'data-zen-tooltip';
const MOUSE_EVENT_DELAY = 250;
const TOOLTIP_PADDING = 12;

export class TooltipService {
    init () {
        const tooltips = this.getAllToolTips();
        console.log(tooltips);
        tooltips.forEach((tooltip) => {
            this.addMouseEvents(tooltip, () => this._createToolTip(tooltip), () => this._removeToolTip(tooltip));
        });
    }
    private getAllToolTips(): HTMLElement[] {
        // will query the entire document looking for the data-zen-tooltip tag
        var nodes = document.querySelectorAll(`[${TOOLTIP_DATA_TAG}`);
        return getArrayFromNodeList(nodes);
    }
    private addMouseEvents(el: HTMLElement, mouseOverFn, mouseOutFn) {
        el.addEventListener('mouseenter', () => {
            setTimeout(mouseOverFn.bind(this), MOUSE_EVENT_DELAY);
        });
        el.addEventListener('mouseleave', () => {
            setTimeout(mouseOutFn.bind(this), MOUSE_EVENT_DELAY);
        });
    }
    private _createToolTip(el: HTMLElement) {
        el.setAttribute('tooltip', el.title);
        el.title = ''; // we don't want the title to collide with the tooltip when it's open
        el.classList.add('zen-tooltip-parent');
        var body = document.body;
        body.style.position = 'relative';

        // create tooltip elements
        var tooltipDiv = document.createElement('div');
        var tooltipSpan = document.createElement('span');
        tooltipDiv.setAttribute('role', 'tooltip');
        tooltipDiv.setAttribute('aria-hidden', 'false');
        tooltipDiv.classList.add('zen-tooltip');

        // set the text for the tooltip
        tooltipSpan.innerHTML = this.getToolTipText(el);

        tooltipDiv.appendChild(tooltipSpan);

        // append the tooltip container to the body
        body.appendChild(tooltipDiv);

        // calculate the tooltip position using the el's top position
        var elDimensions = el.getBoundingClientRect();
        var tooltipDimensions = tooltipDiv.getBoundingClientRect();
        
        // window.scrollY because window could be scrolled and `top` refers to relative position
        var topPos = elDimensions.top + window.scrollY - (tooltipDimensions.height + TOOLTIP_PADDING);
        // TODO
        // SET THE POSITION BASED ON WHERE THE EL IS LOCATED ON THE PAGE
        // SET POSITIONAL CLASSES (top, right, bottom, left) to control the arrow placement
        tooltipDiv.style.top = `${topPos}px`;
        tooltipDiv.style.left = `${elDimensions.left}px`;
    }
    private _removeToolTip(el: HTMLElement) {
        el.title = el.getAttribute("tooltip");
        el.removeAttribute("tooltip");
        document.querySelector(".zen-tooltip").remove();
    }
    private getToolTipText(el: HTMLElement) {
        return el.getAttribute(TOOLTIP_DATA_TAG);
    }
}