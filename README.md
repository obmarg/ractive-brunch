ractive-brunch
==============

Adds [Ractive](http://ractivejs.org/) support to
[brunch](http://brunch.io).

## Usage
Install the plugin via npm with `npm install --save ractive-brunch`.

Or, do manual install:

* Add `"ractive-brunch": "x.y.z"` to `package.json` of your brunch app.
  (Pick a relevant version of ractive-brunch.  ractive-brunch 1.0.0 was made
  for 1.7.0 of brunch)
* If you want to use git version of plugin, add
`"ractive-brunch": "git+https://github.com/obmarg/ractive-brunch.git"`.

Brunch should now compile ractive templates it finds in `.rac` and `.ractive`
files.  Pass these as the template parameter to the `Ractive` constructor in
your application:

    var template = require('templates/whatever');
    var r = new Ractive({'template': template, ...});
    
## Credit

Mostly copied & pasted from 
[handlebars-brunch](https://github.com/brunch/handlebars-brunch)
