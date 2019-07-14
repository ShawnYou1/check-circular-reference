# Check Circular Reference
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
        label: 'About'
    }
];
menu[0].children[0].parent = menu[0];
check(menu);
```
![circular reference example screenshot](https://youshaohua.com/assets/img/others/github-check-circular-reference-example.png)

## Relative Links
[Understanding The Error ‘Converting circular structure to JSON’](https://youshaohua.com/post/understanding-the-error-converting-circular-structure-to-json)
