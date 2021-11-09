// Duplicate Elements

function findDuplicate (arr) {
    const set = new Set()
    for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
    // Return the duplicate
    return arr[i]
    } else {
    set.add(arr[i])
    }
    }
    }
    const arr = [4, 6, 8, 2, 6, 2]
    console.log(findDuplicate(arr))
    


    // Use filter and indexof method
    let findDuplicates = arr =>
    arr.filter((item, index) => arr.indexOf(item) != index)
    console.log(findDuplicates(arr))
    

   