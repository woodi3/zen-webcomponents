/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Breakpoint } from "./components/zen-column/utils";
export namespace Components {
    interface ZenAccordion {
    }
    interface ZenAccordionHeader {
    }
    interface ZenAccordionPane {
    }
    interface ZenAvatar {
        "altText": any;
        "fallbackSrc": string;
        "imgSrc": string;
        "initials": any;
        "size": 'sm' | 'small' | 'md' | 'lg' | 'large';
    }
    interface ZenButton {
        "accent": boolean;
        "disabled": boolean;
        "primary": boolean;
        "size": string;
    }
    interface ZenCheckbox {
    }
    interface ZenCode {
    }
    interface ZenColumn {
        "breakpoints": Breakpoint[];
        "pull": string | number;
        "push": string | number;
        "span": string | number;
    }
    interface ZenDragZone {
    }
    interface ZenDraggable {
    }
    interface ZenDrawer {
    }
    interface ZenFileDrop {
    }
    interface ZenFlex {
        "align": 'stretch' |
    'center' |
    'flex-start' |
    'flex-end' |
    'baseline';
        "direction": 'row' |
    'row-reverse' |
    'column' |
    'column-reverse';
        "justify": 'center' | 
    'space-between' |
    'space-around' | 
    'space-evenly' |
    'flex-start' |
    'flex-end';
        "wrap": 'wrap' |
    'nowrap' |
    'wrap-reverse';
    }
    interface ZenIcon {
        "color": string;
        "icon": string;
        "size": string;
    }
    interface ZenIconButton {
    }
    interface ZenImage {
        "altText": string;
        "fallbackSrc": string;
        "imgSrc": string;
    }
    interface ZenInput {
        "ariaLabel": string;
        "ariaLabelledBy": string;
        "disabled": boolean;
        "inputId": string;
        "invalid": boolean;
        "isReadOnly": boolean;
        "max": number;
        "maxLength": number;
        "min": number;
        "minLength": number;
        "name": string;
        "placeholder": string;
        "required": boolean;
        "size": string;
        "type": string;
        "value": string;
        "variant": 'outline' | 'flushed' | 'unstyled';
    }
    interface ZenInputIcon {
    }
    interface ZenLink {
    }
    interface ZenModal {
    }
    interface ZenModalBody {
    }
    interface ZenModalHeader {
    }
    interface ZenRadio {
    }
    interface ZenResizePane {
    }
    interface ZenRow {
    }
    interface ZenSpinner {
    }
    interface ZenTextarea {
        "ariaLabel": string;
        "ariaLabelledBy": string;
        "disabled": boolean;
        "inputId": string;
        "invalid": boolean;
        "isReadOnly": boolean;
        "maxLength": number;
        "minLength": number;
        "name": string;
        "placeholder": string;
        "required": boolean;
        "resize": 'horizontal' | 'vertical' | 'none';
        "value": string;
        "variant": 'outline' | 'flushed' | 'unstyled';
    }
}
declare global {
    interface HTMLZenAccordionElement extends Components.ZenAccordion, HTMLStencilElement {
    }
    var HTMLZenAccordionElement: {
        prototype: HTMLZenAccordionElement;
        new (): HTMLZenAccordionElement;
    };
    interface HTMLZenAccordionHeaderElement extends Components.ZenAccordionHeader, HTMLStencilElement {
    }
    var HTMLZenAccordionHeaderElement: {
        prototype: HTMLZenAccordionHeaderElement;
        new (): HTMLZenAccordionHeaderElement;
    };
    interface HTMLZenAccordionPaneElement extends Components.ZenAccordionPane, HTMLStencilElement {
    }
    var HTMLZenAccordionPaneElement: {
        prototype: HTMLZenAccordionPaneElement;
        new (): HTMLZenAccordionPaneElement;
    };
    interface HTMLZenAvatarElement extends Components.ZenAvatar, HTMLStencilElement {
    }
    var HTMLZenAvatarElement: {
        prototype: HTMLZenAvatarElement;
        new (): HTMLZenAvatarElement;
    };
    interface HTMLZenButtonElement extends Components.ZenButton, HTMLStencilElement {
    }
    var HTMLZenButtonElement: {
        prototype: HTMLZenButtonElement;
        new (): HTMLZenButtonElement;
    };
    interface HTMLZenCheckboxElement extends Components.ZenCheckbox, HTMLStencilElement {
    }
    var HTMLZenCheckboxElement: {
        prototype: HTMLZenCheckboxElement;
        new (): HTMLZenCheckboxElement;
    };
    interface HTMLZenCodeElement extends Components.ZenCode, HTMLStencilElement {
    }
    var HTMLZenCodeElement: {
        prototype: HTMLZenCodeElement;
        new (): HTMLZenCodeElement;
    };
    interface HTMLZenColumnElement extends Components.ZenColumn, HTMLStencilElement {
    }
    var HTMLZenColumnElement: {
        prototype: HTMLZenColumnElement;
        new (): HTMLZenColumnElement;
    };
    interface HTMLZenDragZoneElement extends Components.ZenDragZone, HTMLStencilElement {
    }
    var HTMLZenDragZoneElement: {
        prototype: HTMLZenDragZoneElement;
        new (): HTMLZenDragZoneElement;
    };
    interface HTMLZenDraggableElement extends Components.ZenDraggable, HTMLStencilElement {
    }
    var HTMLZenDraggableElement: {
        prototype: HTMLZenDraggableElement;
        new (): HTMLZenDraggableElement;
    };
    interface HTMLZenDrawerElement extends Components.ZenDrawer, HTMLStencilElement {
    }
    var HTMLZenDrawerElement: {
        prototype: HTMLZenDrawerElement;
        new (): HTMLZenDrawerElement;
    };
    interface HTMLZenFileDropElement extends Components.ZenFileDrop, HTMLStencilElement {
    }
    var HTMLZenFileDropElement: {
        prototype: HTMLZenFileDropElement;
        new (): HTMLZenFileDropElement;
    };
    interface HTMLZenFlexElement extends Components.ZenFlex, HTMLStencilElement {
    }
    var HTMLZenFlexElement: {
        prototype: HTMLZenFlexElement;
        new (): HTMLZenFlexElement;
    };
    interface HTMLZenIconElement extends Components.ZenIcon, HTMLStencilElement {
    }
    var HTMLZenIconElement: {
        prototype: HTMLZenIconElement;
        new (): HTMLZenIconElement;
    };
    interface HTMLZenIconButtonElement extends Components.ZenIconButton, HTMLStencilElement {
    }
    var HTMLZenIconButtonElement: {
        prototype: HTMLZenIconButtonElement;
        new (): HTMLZenIconButtonElement;
    };
    interface HTMLZenImageElement extends Components.ZenImage, HTMLStencilElement {
    }
    var HTMLZenImageElement: {
        prototype: HTMLZenImageElement;
        new (): HTMLZenImageElement;
    };
    interface HTMLZenInputElement extends Components.ZenInput, HTMLStencilElement {
    }
    var HTMLZenInputElement: {
        prototype: HTMLZenInputElement;
        new (): HTMLZenInputElement;
    };
    interface HTMLZenInputIconElement extends Components.ZenInputIcon, HTMLStencilElement {
    }
    var HTMLZenInputIconElement: {
        prototype: HTMLZenInputIconElement;
        new (): HTMLZenInputIconElement;
    };
    interface HTMLZenLinkElement extends Components.ZenLink, HTMLStencilElement {
    }
    var HTMLZenLinkElement: {
        prototype: HTMLZenLinkElement;
        new (): HTMLZenLinkElement;
    };
    interface HTMLZenModalElement extends Components.ZenModal, HTMLStencilElement {
    }
    var HTMLZenModalElement: {
        prototype: HTMLZenModalElement;
        new (): HTMLZenModalElement;
    };
    interface HTMLZenModalBodyElement extends Components.ZenModalBody, HTMLStencilElement {
    }
    var HTMLZenModalBodyElement: {
        prototype: HTMLZenModalBodyElement;
        new (): HTMLZenModalBodyElement;
    };
    interface HTMLZenModalHeaderElement extends Components.ZenModalHeader, HTMLStencilElement {
    }
    var HTMLZenModalHeaderElement: {
        prototype: HTMLZenModalHeaderElement;
        new (): HTMLZenModalHeaderElement;
    };
    interface HTMLZenRadioElement extends Components.ZenRadio, HTMLStencilElement {
    }
    var HTMLZenRadioElement: {
        prototype: HTMLZenRadioElement;
        new (): HTMLZenRadioElement;
    };
    interface HTMLZenResizePaneElement extends Components.ZenResizePane, HTMLStencilElement {
    }
    var HTMLZenResizePaneElement: {
        prototype: HTMLZenResizePaneElement;
        new (): HTMLZenResizePaneElement;
    };
    interface HTMLZenRowElement extends Components.ZenRow, HTMLStencilElement {
    }
    var HTMLZenRowElement: {
        prototype: HTMLZenRowElement;
        new (): HTMLZenRowElement;
    };
    interface HTMLZenSpinnerElement extends Components.ZenSpinner, HTMLStencilElement {
    }
    var HTMLZenSpinnerElement: {
        prototype: HTMLZenSpinnerElement;
        new (): HTMLZenSpinnerElement;
    };
    interface HTMLZenTextareaElement extends Components.ZenTextarea, HTMLStencilElement {
    }
    var HTMLZenTextareaElement: {
        prototype: HTMLZenTextareaElement;
        new (): HTMLZenTextareaElement;
    };
    interface HTMLElementTagNameMap {
        "zen-accordion": HTMLZenAccordionElement;
        "zen-accordion-header": HTMLZenAccordionHeaderElement;
        "zen-accordion-pane": HTMLZenAccordionPaneElement;
        "zen-avatar": HTMLZenAvatarElement;
        "zen-button": HTMLZenButtonElement;
        "zen-checkbox": HTMLZenCheckboxElement;
        "zen-code": HTMLZenCodeElement;
        "zen-column": HTMLZenColumnElement;
        "zen-drag-zone": HTMLZenDragZoneElement;
        "zen-draggable": HTMLZenDraggableElement;
        "zen-drawer": HTMLZenDrawerElement;
        "zen-file-drop": HTMLZenFileDropElement;
        "zen-flex": HTMLZenFlexElement;
        "zen-icon": HTMLZenIconElement;
        "zen-icon-button": HTMLZenIconButtonElement;
        "zen-image": HTMLZenImageElement;
        "zen-input": HTMLZenInputElement;
        "zen-input-icon": HTMLZenInputIconElement;
        "zen-link": HTMLZenLinkElement;
        "zen-modal": HTMLZenModalElement;
        "zen-modal-body": HTMLZenModalBodyElement;
        "zen-modal-header": HTMLZenModalHeaderElement;
        "zen-radio": HTMLZenRadioElement;
        "zen-resize-pane": HTMLZenResizePaneElement;
        "zen-row": HTMLZenRowElement;
        "zen-spinner": HTMLZenSpinnerElement;
        "zen-textarea": HTMLZenTextareaElement;
    }
}
declare namespace LocalJSX {
    interface ZenAccordion {
    }
    interface ZenAccordionHeader {
    }
    interface ZenAccordionPane {
    }
    interface ZenAvatar {
        "altText"?: any;
        "fallbackSrc"?: string;
        "imgSrc"?: string;
        "initials"?: any;
        "size"?: 'sm' | 'small' | 'md' | 'lg' | 'large';
    }
    interface ZenButton {
        "accent"?: boolean;
        "disabled"?: boolean;
        "primary"?: boolean;
        "size"?: string;
    }
    interface ZenCheckbox {
    }
    interface ZenCode {
    }
    interface ZenColumn {
        "breakpoints"?: Breakpoint[];
        "pull"?: string | number;
        "push"?: string | number;
        "span"?: string | number;
    }
    interface ZenDragZone {
    }
    interface ZenDraggable {
    }
    interface ZenDrawer {
    }
    interface ZenFileDrop {
    }
    interface ZenFlex {
        "align"?: 'stretch' |
    'center' |
    'flex-start' |
    'flex-end' |
    'baseline';
        "direction"?: 'row' |
    'row-reverse' |
    'column' |
    'column-reverse';
        "justify"?: 'center' | 
    'space-between' |
    'space-around' | 
    'space-evenly' |
    'flex-start' |
    'flex-end';
        "wrap"?: 'wrap' |
    'nowrap' |
    'wrap-reverse';
    }
    interface ZenIcon {
        "color"?: string;
        "icon"?: string;
        "size"?: string;
    }
    interface ZenIconButton {
    }
    interface ZenImage {
        "altText"?: string;
        "fallbackSrc"?: string;
        "imgSrc"?: string;
    }
    interface ZenInput {
        "ariaLabel"?: string;
        "ariaLabelledBy"?: string;
        "disabled"?: boolean;
        "inputId"?: string;
        "invalid"?: boolean;
        "isReadOnly"?: boolean;
        "max"?: number;
        "maxLength"?: number;
        "min"?: number;
        "minLength"?: number;
        "name"?: string;
        "placeholder"?: string;
        "required"?: boolean;
        "size"?: string;
        "type"?: string;
        "value"?: string;
        "variant"?: 'outline' | 'flushed' | 'unstyled';
    }
    interface ZenInputIcon {
    }
    interface ZenLink {
    }
    interface ZenModal {
    }
    interface ZenModalBody {
    }
    interface ZenModalHeader {
    }
    interface ZenRadio {
    }
    interface ZenResizePane {
    }
    interface ZenRow {
    }
    interface ZenSpinner {
    }
    interface ZenTextarea {
        "ariaLabel"?: string;
        "ariaLabelledBy"?: string;
        "disabled"?: boolean;
        "inputId"?: string;
        "invalid"?: boolean;
        "isReadOnly"?: boolean;
        "maxLength"?: number;
        "minLength"?: number;
        "name"?: string;
        "placeholder"?: string;
        "required"?: boolean;
        "resize"?: 'horizontal' | 'vertical' | 'none';
        "value"?: string;
        "variant"?: 'outline' | 'flushed' | 'unstyled';
    }
    interface IntrinsicElements {
        "zen-accordion": ZenAccordion;
        "zen-accordion-header": ZenAccordionHeader;
        "zen-accordion-pane": ZenAccordionPane;
        "zen-avatar": ZenAvatar;
        "zen-button": ZenButton;
        "zen-checkbox": ZenCheckbox;
        "zen-code": ZenCode;
        "zen-column": ZenColumn;
        "zen-drag-zone": ZenDragZone;
        "zen-draggable": ZenDraggable;
        "zen-drawer": ZenDrawer;
        "zen-file-drop": ZenFileDrop;
        "zen-flex": ZenFlex;
        "zen-icon": ZenIcon;
        "zen-icon-button": ZenIconButton;
        "zen-image": ZenImage;
        "zen-input": ZenInput;
        "zen-input-icon": ZenInputIcon;
        "zen-link": ZenLink;
        "zen-modal": ZenModal;
        "zen-modal-body": ZenModalBody;
        "zen-modal-header": ZenModalHeader;
        "zen-radio": ZenRadio;
        "zen-resize-pane": ZenResizePane;
        "zen-row": ZenRow;
        "zen-spinner": ZenSpinner;
        "zen-textarea": ZenTextarea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "zen-accordion": LocalJSX.ZenAccordion & JSXBase.HTMLAttributes<HTMLZenAccordionElement>;
            "zen-accordion-header": LocalJSX.ZenAccordionHeader & JSXBase.HTMLAttributes<HTMLZenAccordionHeaderElement>;
            "zen-accordion-pane": LocalJSX.ZenAccordionPane & JSXBase.HTMLAttributes<HTMLZenAccordionPaneElement>;
            "zen-avatar": LocalJSX.ZenAvatar & JSXBase.HTMLAttributes<HTMLZenAvatarElement>;
            "zen-button": LocalJSX.ZenButton & JSXBase.HTMLAttributes<HTMLZenButtonElement>;
            "zen-checkbox": LocalJSX.ZenCheckbox & JSXBase.HTMLAttributes<HTMLZenCheckboxElement>;
            "zen-code": LocalJSX.ZenCode & JSXBase.HTMLAttributes<HTMLZenCodeElement>;
            "zen-column": LocalJSX.ZenColumn & JSXBase.HTMLAttributes<HTMLZenColumnElement>;
            "zen-drag-zone": LocalJSX.ZenDragZone & JSXBase.HTMLAttributes<HTMLZenDragZoneElement>;
            "zen-draggable": LocalJSX.ZenDraggable & JSXBase.HTMLAttributes<HTMLZenDraggableElement>;
            "zen-drawer": LocalJSX.ZenDrawer & JSXBase.HTMLAttributes<HTMLZenDrawerElement>;
            "zen-file-drop": LocalJSX.ZenFileDrop & JSXBase.HTMLAttributes<HTMLZenFileDropElement>;
            "zen-flex": LocalJSX.ZenFlex & JSXBase.HTMLAttributes<HTMLZenFlexElement>;
            "zen-icon": LocalJSX.ZenIcon & JSXBase.HTMLAttributes<HTMLZenIconElement>;
            "zen-icon-button": LocalJSX.ZenIconButton & JSXBase.HTMLAttributes<HTMLZenIconButtonElement>;
            "zen-image": LocalJSX.ZenImage & JSXBase.HTMLAttributes<HTMLZenImageElement>;
            "zen-input": LocalJSX.ZenInput & JSXBase.HTMLAttributes<HTMLZenInputElement>;
            "zen-input-icon": LocalJSX.ZenInputIcon & JSXBase.HTMLAttributes<HTMLZenInputIconElement>;
            "zen-link": LocalJSX.ZenLink & JSXBase.HTMLAttributes<HTMLZenLinkElement>;
            "zen-modal": LocalJSX.ZenModal & JSXBase.HTMLAttributes<HTMLZenModalElement>;
            "zen-modal-body": LocalJSX.ZenModalBody & JSXBase.HTMLAttributes<HTMLZenModalBodyElement>;
            "zen-modal-header": LocalJSX.ZenModalHeader & JSXBase.HTMLAttributes<HTMLZenModalHeaderElement>;
            "zen-radio": LocalJSX.ZenRadio & JSXBase.HTMLAttributes<HTMLZenRadioElement>;
            "zen-resize-pane": LocalJSX.ZenResizePane & JSXBase.HTMLAttributes<HTMLZenResizePaneElement>;
            "zen-row": LocalJSX.ZenRow & JSXBase.HTMLAttributes<HTMLZenRowElement>;
            "zen-spinner": LocalJSX.ZenSpinner & JSXBase.HTMLAttributes<HTMLZenSpinnerElement>;
            "zen-textarea": LocalJSX.ZenTextarea & JSXBase.HTMLAttributes<HTMLZenTextareaElement>;
        }
    }
}
