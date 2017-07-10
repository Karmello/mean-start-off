// jshint esversion: 6, loopfunc: true

const r = {
    autoprefixer : require('gulp-autoprefixer'),
    babel: require('gulp-babel'),
    browserSync: require('browser-sync').create(),
    cleanCss: require('gulp-clean-css'),
    concat: require('gulp-concat'),
    del: require('del'),
    gulp: require('gulp'),
    util: require('gulp-util'),
    ngAnnotate: require('gulp-ng-annotate'),
    rename: require('gulp-rename'),
    runSequence: require('run-sequence'),
    sass: require('gulp-sass'),
    template: require('gulp-template'),
    uglify: require('gulp-uglify')
};



r.gulp.task('browserSync', function() {

    r.browserSync.init({
        snippetOptions: { ignorePaths: 'public/templates/*.html' },
        proxy: 'http://localhost:8080',
        ghostMode: false,
        browser: 'chrome'
    });
});

r.gulp.task('compile', ['page_templates', 'directive_templates', 'client_js', 'styles'], function() {

    r.gulp.watch('templates/*.html', ['page_templates']);
    r.gulp.watch('directives/**/*.html', ['directive_templates']);
    r.gulp.watch(['styles/**/*.scss', '!styles/appStyles.scss', 'directives/**/*.scss'], ['styles']);
    r.gulp.watch(['js/client/**/*.js', 'directives/**/*.js'], ['client_js']);
});

r.gulp.task('page_templates', function() {

    r.gulp.src('templates/*.html')
        .pipe(r.rename({ dirname: '' }))
        .pipe(r.gulp.dest('public/templates'))
        .pipe(r.browserSync.stream());
});

r.gulp.task('directive_templates', function() {

    r.gulp.src('directives/**/*.html')
        .pipe(r.rename({ dirname: '' }))
        .pipe(r.gulp.dest('public/templates'))
        .pipe(r.browserSync.stream());
});

r.gulp.task('client_js', function() {

    r.gulp.src(['js/client/**/*.js', 'directives/**/*.js'])
    .pipe(r.concat('appScripts.js'))
    .pipe(r.gulp.dest('public/unminified/'))
    .pipe(r.ngAnnotate())
    .pipe(r.babel({ presets: ['es2015'], compact: false }))
    .pipe(r.uglify().on('error', r.util.log))
    .pipe(r.gulp.dest('public/minified/'))
    .pipe(r.browserSync.stream());
});

r.gulp.task('styles', function() {

    r.gulp.src(['styles/**/*.scss', '!styles/appStyles.scss', 'directives/**/*.scss'], { 'base': 'styles/' })
        .pipe(r.concat('appStyles.scss'))
        .pipe(r.gulp.dest('styles/'))
        .pipe(r.sass().on('error', r.sass.logError))
        .pipe(r.autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
        .pipe(r.gulp.dest('public/unminified/'))
        .pipe(r.cleanCss({ keepSpecialComments: 0 }).on('error', function(err) { console.log('css parsing error', err); this.emit( 'end' ); }))
        .pipe(r.gulp.dest('public/minified/'))
        .pipe(r.browserSync.stream());
});

r.gulp.task('cr', () => {

    var what = process.argv[3].substring(2, process.argv[3].length);
    var name = process.argv[4].substring(2, process.argv[4].length);

    var extensions = ['.html', '.scss', '.js'];

    switch (what) {

        case 'dv':

            for (var ext of extensions) {
                r.gulp.src('utils/myDirective/myDirective' + ext)
                    .pipe(r.rename(name + ext))
                    .pipe(r.template({ name: name }))
                    .pipe(r.gulp.dest('directives/' + name));
            }

            break;
    }
});

r.gulp.task('rm', () => {

    var what = process.argv[3].substring(2, process.argv[3].length);
    var name = process.argv[4].substring(2, process.argv[4].length);

    switch (what) {

        case 'dv':

            r.del(['directives/' + name, 'public/templates/' + name + '.html']);
            break;
    }
});