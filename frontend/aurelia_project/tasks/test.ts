import * as gulp from 'gulp';
import {Server as Karma} from 'karma';
import {CLIOptions} from 'aurelia-cli';
import build from './build';
import {watch} from './run';
import * as path from 'path';
import * as replace from 'gulp-replace';

function log(message) {
  console.log(message); //eslint-disable-line no-console
}

function onChange(path) {
  log(`File Changed: ${path}`);
}

let karma = done => {
  new Karma({
    configFile: path.join(__dirname, '/../../karma.conf.js'),
    singleRun: !CLIOptions.hasFlag('watch')
  }, done).start();
};

// hack to fix the relative paths in the generated mapped html report
let fixPaths = done => {
  let repRoot = path.join(__dirname, '../../reports/');
  let repPaths = [
    path.join(repRoot, 'src/**/*.html'),
    path.join(repRoot, 'src/*.html'),
  ];
  return gulp.src(repPaths, { base: repRoot })
        .pipe(replace(/(..\/..\/..\/)(\w)/gi, '../coverage/html/$2'))
        .pipe(gulp.dest(path.join(repRoot)));
};

let unit;

if (CLIOptions.hasFlag('watch')) {
  unit = gulp.series(
    build,
    gulp.parallel(
      watch(build, onChange),
      karma,
      fixPaths
    )
  );
} else {
  unit = gulp.series(
    build,
    karma,
    fixPaths
  );
}

export default unit;
