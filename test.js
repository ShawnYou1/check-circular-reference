let check = require('./index');

let obj = {
    a: 1,
    b: 2,
    c: {
        c1: 1,
    }
};

// circlar reference
obj.c.c2 = obj
obj.c.c3 = obj.c
obj.c.c4 = {
    c41: obj
};
check(obj);

// This is not circlar reference
let obj2 = {
    a: obj,
    b: obj,
}
check(obj2);
