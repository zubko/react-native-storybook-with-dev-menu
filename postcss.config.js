module.exports = {
  plugins: [require('tailwindcss'), require('nativewind/postcss')],
};

module.exports = {
  plugins: {
    'nativewind/postcss': {
      output: 'nativewind-output.js',
    },
  },
};
