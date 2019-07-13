

function recursiveObj(obj, chain, reference, result) {

    if (Array.isArray(obj)) {
        obj.forEach((item, index) => {
            chain += '.' + index;
            check(item);
        });
    } else if (typeof obj === 'object') {
        check(obj);
    }

    function check(_obj) {
        reference.push(_obj);
        for (let pro in _obj) {
            if (reference.includes(_obj[pro])) {
                // maybe exist circular reference
                try{
                    JSON.stringify(_obj[pro]);
                } catch(error) {
                    result.push(chain + '.' + pro);
                };
            } else {
                recursiveObj(_obj[pro], chain + '.' + pro, reference, result);
            }
        }
    }
}

module.exports =  function (obj) {
    let result = [];
    let reference = [];
    recursiveObj(obj, '', reference, result);
    if (result.length > 0) {
        console.warn('Circular Reference');
        result.forEach((item) => {
            let horizontalBars = item.split('.').map(() => {
                return '-';
            });
            console.warn(`${horizontalBars.join('')}> ${item}`);
        });
    }
    return result.join('-');
}
