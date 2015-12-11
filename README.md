# JS-DDD simple console logging like a Kint for php

This package created to help you to use browser console more intelligent and you don't have to carry about production console logs.
You can use just __*dd()*__ for console table your object or __*ddd()*__ for everything else.  
Demo on the attached screenshot.

### Installing
    npm install --save js-ddd
    
### How to use
```javascript
import 'js-ddd';
```
  dd() and ddd() will be automatically added to global "window" variable. So, you don't have to import this component each time when you are going to use it.
  If you are using eslint you should add to your .eslint file next config
```json
"globals": {
  "dd": true,
  "ddd": true
}
```
  If you don't want to add global variables to your eslint file you can import __*dd()*__ or/and __*ddd()*__ for each components like:
```javascript
import {dd, ddd} from 'js-ddd';
```
### Production app
When you run your application on production or stage server you can use for example:
```bash
NODE_ENV=production npm start
```
NODE_ENV=production will eliminate console logs from app.
