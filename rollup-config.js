import rollup from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'aot/src/main-aot.js',
  dest: 'dst/build.js',
  sourceMap: true,
  sourceMapFile: 'dst/build.js.map',
  format: 'iife',
  plugins: [
    nodeResolve({ jsnext: true, module: true }),
    commonjs({
      include: [
        'node_modules/rxjs/**',
        'node_modules/angular-in-memory-web-api/**'
      ],
    }),
    uglify()
  ]
}
