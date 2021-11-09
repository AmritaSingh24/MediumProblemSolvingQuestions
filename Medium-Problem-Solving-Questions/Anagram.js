
function sortString (str){
    if (!str){
        return
    }
    // console.log(str.split('').sort().join(''))
    return str.split('').sort().join('')
}

function isAnagram (str1, str2){
    if (str1.length !== str2.length){
        return false
    }
    return sortString(str1.toLowerCase()) === sortString(str2.toLowerCase())
}
console.log(isAnagram("amrita", "atirma"))