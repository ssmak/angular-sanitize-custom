# packaged angular-sanitize-custom

This repo is for distribution on `npm`. The source for this module is in the
[main AngularJS repo](https://github.com/ssmak/angular-sanitize-custom.git).
Please file issues and pull requests against that repo.

## Install

You can install this package with `npm`.

### npm

```shell
npm install angular-sanitize-custom
```

Then add `ngSanitize` as a dependency for your app:

```javascript
angular.module('myApp', [require('angular-sanitize')]);
```

### bower

```shell
bower install angular-sanitize
```

Add a `<script>` to your `index.html`:

```html
<script src="/node_modules/angular-sanitize-custom/angular-sanitize-custom.js"></script>
```

Then add `ngSanitize` as a dependency for your app:

```javascript
angular.module('myApp', ['ngSanitize']);
```

## Documentation

Documentation is available on the
[AngularJS docs site](http://docs.angularjs.org/api/ngSanitize).

## License

The MIT License

Copyright (c) 2010-2015 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
