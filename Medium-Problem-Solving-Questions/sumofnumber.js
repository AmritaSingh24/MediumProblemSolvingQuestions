//Sum of numbers
const sum = (arr) => {

    let temp = 0;
    let min = Math.min(arr[0], arr[1]) //access min number
    let max = Math.max(arr[0], arr[1]) //access max number

    //console.log(min, max)

    for(let i = min; i<= max; i++){
        temp = temp + i;
        //temp += i;
        //console.log(temp)
    }
    return temp;

}

console.log(sum([6,2]))