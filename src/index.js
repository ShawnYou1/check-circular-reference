/**
 * Copyright (c) Shawn You<youshaohua.com>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

let log = require('./log');

function recursiveObj(obj, chain, reference, result) {

    if (Array.isArray(obj)) {
        obj.forEach(function(item, index){
            check(item, chain + '[' + index + ']');
        });
    } else if (typeof obj === 'object') {
        check(obj, chain);
    }

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
                recursiveObj(_obj[pro], _chain + '.' + pro, reference, result);
            }
        }
    }
}

module.exports =  function (obj) {
    let result = [];
    let reference = [];
    recursiveObj(obj, '', reference, result);
    log(obj, result);
    return result.join('-');
}
