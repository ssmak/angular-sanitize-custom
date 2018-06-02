<h1 align="center">angular-sanitize-custom</h1>
<h4 align="center">(Based on angular-sanitize v1.6.9)</h4>

<h5 align="center">Add method `addValidElements` back to the old version(&lt;1.6.10) of angular-sanitize.</h5>
<br />
<div align="center">
  <a href="https://nodei.co/npm/angular-sanitize-custom/">
    <img src="https://nodei.co/npm/angular-sanitize-custom.png?compact=true">
  </a>
</div>
<br />

## History
I worked on a project that uses Angular version 1.6.9. In order to use `ng-bind-html` with custom tag without any errors, we must add all custom tags to the trust list. This method ONLY exists in angular-sanitize v1.6.10 or above, but NOT in v1.6.9 or below. 
Follow the requirements of my project, I can't upgrade any libraries and so I need to hack the original version and make it works on the custom tags.

<div align="center">
  <a href="https://paypal.me/ssmak">
    <img src="https://img.shields.io/badge/Donate-PayPal-green.svg" alt="PayPal Donation" />
  </a>
  <br />
  <a href="https://paypal.me/ssmak">
    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" alt="PayPal" />
  </a>
</div>

## Demonstration on CodePen
https://codepen.io/ssmak/pen/XYmEMO

## Installation + Use
1. Install to your project as dependency from NPM (https://www.npmjs.com/package/angular-sanitize-custom)
``` bash
npm install angular-sanitize-custom --save
```
2. Load the dependency
``` html
<script src="/node_modules/angular-sanitize-custom/angular-sanitize-custom.min.js"></script>
```
3. Define the dependency to your Angular module
``` html
angular.module('myApp', ['ngSanitize']);
```
4. Configure the provider and add any custom tags to the trust list
``` html
angular.module('myApp').config($sanitizeProvider => {
  $sanitizeProvider.addValidElements(['newElement1', 'newElement2']);
});
```

## Test
A demo page is located in the /test folder. You can test with each version of angular-sanitize with the live reload by using lite-server which can be installed by
``` bash
npm install lite-server -g
cd /project_root && lite-server
```

## License
MIT
