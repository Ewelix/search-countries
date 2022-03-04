export const size = {
    width: {
        xs: 420,
        s: 575,
        m: 768,
        l: 1024,
        xl: 1200,
        xxl: 1400,
    },
};
export const theme = {
    colors: {
        white: '#FFF',
        // lightGray: '#EEEFF4',
        // mediumLightGray: '#C8CCD8',
        // mediumGray: '#7D828F',
        // darkGray: '#60636D',
        // bluishGray: '#C8CCD8',
        // black: '#1B1D23',
    },
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
    darkMode: {
        //         - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
    },
    lightMode: {
        // - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
    },
    fontWeight: {
        light: 300,
        medium: 600,
        bold: 800,
    },
    fontSize: {
        xs: '14px',
        s: '16px',
    },
    device: {
        xs: `min-width: ${size.width.xs}px`,
        s: `min-width: ${size.width.s}px`,
        m: `min-width: ${size.width.m}px`,
        l: `min-width: ${size.width.l}px`,
        xl: `min-width: ${size.width.xl}px`,
        xxl: `min-width: ${size.width.xxl}px`,
    },
};