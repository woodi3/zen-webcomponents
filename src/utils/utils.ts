
export const DEFAULT_THEME = {
    'primary': "#613DC1",
    'accent': "#97DFFC",
    'accent-hover': "#87c8e2",
    'danger': '#D33F49',
    'easing-fn': 'ease-in-out',
    'backgroundColors': {
        values: ["#858AE3", "#4E148C", "#2C0735"],
        prefix: 'bg'
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
        const isBoolean = val.control.type == 'boolean';
        const hasDefault = val.defaultValue != undefined;
        args[key] = isBoolean ? false
            : (
                hasDefault ? val.defaultValue : ''
            );
    });
    return args;
}