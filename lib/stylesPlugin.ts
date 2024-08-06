import plugin from 'tailwindcss/plugin'

const themeConfig = {
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1440px',
            },
        },
        extend: {
            screens: {
                xs: '360px',
                sm: '576px',
                md: '748px',
                lg: '848px',
                xl: '1048px',
                '2xl': '1440px',
            },
            backgroundImage: {
                ocean: "url('/images/background.png')",
            },
            fontFamily: {
                bca: 'BCASans',
            },
            colors: {
                ocean: {
                    primary: {
                        10: '#005CAA',
                        20: '#144E83',
                        30: '#00335E',
                    },
                    secondary: {
                        10: '#E6F3FF',
                        20: '#00B5F0',
                        30: '#0094D5',
                    },
                    dark: {
                        10: '#868E96',
                        20: '#495057',
                        30: '#212529',
                    },
                    light: {
                        10: '#FFFFFF',
                        20: '#F4F8FC',
                        30: '#E9ECEF',
                        40: '#CFCFCF',
                    },
                    danger: {
                        10: '#FFD9D3',
                        20: '#E25757',
                    },
                    warning: {
                        10: '#FFE592',
                        20: '#885403',
                    },
                    success: {
                        10: '#C2FFC5',
                        20: '#009649',
                    },
                    orange: '#F37C30',
                    'non-active': '#8CB5D7',
                    overlay: 'rgba(0, 51, 94, 0.4)',
                },
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            boxShadow: {
                "card-1st": '0px 4px 8px 0px #144E831F',
                "card-3rd": '0px 1px 6px 0px #144E8333'
            },
        },
    },
}

export default plugin(() => {
}, themeConfig);