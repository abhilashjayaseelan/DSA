// reverse a string without changing the original order of the words

function reverseString(str) {
    let strArr = str.split(" ");
    let reversedStr = strArr.map(curr => {
        let char = curr.split("");
        let left = 0;
        let right = char.length - 1;
        while (left < right ) {
            [char[left], char[right]] = [char[right], char[left]];
            left++;
            right--;
        }
        return char.join("");
    })
    return reversedStr.join(" ");
}


let string = 'Hello world';

let reversedStr = reverseString(string);
console.log(reversedStr)