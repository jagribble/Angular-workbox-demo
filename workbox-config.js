module.exports = {
  "globDirectory": "dist/",
  "globIgnores": [
    "workbox-v4.3.1/**/*"
  ],
  "globPatterns": [
    "**/*.{txt,png,ico,html,js,css}"
  ],
  "swDest": "dist/sw.js",
  "runtimeCaching": [
    {
      "urlPattern": new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
      "handler": 'staleWhileRevalidate'
    }
  ]
};