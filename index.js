

let reference = [];
function recursiveObj(obj, chain = '') {
    if (typeof obj === 'object') {
        reference.push(obj);
        for (let pro in obj) {
            if (reference.includes(obj[pro])) {
                console.log('Maybe exist circlar reference', chain + '.' + pro);
            } else {
                recursiveObj(obj[pro], chain + '.' + pro);
            }
        }
    }
}

module.exports =  function (obj) {
    recursiveObj(obj);
}
