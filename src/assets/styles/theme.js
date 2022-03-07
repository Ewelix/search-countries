export const size = {
    width: {
        s: 575,
        m: 768,
        l: 1024,
        xl: 1200,
        xxl: 1400,
    },
};

export const theme = {
    colors: {
        lightBlack: '#111517',
        veryDarkBlue: '#202c37',
        darkBlue: '#2b3945',
        darkGray: '#858585',
        lightGray: '#F2F2F2',
        veryLightGray: '#fafafa',
        white: '#fff',
    },
    fontWeight: {
        light: 300,
        medium: 600,
        bold: 800,
    },
    fontSize: {
        xs: '14px',
        s: '16px',
        m: '18px',
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
