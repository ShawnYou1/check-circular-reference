/**
 * Copyright (c) Shawn You<youshaohua.com>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

// store maybe exist circular reference
let reference = null;

// store circular reference attribute chain
let result = null;

function check(_obj, _chain) {
    reference.push(_obj);
    for (let pro in _obj) {
        if (reference.includes(_obj[pro])) {
            // maybe exist circular reference
            try{
                JSON.stringify(_obj[pro]);
            } catch(error) {
                result.push(_chain + '.' + pro);
            };
        } else {
            recursive(_obj[pro], _chain + '.' + pro, reference, result);
        }
    }
}

function recursive(obj, chain, _reference, _result) {
    chain = chain || '';
    reference = _reference || [];
    result = _result || [];

    if (Array.isArray(obj)) {
        obj.forEach(function(item, index){
            check(item, chain + '[' + index + ']');
        });
    } else if (typeof obj === 'object') {
        check(obj, chain);
    }
    return result;
}

module.exports =  recursive;
