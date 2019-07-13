

function recursiveObj(obj, chain, reference, result) {
    if (typeof obj === 'object') {
        reference.push(obj);
        for (let pro in obj) {
            if (reference.includes(obj[pro])) {
                // maybe exist circular reference
                try{
                    JSON.stringify(obj[pro]);
                } catch(error) {
                    result.push(chain + '.' + pro);
                };
            } else {
                recursiveObj(obj[pro], chain + '.' + pro, reference, result);
            }
        }
    }
}

module.exports =  function (obj) {
    let result = [];
    let reference = [];
    recursiveObj(obj, '', reference, result);
    console.log(result);
    return result.join('-');
}
