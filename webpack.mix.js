const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

//app
mix.js("resources/js/app/app.js", "public/js");
mix.sass("resources/sass/app/app.scss", "public/css");

//admin
mix.js("resources/js/admin/admin.js", "public/js");
mix.sass("resources/sass/admin/admin.scss", "public/css");

// notifications disabled
mix.disableSuccessNotifications();
