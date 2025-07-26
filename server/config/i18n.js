
module.exports.i18n = {
  /**
   *
   * Which locales are supported?
   *
   */

  locales: [
    'de-DE',
    'el-GR',
    'en-GB',
    'en-US',
    'es-ES',
    'fi-FI',
    'fr-FR',
    'it-IT',
    'ru-RU',
    'tr-TR',
  ],

  /**
   *
   * What is the default locale for the site? Note that this setting will be
   * overridden for any request that sends an "Accept-Language" header (i.e.
   * most browsers), but it's still useful if you need to localize the
   * response for requests made by non-browser clients (e.g. cURL).
   *
   */

  defaultLocale: process.env.DEFAULT_LANGUAGE || 'en-US',

  /**
   *
   * Path (relative to app root) of directory to store locale (translation)
   * files in.
   *
   */

  // localesDirectory: 'config/locales',
};
