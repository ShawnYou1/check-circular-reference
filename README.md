# Check Circular Reference &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ShawnYou1/check-circular-reference/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/check-circular-reference)
A tool that check an object whether exist circular reference and print its attribute chain.


## Installation
```
npm install check-circular-reference
```

## Usage
```
let check = require('check-circular-reference');

// The object that you will check
let obj = {} 
check(obj)
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
    },
    {
        label: 'About',
        extend: {}
    }
];
menu[0].children[0].parent = menu[0];
menu[1].extend.home = menu[0].children[0];
check(menu);
```
![circular reference example screenshot](https://youshaohua.com/assets/img/others/github-check-circular-reference-example.png)

## Relative Links
[Understanding The Error ‘Converting circular structure to JSON’](https://youshaohua.com/post/understanding-the-error-converting-circular-structure-to-json)
