
export const DEFAULT_THEME = {
    'primary': "#613DC1",
    'accent': "#97DFFC",
    'accent-hover': "#87c8e2",
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