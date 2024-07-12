const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');

// Define your website's URLs
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 }
  // Add more URLs here
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: 'https://kingspublications.com' });

// Create a sitemap and save it to public/sitemap.xml
streamToPromise(Readable.from(links).pipe(stream)).then(data => {
  fs.writeFileSync('./public/sitemap.xml', data.toString());
});
