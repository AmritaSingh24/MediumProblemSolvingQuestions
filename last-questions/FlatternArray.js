//  Flatten Array
function flattenArray (arr) {
    return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
    acc = acc.concat(flattenArray(curr))
    } else {
    acc = acc.concat(curr)
    }
    return acc
    }, [])
    }
    console.log(flattenArray([1, [2], [3, [[4]]]]))

    // Use Flat method

    const arr1 = [1, [2], [3, [[4]]]];
    console.log(arr1.flat(Infinity));