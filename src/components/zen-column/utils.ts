export type Breakpoint = {
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    span: string | number;
    pull?: string | number;
    push?: string | number;
};

export const BREAK_POINTS = {
    xs: [320, 568], // screen min width, screen max width
    sm: [569, 736],
    md: [737, 1024],
    lg: [1025, 1200],
    xl: [1201, 1600]
};