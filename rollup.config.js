import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: ['react', 'react-dom', 'prop-types'],
  plugins: [
    resolve({extensions}),
    babel({
      extensions,
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      include: ['src/**/*'],
    }),
    commonjs(),
  ],
};
