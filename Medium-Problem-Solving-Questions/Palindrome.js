// Palindrome

const ispalindrome = (str) => {

    return (
        str.toLowerCase() === str.toLowerCase()
        .split('') //
        .reverse()
        .join('')
        )      
}

console.log(ispalindrome('racecar'))