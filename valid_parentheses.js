/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/

// const isValid = function(s) {
//     // const legend = {
//     //     '{': '}',
//     //     '[': ']',
//     //     '(': ')'
//     // };

//     const openings = ['(', '{', '['];
//     const closings = [')', '}', ']'];

//     // EC: first character is a closing bracket
//     if (closings.includes(s[0]) || s.length % 2 === 1) return false;

//     let pointer1 = 0;
//     let pointer2 = 1;

//     while (pointer1 < s.length && pointer2 < s.length) {
//         console.log('pointer1', s[pointer1]);
//         console.log('pointer2', s[pointer2]);
//         // continue to increment pointer2 until we get to a closer
//         if (!closings.includes(s[pointer2])) {
//             pointer2++;
//             continue;
//         };

//         // console.log('test', closings.includes(s[pointer2]))
//         // pointer2 is a closing and it doesn't match the opening that pointer1 is pointing at
//         if (closings.includes(s[pointer2]) && openings.indexOf(s[pointer1]) !== closings.indexOf(s[pointer2])) {
//             return false
//         };

//         // pointer2 is a closing and it DOES match the opening pointer1 is pointing at
//         if ((closings.includes(s[pointer2]) && openings.indexOf(s[pointer1]) === closings.indexOf(s[pointer2])) || !openings.includes(s[pointer1])) {
//             pointer1 += 2;
//             pointer2 += 2;
//             continue;
//         };
//     }

//     // for (let i = 1; i < s.length; i++) {
//     //     console.log('pointer1', s[pointer1]);
//     //     console.log('pointer2', s[pointer2]);
//     //     // continue to increment pointer2 until we get to a closer
//     //     if (!closings.includes(s[pointer2])) {
//     //         pointer2++;
//     //         continue;
//     //     };

//     //     // console.log('test', closings.includes(s[pointer2]))
//     //     // pointer2 is a closing and it doesn't match the opening that pointer1 is pointing at
//     //     if (closings.includes(s[pointer2]) && openings.indexOf(s[pointer1]) !== closings.indexOf(s[pointer2])) {
//     //         return false
//     //     };

//     //     // pointer2 is a closing and it DOES match the opening pointer1 is pointing at
//     //     if ((closings.includes(s[pointer2]) && openings.indexOf(s[pointer1]) === closings.indexOf(s[pointer2])) || !openings.includes(s[pointer1])) {
//     //         pointer1 += 2;
//     //         pointer2 += 2;
//     //         continue;
//     //     };
//     // };

//     return true;
// };

const isValid = function(s) {
    const closingsStack = [];

    for (let idx = 0; idx < s.length; idx++) {
        const char = s[idx];

        // add the corresponding closer to the stack until we find a closer in the string
        // pop off the most recently added closer and verify that they match

        // using a switch case
        // switch (char) {
        //     case '(':
        //         closingsStack.push(')');
        //         break;
        //     case '{':
        //         closingsStack.push('}');
        //         break;
        //     case '[':
        //         closingsStack.push(']');
        //         break;
        //     default:
        //         if (closingsStack.pop() !== char) return false
        // };

        // using if...else if statements
        if (char === '(') {
            closingsStack.push(')');
        } else if (char === '{') {
            closingsStack.push('}');
        } else if (char === '[') {
            closingsStack.push(']');
        } else if (closingsStack.pop() !== char) {
            return false;
        }
    };

    return !closingsStack.length;
};

// According to leetcode, the if...else if statements solution was slightly faster and used slightly less memory

console.log(isValid("[{()}]"));