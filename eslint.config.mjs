import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  { ignores: ['.next*/**', 'node_modules/**', 'public/reports/**'] },
  ...nextVitals,
  {
    // React Compiler rules introduced with eslint-config-next 16; existing
    // effects predate them, so surface them as warnings for now.
    rules: {
      'react-hooks/refs': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
];

export default eslintConfig;
