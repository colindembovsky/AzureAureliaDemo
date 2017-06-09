import * as gulp from 'gulp';
import {Server as Karma} from 'karma';
import {CLIOptions} from 'aurelia-cli';
import build from './build';
import {watch} from './run';
import * as path from 'path';
import * as replace from 'gulp-replace';

function log(message) {
  console.log(message); // eslint-disable-line no-console
}

function onChange(path) {
  log(`File Changed: ${path}`);
}

let karma = done => {
  new Karma({
    configFile: path.join(__dirname, '/../../karma.conf.js'),
    singleRun: !CLIOptions.hasFlag('watch'),
  }, done).start();
};

// hack to fix the relative paths in the generated mapped html report
let copySrc = done => {
  let srcRoot = path.join(__dirname, '../../reports/src/');
  let srcPaths = [
    path.join(srcRoot, "*.html"),
    path.join(srcRoot, "**/*.html"),
  ];
  return gulp.src(srcPaths, { base: srcRoot })
    .pipe(replace('../../.', '.'))
    .pipe(gulp.dest(path.join(__dirname, '../../reports/coverage/html/src')));
};

let updateIndex = done => {
  let idxRoot = path.join(__dirname, '../../reports/coverage/html/');
  return gulp.src(path.join(idxRoot, 'index.html'), { baseDir: idxRoot })
        .pipe(replace('../..', '.'))
        .pipe(gulp.dest(idxRoot));
};

let unit;

if (CLIOptions.hasFlag('watch')) {
  unit = gulp.series(
    build,
    gulp.parallel(
      watch(build, onChange),
      karma,
      copySrc,
      updateIndex
    )
  );
} else {
  unit = gulp.series(
    build,
    karma,
    copySrc,
    updateIndex
  );
}

export default unit;
