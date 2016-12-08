const fsbx = require("fuse-box");
const gulp = require("gulp");
const runSequence = require('run-sequence');

// Create FuseBox Instance
let fuseBox = new fsbx.FuseBox({
    homeDir: "src/",
    sourceMap: {
        bundleReference: "sourcemaps.js.map",
        outFile: "./build/sourcemaps.js.map",
    },
    cache: true,
    outFile: "./build/out.js",

    // Essential plugins to work with typescript
    plugins: [fsbx.TypeScriptHelpers, fsbx.JSONPlugin]
});


gulp.task("build", () => {
    return fuseBox.bundle(">main.ts");
})
gulp.task('start', ['build'], function() {
    gulp.watch('src/**/*.ts', () => {
        runSequence('build');
    });
});