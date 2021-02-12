const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/bookings-front/runtime.js',
    './dist/bookings-front/polyfills.js',
    './dist/bookings-front/main.js',
  ]
  await fs.ensureDir('docs').catch(console.log)
  await concat(files, 'docs/booking.js').catch(console.log)
  await fs.copyFile('./dist/bookings-front/styles.css', 'docs/styles.css').catch(console.log)
  await fs.copy('./dist/bookings-front/assets/', 'docs/assets/' ).catch(console.log)
})()
