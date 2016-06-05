var appRoot = 'src/';
var outputRoot = 'dist/';
//var exporSrvtRoot = 'export/'


module.exports = {
    output: outputRoot,
    source: appRoot + '**/*.ts',
    html: appRoot + '**/*.html',
    css: appRoot + '**/*.css',
    style: 'styles/**/*.css',
    dtsSrc: [
        './typings/globals/**/*.d.ts',
        './custom_typings/**/*.d.ts',
        './jspm_packages/**/*.d.ts'
    ]
}