//  Longest Word in a String
function longestWord (str){
    const strArr = str.split(' ')
    // console.log(strArr)
    const longestWord = strArr.reduce((acc, curr)=>{
        // console.log(acc, curr)
        return acc.length >= curr.length ? acc : curr}, ''
    )
    return longestWord
}
console.log(longestWord('My name is Vishwas'))
console.log(longestWord('hello world'))