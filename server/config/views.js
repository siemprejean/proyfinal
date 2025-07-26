
module.exports.views = {
  /**
   *
   * Extension to use for your views. When calling `res.view()` in an action,
   * you can leave this extension off. For example, calling
   * `res.view('homepage')` will (using default settings) look for a
   * `views/homepage.ejs` file.
   *
   */

  extension: 'html',

  /**
   *
   * The path (relative to the views directory, and without extension) to
   * the default layout file to use, or `false` to disable layouts entirely.
   *
   * Note that layouts only work with the built-in EJS view engine!
   *
   */

  layout: false,
};
