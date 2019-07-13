let check = require('./index');

// circular reference
let caseObj1 = {
    a: 1,
    b: {
        b1: 1,
    }
};
caseObj1.b.b2 = caseObj1;
caseObj1.c = caseObj1.b;
test('caseObj1', () => {
    expect(check(caseObj1)).toBe('.b.b2-.c');
});

// This is not circular reference
let person = {name: 'Shawn You'}
let caseObj2 = {
    a: person,
    b: person,
}
test('caseObj2', () => {
    expect(check(caseObj2)).toBe('');
});

// This for test array
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
test('Array test', () => {
    expect(check(menu)).toBe('.0.children.0.parent-.1.extend.home');
});
