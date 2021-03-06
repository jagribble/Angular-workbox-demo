const { injectManifest } = require('workbox-build');

// We reuse the configuration from the file generated by Workbox CLI
let workboxConfig = require('./workbox-config.js');

// Adding one extra property - source service worker filename - with the possibility to pass it as an argument (for the next steps)
workboxConfig.swSrc = 'src/' + (process.argv.slice(2)[0] || 'sw-default.js');

// Deleting unneeded property
delete workboxConfig.runtimeCaching;

injectManifest(workboxConfig).then(({ count, size }) => {
    console.log(
        `Generated ${
        workboxConfig.swDest
        }, which will precache ${count} files, totaling ${size} bytes.`
    );
});
