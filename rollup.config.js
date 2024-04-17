import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

export default {
  input: 'src/index.js', // Point this to your main library entry
  output: [
    { file: pkg.module, 'format': 'es' },
    { file: pkg.main, 'format': 'umd', name: 'MyComponentLibrary' }
  ],
  plugins: [
    svelte(),
    resolve()
  ]
};
