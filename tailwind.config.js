/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          ligth: 'var(--color-primary-ligth)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          ligth: 'var(--color-secondary-ligth)',
        },
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
        // foreground
        'primary-fg': {
          DEFAULT: 'var(--color-primary-fg)',
          ligth: 'var(--color-primary-ligth-fg)',
        },
        'secondary-fg': {
          DEFAULT: 'var(--color-secondary-fg)',
          ligth: 'var(--color-secondary-ligth-fg)',
        },
        'success-fg': 'var(--color-success-fg)',
        'danger-fg': 'var(--color-danger-fg)',
        'warning-fg': 'var(--color-warning-fg)',
      },
    },
  },
};
