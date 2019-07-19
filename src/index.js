/**
 * Copyright (c) Shawn You<youshaohua.com>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

let recursive = require('./recursive');
let log = require('./log');


module.exports =  function (obj) {
    let result = recursive(obj);
    log(result);
    return result;
}
