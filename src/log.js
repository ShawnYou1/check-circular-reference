/**
 * Copyright (c) Shawn You<youshaohua.com>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';


module.exports = function(obj, result) {
    if (result.length > 0) {
        console.warn('Circular Reference');
        result.forEach((item) => {
            let horizontalBars = item.split('.').map(() => {
                return '-';
            });
            console.warn(`${horizontalBars.join('')}> ${item}`);
        });
    }
}

