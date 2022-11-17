import rollupPluginDelete from 'rollup-plugin-delete';
import rollupPluginTypescript from '@rollup/plugin-typescript';
import { RollupOptions } from 'rollup';
import { terser as rollupPluginTerser } from 'rollup-plugin-terser';

const production = process.env.NODE_ENV === 'production';

const options: RollupOptions = {
  input: './lib/index.ts',
  output: [
    {
      dir: './dist/',
      format: 'esm',
      sourcemap: !production,
      entryFileNames: 'index.js',
    },
    {
      dir: './dist/',
      name: 'UrlComponentJoin',
      format: 'umd',
      sourcemap: !production,
      entryFileNames: 'index.cjs',
    },
  ],
  plugins: [
    rollupPluginDelete(
      {
        targets: [
          './dist/**/*'
        ],
      }
    ),
    rollupPluginTypescript(
      {
        tsconfig: 'tsconfig.lib.json'
      },
    ),
    production && rollupPluginTerser(),
  ],
};

export default options;
