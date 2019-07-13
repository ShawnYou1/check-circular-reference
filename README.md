# Check Circular Reference
A tool that check an object whether exist circular reference and print this attribute chain.


## Installation
```
npm install check-circular-reference
```

## Usage
```
let check = require('./index');

// The object that you will check
let obj = {} 
check(obj)
```

## Example
```
let check = require('./index');
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
![circular reference example screenshot](https://github.com/ShawnYou1/check-circular-reference/blob/master/example.png)

## Others
[Understanding The Error ‘Converting circular structure to JSON’](https://youshaohua.com/post/understanding-the-error-converting-circular-structure-to-json)
