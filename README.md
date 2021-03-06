# Check Circular Reference &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ShawnYou1/check-circular-reference/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/check-circular-reference)
Check circular reference or mutable variable. Print its reference attribute chain.  


## Installation
```
npm install check-circular-reference --save
```

## Usage
### Node
```
let check = require('check-circular-reference');

// the obj is a variable  that you will check
let checkResult = check(obj);
if (checkResult.length === 0) {
    // do not exist circular reference or mutable variable    
} else {
    // exist circular reference or mutable variable    
}
```
### ES6
```
import check from 'check-circular-reference';

// the obj is a variable  that you will check
let checkResult = check(obj);
if (checkResult.length === 0) {
    // do not exist circular reference or mutable variable    
} else {
    // exist circular reference or mutable variable    
}
```

## Example
```
let check = require('check-circular-reference');
let menu = [
    {
        label: 'Home',
        children: [
            {
                label: 'Product'
            }
        ],
    }
];
menu[0].children[0].parent = menu[0];
check(menu);
```
![circular reference example screenshot](https://youshaohua.com/assets/img/others/github-check-circular-reference-example.png)

## Warning
I do not recommend you to use this node module on your released code, it just helps you optimize your code or find error easier, during developing.
```
// just check variable on development environment
let check = require('check-circular-reference');
let isReleased = true;

if (!isReleased) {
    // the below code will be executed on unreleased environment
    // the obj is a variable  that you will check
    check(obj)
}
```

## Contribution
```
# install
npm install

# test
npm run test
```

## About Circular Error
[Understanding The Error ‘Converting circular structure to JSON’](https://youshaohua.com/post/understanding-the-error-converting-circular-structure-to-json)
