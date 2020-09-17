
export const DEFAULT_THEME = {
    'primary': "#613DC1",
    'primary-rgb-light': 'rgba(97,61,193,0.2)',
    'accent': "#97DFFC",
    'accent-rgb-light': 'rgba(151,223,252,0.2)',
    'accent-hover': "#87c8e2",
    'danger': '#D33F49',
    'modal-height': 'calc(100vh - 7.5rem)',
    'modal-sm-width': '15rem',
    'modal-md-width': '30rem',
    'modal-lg-width': '45rem',
    'modal-sm-height': '15rem',
    'drawer-sm': '22rem',
    'drawer-md': '32rem',
    'drawer-lg': '40rem',
    'easing-fn': 'ease-in-out',
    'avatar-sm': '24px',
    'avatar-md': '48px',
    'avatar-lg': '72px',
    'backgroundColors': {
        values: ["#858AE3", "#4E148C", "#2C0735"],
        prefix: 'bg'
    },
    'accentBackgroundColors': {
        prefix: 'bg-accent',
        values: ["#78b2c9", "#5a8597", "#3c5964"]
    },
    'grayScaleColors': {
        values: ["#EEEEEE", "#CCCCCC", "#999999", "#666666", "#333333", "#000000"],
        prefix: 'gs'
    }
}
export function setTheme(theme) {
    var root = document.documentElement;

    Object.keys(theme).forEach(function setCSSVar(key) {
        var value = theme[key];
        var isObject = typeof value == 'object';
        if (isObject) {
            let values = value.values;
            let prefix = value.prefix;
            for (let i = 0; i < values.length; i++) {
                var idx = i + 1;
                root.style.setProperty(`--${prefix}-${idx}`, values[i]);
            }
        } else {
            root.style.setProperty(`--${key}`, value);
        }
    });
}

/**
 * Gets size string based on size parameter.
 * @param size should be value of sm/small, md, lg/large, and xl. Default return is md.
 */
export function getSize(size: string): string {
    switch(size.toLowerCase()) {
        case 'sm':
        case 'small':
            return 'sm';
        case 'md':
            return 'md';
        case 'lg':
        case 'large':
            return 'lg';
        case 'xl':
            return 'xl';
        default:
            return 'md';
    }
}

export function createStoryArgs(argTypes) {
    var args = {};
    Object.keys(argTypes).map(key => {
        const val = argTypes[key];
        if (val.hide == true) {
            args[key] = undefined;
            return;
        }
        const hasControl = val.control != undefined;
        const isBoolean = hasControl && val.control.type == 'boolean';
        const hasDefault = val.defaultValue != undefined;
        args[key] = isBoolean ? false
            : (
                hasDefault ? val.defaultValue : ''
            );
    });
    return args;
}


export const focusableElementStr = 'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])';
export function setLastFocusableElement (document: Document, content: HTMLElement) {
    if (document.activeElement) {
        const dialogContent = content
        const focusableElements = dialogContent.querySelectorAll(focusableElementStr)
        
        const elements = getArrayFromNodeList(focusableElements)
            .filter(element => element.offsetWidth > 0 || element.offsetHeight > 0 || element === document.activeElement)
        
        elements.sort((elementA, elementB) => {
            const a = elementA.tabIndex || 1
            const b = elementB.tabIndex || 1
            if (a < b) { return -1 }
            if (a > b) { return 1 }
            return 0
        })
        if (elements.length > 0) {
            const lastEl = elements[elements.length-1]
            lastEl.focus()
        }                   
    }
}
export function setFirstFocusableElement (document: Document, content: HTMLElement) {
    if (document.activeElement) {
        const focusableElements = content.querySelectorAll(focusableElementStr)
        const elements = getArrayFromNodeList(focusableElements)
            .filter(element => element.offsetWidth > 0 || element.offsetHeight > 0 || element === document.activeElement)
        
        elements.sort((elementA, elementB) => {
            const a = elementA.tabIndex || 1
            const b = elementB.tabIndex || 1
            if (a < b) { return -1 }
            if (a > b) { return 1 }
            return 0
        })
        if (elements.length > 0) {
            const firstEl = elements[0]
            firstEl.focus()
            return true
        }
        return false                   
    }
}

export function getArrayFromNodeList (list: NodeList): HTMLElement[] {
    return Array.prototype.slice.call(list)
}
export function listenForEscape (el: HTMLElement, fn) {
    el.addEventListener('keydown', function listen (evt) {
        if (evt.code && evt.code.toLowerCase() == 'escape') {
            fn()
        }
    });
}