"use strict";

/*
=========================================
JavaScript Operators
=========================================
This file covers:
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Increment & Decrement Operators
6. Ternary Operator
7. Nullish Coalescing Operator
8. Optional Chaining Operator
9. Type Operators
10. Bitwise Operators
11. String Operators
=========================================
*/

console.log("===== Arithmetic Operators =====");

let a = 20;
let b = 6;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus (Remainder):", a % b);
console.log("Exponentiation:", a ** 2);

console.log("\n===== Assignment Operators =====");

let x = 10;

x += 5;   // x = x + 5
console.log("x += 5 :", x);

x -= 2;   // x = x - 2
console.log("x -= 2 :", x);

x *= 3;
console.log("x *= 3 :", x);

x /= 2;
console.log("x /= 2 :", x);

x %= 4;
console.log("x %= 4 :", x);

x **= 3;
console.log("x **= 3 :", x);

console.log("\n===== Comparison Operators =====");

let num1 = 10;
let num2 = "10";

console.log("== :", num1 == num2);     // true
console.log("=== :", num1 === num2);   // false
console.log("!= :", num1 != num2);     // false
console.log("!== :", num1 !== num2);   // true
console.log("> :", num1 > 5);
console.log("< :", num1 < 5);
console.log(">= :", num1 >= 10);
console.log("<= :", num1 <= 5);

console.log("\n===== Logical Operators =====");

let age = 22;
let hasLicense = true;

console.log("AND (&&):", age >= 18 && hasLicense);
console.log("OR (||):", age < 18 || hasLicense);
console.log("NOT (!):", !hasLicense);

console.log("\n===== Increment & Decrement =====");

let count = 5;

console.log("Initial:", count);
console.log("Post Increment:", count++);
console.log("After Post Increment:", count);

console.log("Pre Increment:", ++count);

console.log("Post Decrement:", count--);
console.log("After Post Decrement:", count);

console.log("Pre Decrement:", --count);

console.log("\n===== Ternary Operator =====");

let marks = 75;

let result = marks >= 40 ? "Pass" : "Fail";
console.log(result);

console.log("\n===== Nullish Coalescing Operator (??) =====");

let username = null;

console.log(username ?? "Guest");

let city = "Hyderabad";

console.log(city ?? "Unknown");

console.log("\n===== Optional Chaining Operator (?.) =====");

const student = {
    name: "Vivek",
    address: {
        city: "Bhopal"
    }
};

console.log(student.address?.city);
console.log(student.contact?.phone);

console.log("\n===== Type Operators =====");

console.log(typeof 100);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null); // historical JavaScript bug

console.log([] instanceof Array);
console.log(student instanceof Object);

console.log("\n===== Bitwise Operators =====");

let p = 5;   // 0101
let q = 3;   // 0011

console.log("AND (&):", p & q);
console.log("OR (|):", p | q);
console.log("XOR (^):", p ^ q);
console.log("NOT (~):", ~p);
console.log("Left Shift (<<):", p << 1);
console.log("Right Shift (>>):", p >> 1);

console.log("\n===== String Operator =====");

let firstName = "Vivek";
let lastName = "Borra";

console.log(firstName + " " + lastName);

console.log("\n===== Operator Precedence Example =====");

let value = 10 + 5 * 2;

console.log(value);

console.log("\n===== End of Operators Demo =====");