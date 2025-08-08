<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# explain javascript sort method ,how to use

The JavaScript **sort() method** is used to sort the elements of an array in place, meaning it changes (mutates) the original array. By default, sort() converts array elements to strings and sorts them lexicographically (alphabetical order based on Unicode values), which works well for strings but can produce unexpected results with numbers[^1_2][^1_4][^1_5].

### Basic Usage

```javascript
const fruits = ["banana", "apple", "cherry"];
fruits.sort();
// Result: ['apple', 'banana', 'cherry']
```

This sorts the array of strings alphabetically[^1_2][^1_4].

### Sorting Numbers (with a Compare Function)

When sorting numbers, always provide a **compare function** to get correct numerical sorting. Without it, numbers will be sorted as strings:

```javascript
const numbers = [100, 20, 5, 42];
numbers.sort();
// Result: [100, 20, 42, 5]  // Incorrect for numbers[^1_5]

numbers.sort((a, b) => a - b);
// Result: [5, 20, 42, 100]  // Correct ascending order[^1_1][^1_2][^1_5]

numbers.sort((a, b) => b - a);
// Result: [100, 42, 20, 5]  // Correct descending order[^1_1][^1_2][^1_4]
```

- If the compare function returns a negative value, a is sorted before b.
- If it returns positive, b is sorted before a.
- If it returns 0, the positions remain unchanged[^1_1][^1_3][^1_4].

### Sorting an Array of Objects

You can sort objects by a specific property using a custom compare function:

```javascript
const users = [
  { name: "Bob", age: 30 },
  { name: "Alice", age: 25 },
];
users.sort((a, b) => a.age - b.age);
// Result: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]
```

This sorts the array by the 'age' property in ascending order[^1_1][^1_2].

### Syntax

```javascript
array.sort([compareFunction]);
```

- `compareFunction` is **optional**. If omitted, array elements are converted to strings and sorted by Unicode code points[^1_2][^1_4][^1_5].

### Important Points

- **Original array is modified**. Use `toSorted()` in modern JavaScript for a non-mutating version[^1_2][^1_4].
- Always use a compare function to sort numbers or objects for correct results[^1_1][^1_2][^1_5].
- The method returns the sorted array for chaining operations[^1_1][^1_2].

The sort() method is widely used for ordering strings, numbers, or even custom object arrays in JavaScript programs[^1_1][^1_2][^1_4][^1_5].

<div style="text-align: center">⁂</div>

---

# explain find every some method in js

In JavaScript, the array methods **find()**, **every()**, and **some()** are used for searching and testing array elements with custom functions. Here's how each one works and how you can use them:

### 1. find()

- **Purpose:** Returns the value of the first array element that satisfies a provided testing function.
- **Usage:** Use when you want the first item that matches a specific condition.
- **Returns:** The first matching element, or `undefined` if no element matches.
- **Original array:** Not modified.

**Example:**

```javascript
const numbers = [4, 9, 16, 25];
const firstOver10 = numbers.find((num) => num > 10);
// firstOver10: 16
```

The callback function is called with `(element, index, array)`[^2_1][^2_2][^2_5][^2_6].

### 2. every()

- **Purpose:** Checks if **all** elements in the array pass the provided testing function.
- **Usage:** Use if you want to confirm all items meet a condition.
- **Returns:** `true` if all elements pass the test; otherwise, `false`.
- **Original array:** Not modified.

**Example:**

```javascript
const numbers = [2, 4, 6, 8];
const allEven = numbers.every((num) => num % 2 === 0);
// allEven: true
```

### 3. some()

- **Purpose:** Checks if **at least one** element in the array passes the provided testing function.
- **Usage:** Use if you're only interested if any item matches the condition.
- **Returns:** `true` if any element passes the test; otherwise, `false`.
- **Original array:** Not modified.

**Example:**

```javascript
const numbers = [1, 3, 5, 8];
const hasEven = numbers.some((num) => num % 2 === 0);
// hasEven: true
```

**Summary Table**

| Method  | Purpose                       | Returns              | Stops on    |
| :------ | :---------------------------- | :------------------- | :---------- |
| find()  | First element matching test   | Element or undefined | First match |
| every() | Checks if all elements match  | true or false        | First false |
| some()  | Checks if any element matches | true or false        | First true  |

- All three methods use a callback function with arguments (element, index, array), and an optional `thisArg`.
- These are core tools for searching or validating arrays in JavaScript.

<div style="text-align: center">⁂</div>

---

### 1. `fill()` and `splice()` Methods in JavaScript

#### `fill()` Method

- **Purpose:** Fills all elements in an array with a static value, from a start index to an end index.
- **Mutates array:** Yes, changes the original array.
- **Syntax:** `array.fill(value, start, end)`
  - `value` – Value to fill array with.
  - `start` _(optional)_ – Index to start filling (default is 0).
  - `end` _(optional)_ – Index to stop filling (default is array.length).
- **Example:**

```javascript
const arr = [1, 2, 3, 4];
arr.fill(0, 1, 3); // → [1, 0, 0, 4]
// Fills positions 1 and 2 with 0.
```

#### `splice()` Method

- **Purpose:** Adds or removes elements from an array at any position.
- **Mutates array:** Yes.
- **Syntax:** `array.splice(start, deleteCount, item1, item2, ...)`
  - `start` – Index to start changing the array.
  - `deleteCount` – Number of elements to remove.
  - `item1, item2, ...` _(optional)_ – Elements to add.
- **Examples:**

```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // → [1, 2, 4, 5] (removes item at index 2)
arr.splice(1, 0, 9); // → [1, 9, 2, 4, 5] (inserts 9 at index 1)
```

### 2. Iterables vs Array-Like Objects

#### **Iterables**

- **Definition:** Objects that implement the `@@iterator` method (have a `[Symbol.iterator]` property).
- **Examples:** Arrays, Strings, Maps, Sets.
- **Can be used with:** `for...of` loops, spread syntax (`...`), destructuring.
- **Example:**

```javascript
for (let char of "hello") {
  /* ... */
} // String is iterable
[...new Set([1, 2, 3])]; // Set is iterable
```

#### **Array-Like Objects**

- **Definition:** Objects with numeric indices and a `length` property, but they don't necessarily have array methods.
- **Examples:** `arguments` object in functions, NodeList from DOM queries, custom `{0: "a", 1: "b", length: 2}`.
- **Can be** converted **to Arrays:** `Array.from(arrayLike)`.
- **Example:**

```javascript
function foo() {
  console.log(arguments.length); // 'arguments' is array-like
}
```

### 3. Sets in JavaScript

#### **Defining a Set**

- **Set:** A collection of unique values (no duplicates).
- **Syntax:** `const mySet = new Set();`
- **Methods:** `add()`, `delete()`, `has()`, `clear()`, `size`.
- **Example:**

```javascript
const ids = new Set();
ids.add(3);
ids.add(5);
ids.add(3); // duplicate, won't be added again
// ids now contains 3 and 5
```

#### **Use Cases for Sets**

- **Remove duplicates:** Quickly deduplicate array values.

```javascript
const nums = [1, 2, 2, 3];
const unique = [...new Set(nums)]; // [1, 2, 3]
```

- **Membership testing:** Efficiently check if a value exists.
- **Storing unique items:** Useful for storing unique IDs, tags, values from data streams.
- **Set operations:** (with custom logic) – union, intersection, difference.

**Summary:**

- Use **fill()** to overwrite sections of an array, **splice()** to add/remove elements in-place.
- An **iterable** is any object usable with `for...of` because it implements `[Symbol.iterator]`; **array-like** is any object with numeric keys + length (but not actual arrays).
- **Set** is a built-in collection for unique values, ideal for deduplication and rapid membership checks.

---

# how to clone using Object.assign

To clone (copy) an object in JavaScript using **Object.assign()**, you can use the following syntax:

```javascript
const clone = Object.assign({}, originalObject);
```

- The first argument `{}` creates a new empty object.
- The second argument is the object you want to clone.
- This copies all _enumerable own properties_ from the original object to the new one[^4_1][^4_2][^4_5][^4_6][^4_7].

**Example:**

```javascript
const user = { name: "Alice", age: 25 };
const clonedUser = Object.assign({}, user);
console.log(clonedUser); // { name: "Alice", age: 25 }
```

**Important:**

- This creates a **shallow copy**, meaning if your original object has nested objects (like objects inside objects), those nested references are copied—not deeply cloned. Changes to a nested object in the clone will reflect in the original object, and vice versa[^4_1][^4_2][^4_7].
- For deep cloning (full duplication of nested structures), use alternatives like `structuredClone()` or external libraries[^4_1].

**In summary:** Use `Object.assign({}, obj)` for a quick, shallow clone of an object's top-level properties. Be cautious with nested data.

<div style="text-align: center">⁂</div>

---

# what is optional chaining

The **optional chaining operator (`?.`)** in JavaScript is a syntax feature that allows you to safely access deeply nested properties or methods of an object without having to manually check each level for null or undefined. If a reference in the chain is null or undefined, the expression automatically returns undefined instead of throwing an error[^5_1][^5_2][^5_3][^5_5][^5_7].

### How It Works

- **Property Access**:

```javascript
const city = user?.address?.city;
```

If `user` or `user.address` is null or undefined, `city` becomes undefined, instead of causing an error[^5_2][^5_3][^5_5][^5_7].

- **Method Calls**:

```javascript
const result = user?.getName?.();
```

If `user` or `getName` is null/undefined, it returns undefined[^5_1][^5_3][^5_5].

- **Array/Bracket Notation**:

```javascript
const value = arr?.[index];
```

If `arr` is null/undefined, it returns undefined instead of causing an error[^5_5].

### Why Use Optional Chaining?

- **Simplifies code**: No need for repetitive null checks like `if (user && user.address)`.
- **Avoids runtime errors**: Accessing properties of possibly undefined/null objects doesn’t crash your code; you simply get undefined[^5_2][^5_5].
- **Works with dynamic property names and function calls**[^5_1][^5_3][^5_5].

### Syntax

- `obj?.prop`
- `obj?.[expr]`
- `obj.method?.()`

### Example

```javascript
const user = { profile: { name: "Alice" } };

console.log(user?.profile?.name); // "Alice"
console.log(user?.settings?.theme); // undefined (no error is thrown)
```

### Important Notes

- Optional chaining only checks for null or undefined—not other falsy values like 0 or ""[^5_1].
- Should be used where it's acceptable for the value to be missing. Overuse can hide bugs[^5_5].
- Introduced in ES2020, supported in all modern browsers except Internet Explorer[^5_6][^5_7].

In summary:
**Optional chaining (`?.`) makes accessing nested data or methods safer and your code cleaner by automatically returning undefined when something in the chain is missing, instead of throwing an error.**[^5_1][^5_2][^5_3][^5_5][^5_7]

<div style="text-align: center">⁂</div>

---

# what is hoisting , what is lexical scopping , explain with example

**Hoisting** and **lexical scoping** are important concepts in JavaScript that affect how variables and functions are visible and used in your code.

## Hoisting

**Hoisting** is the process in JavaScript where variable and function declarations are moved to the top of their containing scope during compilation. This means you can sometimes reference variables or functions before you declare them in the code.

### How Hoisting Works:

- **Function declarations** are fully hoisted, so you can call them before their appearance in the code.
- **var variables:** The declaration is hoisted but not the value/initialization. So, their value is `undefined` until your code runs the assignment.
- **let/const:** The declaration is hoisted, but accessing them before initialization results in a `ReferenceError` (this time gap is known as the _Temporal Dead Zone_).

### Example: Variable Hoisting

```javascript
console.log(a); // undefined
var a = 5;
console.log(a); // 5
```

> Here, the declaration `var a` is hoisted, but the assignment part (`a = 5`) is not. So the first log outputs `undefined`[^6_1][^6_2][^6_3][^6_4][^6_5].

### Example: Function Hoisting

```javascript
sayHi(); // "Hello!"

function sayHi() {
  console.log("Hello!");
}
```

> Function declarations are fully hoisted. This lets you use `sayHi` before you declare it[^6_6][^6_5].

**Note:** Function expressions using `var` act like vars (hoisted as undefined), and with `let/const` they cause a ReferenceError if called before declaration.

## Lexical Scoping

**Lexical scoping** (or _static scoping_) describes how variable names are resolved based on where they are written in the source code, not where functions are called. In JavaScript, functions "capture" the scope in which they were defined, not invoked.

### How Lexical Scoping Works:

- Inner (nested) functions have access to variables declared in their own scope plus any outer (enclosing) scopes, up to the global scope.
- The _scope chain_ is what decides which variables are available.

### Example: Lexical Scope

```javascript
function outer() {
  let outerVar = "I am outside!";

  function inner() {
    console.log(outerVar); // Can access outerVar!
  }
  inner();
}
outer();
```

> `inner` can access `outerVar` because of lexical scoping: the _definition_ location, not where it's called, determines this[^6_7][^6_8][^6_9][^6_10].

#### Another Example:

```javascript
var a = 10;
function foo() {
  var b = 20;
  function bar() {
    var c = 30;
    console.log(a, b, c); // 10 20 30
  }
  bar();
}
foo();

// c is NOT accessible here, but a is accessible anywhere
```

> Here, `bar` can access `a`, `b`, and `c`, but `foo` cannot access `c`, and global cannot access `b` or `c`[^6_9][^6_10].

### Summary Table

| Concept             | What Happens                                  | Code Example                                                                   | Output/Consequence           |
| :------------------ | :-------------------------------------------- | :----------------------------------------------------------------------------- | :--------------------------- |
| **Hoisting**        | Declarations moved to top of scope            | `console.log(x); var x = 1;`                                                   | `undefined`                  |
| **Lexical Scoping** | Scope is defined by where you write functions | `function out() { let x = 1; function in() { console.log(x); } in(); } out();` | `1` (inner can access outer) |

**In plain words:**

- **Hoisting** lets you reference functions/vars before declaring them. But with `var`, they're `undefined` until initialized. With `let`/`const`, referencing them before the line is a ReferenceError due to the Temporal Dead Zone.
- **Lexical scoping** means inner functions can always "see" outer variables, because their access rights are set when they are _defined_ in the code—not when called[^6_1][^6_7][^6_8][^6_9][^6_10].

<div style="text-align: center">⁂</div>

---

# block scope vs function scope

**Block Scope** and **Function Scope** are two key concepts in JavaScript that determine where variables are accessible within your code.

## Function Scope

- **Definition:** Variables declared within a function are only accessible inside that function (they are "scoped" to the function).
- **Applies to:** All variables declared with `var`, as well as `let` and `const` if used inside functions.
- **Example:**

```javascript
function example() {
  var a = 5;
  console.log(a); // Accessible here
}
console.log(a); // ReferenceError: a is not defined
```

Here, `a` is only accessible inside the `example` function and not outside[^7_1][^7_2][^7_3].

## Block Scope

- **Definition:** Variables are only accessible within the nearest set of curly braces `{...}` in which they are declared (like within an `if` statement, loop, or a function block).
- **Applies to:** Variables declared with `let` and `const` (introduced in ES6). Variables declared with `var` do not have block scope—they are still function-scoped.
- **Example:**

```javascript
if (true) {
  let x = 2;
  const y = 3;
  var z = 4;
  // x and y are accessible only here
}
console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined
console.log(z); // 4 (z is function-scoped, not block-scoped)
```

Here, `x` and `y` are block-scoped and not accessible outside the `if` block, but `z` (declared with `var`) leaks out to the surrounding function or global scope[^7_1][^7_2][^7_4][^7_3][^7_5].

## Key Differences

| Feature              | Function Scope                                      | Block Scope                                   |
| :------------------- | :-------------------------------------------------- | :-------------------------------------------- |
| Associated With      | `var` (and all types inside a function)             | `let`, `const` (ES6+)                         |
| Visibility           | Whole function                                      | Only inside the `{ ... }` block               |
| Example (`if` block) | Accessible outside the block if declared with `var` | Not accessible if declared with `let`/`const` |
| Introduced in        | JavaScript (ES3, always existed)                    | ES6 (2015), with `let`/`const`                |

### Summary

- Use **block scope** (`let`, `const`) to limit the lifetime and visibility of variables to specific code blocks, making code safer and easier to manage.
- Use **function scope** (`var`) if you want a variable to be visible anywhere inside a function (but avoid `var` for new code as it can lead to subtle bugs).

Block scope helps prevent accidental variable leaks and overwrites, especially in loops and conditionals, while function scope is broader and can create unintended behavior in complex functions[^7_1][^7_4][^7_3][^7_5].

<div style="text-align: center">⁂</div>

---

# rest parameter with example

The **rest parameter** in JavaScript allows a function to accept an indefinite number of arguments as an array. It is represented by three dots (`...`) followed by a parameter name. This makes it easy to write functions that can handle any number of inputs without knowing in advance how many arguments will be passed.

### Syntax

```javascript
function functionName(...restParameter) {
  // restParameter is an array containing the extra arguments
}
```

- The rest parameter must be the last parameter in the function definition.
- Only one rest parameter is allowed per function[^8_1][^8_2].

### Example 1: Simple Sum Function

```javascript
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
```

Here, `numbers` is an array that contains all the arguments passed to the function[^8_1][^8_2][^8_4][^8_5].

### Example 2: Rest Parameter with Named Parameters

```javascript
function printName(first, ...others) {
  console.log(first); // first argument
  console.log(others); // array of remaining arguments
}

printName("Alice", "Bob", "Charlie", "David");
// Output:
// Alice
// [ 'Bob', 'Charlie', 'David' ]
```

In this example, the first parameter gets the first argument (`'Alice'`), and `others` gets the array `['Bob', 'Charlie', 'David']`[^8_1][^8_2][^8_6].

### Key Points

- Rest parameters always collect the remaining arguments into an array, which means you can use all array methods (like `map`, `filter`, etc.) on them[^8_1][^8_5].
- Rest parameters are different from the `arguments` object because `arguments` is array-like but not an actual array, whereas the rest parameter is a real array[^8_1].

**In summary:**
Use the rest parameter (`...param`) to make flexible, variadic functions that can handle any number of arguments, with all extra values automatically collected into an array.

<div style="text-align: center">⁂</div>

---

### What is a Promise in JavaScript?

A **Promise** is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to write cleaner, more manageable asynchronous code, replacing "callback hell" with a more readable structure using `.then()`, `.catch()`, and `.finally()` handlers. A promise can be in one of three states:

- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed[^9_1][^9_2][^9_3][^9_4].

**Example:**

```javascript
let myPromise = new Promise((resolve, reject) => {
  // some async operation
  if (success) resolve("Done!");
  else reject("Error!");
});
```

### Core Promise Methods

Here are the most important static methods for working with multiple promises or controlling their behavior:

#### 1. `Promise.all()`

- **Use:** Waits for all promises in an iterable to be fulfilled. If _any_ promise rejects, it returns a rejected promise immediately.
- **Returns:** A new promise resolved with an array of results (order preserved), or rejected with the reason of the _first_ rejection[^9_5][^9_6].
- **Example:**

```javascript
Promise.all([p1, p2, p3])
  .then((values) => {
    // All fulfilled: values is [v1, v2, v3]
  })
  .catch((error) => {
    // At least one rejected: error
  });
```

#### 2. `Promise.allSettled()`

- **Use:** Waits for all input promises to settle, regardless of whether they fulfill or reject. Useful when you want to know the result of every promise[^9_7][^9_8].
- **Returns:** A promise resolved with an array of result objects: `{status: "fulfilled", value: ...}` or `{status: "rejected", reason: ...}`.
- **Example:**

```javascript
Promise.allSettled([p1, p2]).then((results) => {
  // results: [{status: "fulfilled", value: ...}, {status: "rejected", reason: ...}]
});
```

#### 3. `Promise.any()`

- **Use:** Fulfills as soon as _any_ promise in the iterable fulfills. Ignores rejections unless all fail, in which case it rejects with an `AggregateError`[^9_9][^9_10].
- **Returns:** A promise resolved with the value of the first fulfilled promise, or rejected if all fail.
- **Example:**

```javascript
Promise.any([p1, p2, p3])
  .then((value) => {
    // First fulfilled value
  })
  .catch((error) => {
    // All rejected cases (AggregateError)
  });
```

#### 4. `Promise.race()`

- **Use:** Settles as soon as _the first_ promise in the iterable settles (fulfilled or rejected)[^9_11][^9_12].
- **Returns:** A new promise resolved/rejected with the outcome of the first settled promise.
- **Example:**

```javascript
Promise.race([p1, p2, p3])
  .then((value) => {
    // First settled
  })
  .catch((error) => {
    // First to reject, if that's what happens
  });
```

#### 5. `Promise.resolve()`

- **Use:** Quickly creates a promise that is already resolved with a given value. If the value is a promise, returns it "as is"[^9_13][^9_14].
- **Example:**

```javascript
Promise.resolve(42).then((val) => console.log(val)); // 42
```

#### 6. `Promise.reject()`

- **Use:** Quickly creates a promise that is already rejected with a given reason, for debugging or to propagate errors[^9_15][^9_16].
- **Example:**

```javascript
Promise.reject("Error!").catch((err) => console.log(err)); // Error!
```

#### 7. `Promise.try()`

- **Purpose:** Not standard in JavaScript (not part of ECMAScript), but some libraries (like Bluebird) provide it. It executes a function and wraps the result in a resolved or rejected promise, catching synchronous exceptions as rejections. In JavaScript, use `Promise.resolve().then(() => expr)` or consider custom code[^9_13].

```javascript
// Native alternative to Promise.try
Promise.resolve().then(() => maybeThrows()); // catches sync errors
```

#### 8. `Promise.withResolvers()`

- **Use:** Returns an object containing `{ promise, resolve, reject }` — giving you manual control over a new promise and its resolvers. This is safer and less error-prone than manual assignment. As of 2024, it is available in modern browsers and Node.js (may require feature flag)[^9_17][^9_18].
- **Example:**

```javascript
const { promise, resolve, reject } = Promise.withResolvers();
// ... somewhere else
resolve("result");
// ... or
reject("error");
```

With this, you can "externally" resolve or reject a promise, which is useful in event-driven or reactive programming.

**Summary Table of Promise Methods**

| Method                  | What it does                                                             |
| :---------------------- | :----------------------------------------------------------------------- |
| Promise.all()           | Resolves when _all_ promises are fulfilled, or rejects at first failure. |
| Promise.allSettled()    | Resolves when _all_ settle, with array of all outcomes.                  |
| Promise.any()           | Resolves when _any_ promise fulfills, rejects if _all_ fail.             |
| Promise.race()          | Resolves/rejects as soon as the first input settles.                     |
| Promise.resolve()       | Creates a promise already fulfilled with a value.                        |
| Promise.reject()        | Creates a promise already rejected with a reason.                        |
| Promise.withResolvers() | Gives a new promise plus separate resolve/reject functions.              |

Use these methods to handle complex asynchronous logic in a robust and readable way in modern JavaScript development[^9_1][^9_3][^9_17].

<div style="text-align: center">⁂</div>

---

# give example of race , any , all , allsetttled with example of calling apis

Here are API usage examples for Promise.race(), Promise.any(), Promise.all(), and Promise.allSettled(), using typical API calls with fetch. Each illustrates how these methods behave with asynchronous HTTP requests.

### 1. Promise.race(): Settles when the _first_ promise settles (fulfilled or rejected).

```javascript
const api1 = fetch("https://api.example.com/data1");
const api2 = fetch("https://api.example.com/data2");

Promise.race([api1, api2])
  .then((response) => response.json())
  .then((data) => {
    console.log("First API responded:", data);
  })
  .catch((error) => {
    console.error("First API failed or rejected:", error);
  });
```

- Whichever fetch settles (resolved or error) first, that's the outcome you get. This is useful if you want the fastest response or implement a request timeout[^10_1][^10_5][^10_6].

### 2. Promise.any(): Resolves with the _first fulfilled_ promise (ignores rejections unless all fail).

```javascript
const api1 = fetch("https://api.example.com/data1");
const api2 = fetch("https://api.example.com/data2");
const api3 = fetch("https://broken-api-url.com/dataX"); // Intentionally broken

Promise.any([api1, api2, api3])
  .then((response) => response.json())
  .then((data) => {
    console.log("First successful API response:", data);
  })
  .catch((aggregateError) => {
    console.error("All APIs failed:", aggregateError);
  });
```

- Rejects only if _all_ promises reject; otherwise, resolves with the value of the first to fulfill (regardless of their speeds)[^10_5].

### 3. Promise.all(): Resolves when _all_ promises fulfill, rejects at the first failure.

```javascript
const api1 = fetch("https://api.example.com/data1");
const api2 = fetch("https://api.example.com/data2");

Promise.all([api1, api2])
  .then((responses) => Promise.all(responses.map((r) => r.json())))
  .then((dataArr) => {
    console.log("All APIs succeeded:", dataArr);
  })
  .catch((error) => {
    console.error("At least one API call failed:", error);
  });
```

- This is ideal when you need every request to succeed before proceeding (e.g., data aggregation). If any fetch fails, the overall promise rejects[^10_7][^10_5].

### 4. Promise.allSettled(): Resolves when all promises settle, with an array of results reflecting both fulfilled and rejected.

```javascript
const api1 = fetch("https://api.example.com/data1");
const api2 = fetch("https://broken-api-url.com/dataX"); // Intentionally broken

Promise.allSettled([api1, api2]).then((results) => {
  results.forEach((result, idx) => {
    if (result.status === "fulfilled") {
      result.value
        .json()
        .then((data) => console.log(`API ${idx + 1} fulfilled:`, data));
    } else {
      console.error(`API ${idx + 1} failed:`, result.reason);
    }
  });
});
```

- Use this when you want all results, successes and failures, without short-circuiting[^10_7].

**Summary:**

- **race:** First promise to settle (fulfilled/rejected) determines result.
- **any:** First fulfilled promise, ignores rejects unless all fail.
- **all:** All must succeed, or fails on the first rejection.
- **allSettled:** Waits for all, gives a report of each outcome.

Adapt these for your specific use case by swapping in your API URLs and handling results as necessary.

<div style="text-align: center">⁂</div>

---

### `call`, `apply`, and `bind` in JavaScript (Interview Prep)

These three methods belong to JavaScript function objects and are used to **control the value of `this`** when invoking a function. They are interview favorites due to their foundational role in JavaScript's function execution and object context behavior.

## 1. `call()`

- **Purpose:** Invokes a function, explicitly setting its `this` value and passing _arguments individually_.
- **Syntax:** `func.call(thisArg, arg1, arg2, ...)`
- **Example:**

```javascript
function greet(msg) {
  console.log(msg + ", " + this.name);
}
const user = { name: "Alice" };
greet.call(user, "Hello"); // Hello, Alice
```

    - `greet` runs as if it’s a method of `user`, so inside `greet`, `this.name` refers to `"Alice"`.

## 2. `apply()`

- **Purpose:** Invokes a function, explicitly setting `this`, but **arguments are provided as an array/list**.
- **Syntax:** `func.apply(thisArg, [arg1, arg2, ...])`
- **Example:**

```javascript
function sum(a, b) {
  return a + b + this.c;
}
const ctx = { c: 3 };
console.log(sum.apply(ctx, [1, 2])); // 6
```

    - Use `apply` when arguments are coming as an array (e.g., spreading arrays into functions before ES6).

## 3. `bind()`

- **Purpose:** Returns a **new function** where `this` is permanently set to a given object, optionally with some arguments pre-filled ("partial application").
- **Syntax:** `const boundFunc = func.bind(thisArg, arg1, arg2, ...)`
- **Example:**

```javascript
function multiply(factor) {
  return this.x * factor;
}
const obj = { x: 5 };
const double = multiply.bind(obj, 2);
console.log(double()); // 10
```

    - `multiply` is "bound" to `obj`, so `this.x` always refers to `5`, and `factor` is always `2` in `double()`.

### Key Differences Table

|           | `.call()`                       | `.apply()`                     | `.bind()`                                              |
| :-------- | :------------------------------ | :----------------------------- | :----------------------------------------------------- |
| Executes? | **Immediately**                 | **Immediately**                | **Returns new function**                               |
| Args      | Individual arguments            | Arguments as an array          | Individual (can pre-fill)                              |
| Use case  | Method borrowing, custom `this` | When args are arrays, variadic | Event handlers, partial application, delayed execution |

### Interview Insights \& Tips

- **Understanding Execution Context:** These methods let you override the "owner" (context) when calling a function—crucial for working with callbacks, event handlers, or borrowing methods.
- **Partial Application (bind):** `bind` lets you create reusable or specialized functions, such as event callbacks with preset context/args.
- **`apply` vs `call`:** Use `apply` when you have an array of arguments, and `call` for a fixed, known list.
- **Method Borrowing:** You can make one object use a method from another:

```javascript
const arrLike = { 0: "hi", 1: "bye", length: 2 };
Array.prototype.join.call(arrLike, ", "); // "hi, bye"
```

#### Bonus: ES6 Spread Operator

- With ES6, `[...arr]` can replace many uses of `apply` for spreading arrays into functions:

```javascript
Math.max.apply(null, [1, 2, 3]); // old
Math.max(...[1, 2, 3]); // modern
```

**In conclusion:**

- Use `call` or `apply` for immediate invocation with custom `this`.
- Use `bind` for delayed invocation or setting permanent context, especially in event-driven code.
- These are staples for any JavaScript interview—be able to explain them, contrast their differences, and show practical short code examples.

---

# what is this

In JavaScript, the **this** keyword refers to the object that is executing the current piece of code—its value is determined by how (and where) a function is called, not by how or where it was defined[^12_1][^12_2][^12_3][^12_4][^12_7].

### How **this** Works

- **In a method (object property function):**
  `this` refers to the object the method belongs to.

```javascript
const person = {
  name: "Alex",
  greet() {
    console.log(this.name);
  },
};
person.greet(); // "Alex"
```

- **In a standalone function (global context):**
  - In non-strict mode: `this` refers to the global object (e.g., `window` in browsers).
  - In strict mode: `this` is `undefined`.

```javascript
function show() {
  console.log(this);
}
show(); // window (non-strict), undefined (strict mode)
```

- **With call/apply/bind:**
  You can explicitly set the value of `this`.

```javascript
function say() {
  console.log(this.val);
}
say.call({ val: "hi" }); // "hi"
```

- **Arrow functions:**
  `this` is _lexically inherited_—it takes `this` from the outer (parent) scope, not from its own invocation[^12_1][^12_4].

```javascript
const obj = {
  val: 10,
  method: function () {
    const arrow = () => console.log(this.val);
    arrow(); // 10
  },
};
obj.method();
```

- **In event handlers:**
  `this` refers to the DOM element that received the event.

### Key Points

- **Dynamic value:** Depends on _how_ the function is called, not just where it’s written.
- Use `bind`, `call`, or `apply` to control or change `this` for a specific function call.
- Arrow functions do not have their own `this`; they inherit it from their defining scope.

### Why it matters (in interviews)

Understanding `this` is crucial in JavaScript because it directly affects the behavior of functions and object methods, especially in complex applications or when borrowing methods, using classes, or wiring event handlers[^12_1][^12_2][^12_3][^12_4][^12_7].

> "The this keyword refers to the object to which it belongs. Its value is determined by how a function is called, making it a dynamic reference." [^12_3]

For further reading and multiple examples, see MDN and W3Schools on the `this` keyword[^12_1][^12_2].

<div style="text-align: center">⁂</div>

---

# // every time we add a method in userMethods and then take its referrence in createUser , it will be an disaster to add method everytime , sometime we can forget to add it so we will make a trick

// we will create user object taking proto of userMethod
// then while calling the method in user , if there is no method in user then javascript will search the method in its **proto**
const userMethods={
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18:function(){
        return this.age>=18;
    }
}
function createUser(firstName , lastName,email,age,address){
    const user=Object.create(userMethods);  //\*_\*\*imp line of the century_/
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;

return user;
}

const user= createUser("suvojit","chatterjee","suvojit@gmail.com",22,"ads");
const user1= createUser("sam","chatterjee","suvojit@gmail.com",28,"ads");
const user2= createUser("suvo","chatterjee","suvojit@gmail.com",2,"ads");

console.log(user , user.is18());
console.log(user1, user1.is18());
console.log(user2, user2.is18());

explain this code

Absolutely! Let's break down your code and explain the concepts and the “trick” you're using, which is a fundamental technique in JavaScript for object creation and inheritance.

## **The Problem**

You want to create many user objects which share common methods (like about and is18), but you **don't want to copy these methods onto every user** (because that's inefficient and error-prone).
Instead, you'd rather have all users “share” the same method references—so you don’t need to remember to add each method every time you create a new user.

## **The Solution: Prototypal Inheritance with Object.create()**

### 1. **Define shared methods in one object** (`userMethods`)

```javascript
const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};
```

- Here, `userMethods` is a simple object holding all methods you want every user to use.
- These methods refer to `this`, which means they will work on _any_ user object that uses them as methods!

### 2. **User Factory Function** (`createUser`)

```javascript
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethods); // << KEY LINE
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;

  return user;
}
```

- **Object.create(userMethods):**
  - This creates a new, empty object (`user`), **whose prototype is `userMethods`**.
  - This means if you try to access a property (like `about`) that's not found directly on `user`, JavaScript will “look up the chain” and find `about` on `userMethods`.
  - This is also called **delegation**: if the object (`user`) can’t handle a method, its prototype (`userMethods`) will.
- You assign the data properties (firstName, etc) to each new user.
- The **methods are not copied:** all users just "see" and use the methods from `userMethods`.

### 3. **Creating Users**

```javascript
const user = createUser(
  "suvojit",
  "chatterjee",
  "suvojit@gmail.com",
  22,
  "ads"
);
const user1 = createUser("sam", "chatterjee", "suvojit@gmail.com", 28, "ads");
const user2 = createUser("suvo", "chatterjee", "suvojit@gmail.com", 2, "ads");
```

- Each of these is a unique object holding individual user data, but _sharing_ the methods in `userMethods`.

### 4. **How Methods Work**

```javascript
console.log(user, user.is18());
console.log(user1, user1.is18());
console.log(user2, user2.is18());
```

- With code like `user.is18()`, here’s what happens:

1. JavaScript checks: does `user` have a property `is18`? No.
2. Looks at `user`'s prototype → `userMethods` → finds `is18` and runs it, with `this` binding to `user`.
3. Inside `is18`, `this.age` refers to that specific user's age.

This means:

- **No method copying or forgetting:** All methods are always available, so you never forget to “add” a method—just define it once.
- **Easy maintenance:** Add more methods to `userMethods`, and _all_ user objects get access automatically.

### **Why is this important?**

- **Memory Efficient:** Methods are not duplicated for every object—less memory used.
- **DRY (Don’t Repeat Yourself):** Add or update methods in one place.
- **Core of ES5 OOP:** This pattern is the basis of JavaScript’s object system. Modern classes (ES6) use the exact same idea internally.

## **Summary Table**

| Concept         | How Used in This Code                                 |
| :-------------- | :---------------------------------------------------- |
| Prototype       | Each user’s prototype is `userMethods`                |
| Method Lookup   | Calls to `user.is18()` delegate to `userMethods.is18` |
| Object.create() | Key trick: sets prototype without copying methods     |

## **In Short**

You’ve used **Object.create()** to link all user objects to a shared set of methods (`userMethods`) as their prototype. This “prototypal inheritance” ensures you never have to manually add each method to every user, and you can extend user functionality in one place!

This is a **classic, interview-worthy pattern in JavaScript**—see it as the “manual” version of what ES6 `class` keyword does behind the scenes.

If you want a follow-up comparing this to JavaScript classes (`class User { ... }`) or more interview context, let me know!

---

# what is **proto** and [[prototype]] , are they same ? how to use it when to use it ?

In JavaScript, **proto** and [[Prototype]] both relate to the prototype chain and inheritance, but they differ in their _role_ and how they're accessed.

## [[Prototype]]: The Internal Link

- **[[Prototype]]** is the _internal_ hidden slot referencing the prototype object that any JS object inherits from.
- You **cannot** access [[Prototype]] directly in code—it's a specification/internal term.
- All objects (except Object.create(null)) have a [[Prototype]] slot. The prototype chain lookup for methods/properties happens via this internal reference[^14_2][^14_5].

## **proto**: The Public Accessor

- \***\*proto\*\*** is a historical accessor property provided on most objects in browsers, allowing you to _get or set_ an object's [[Prototype]] at runtime.
- That is: `obj.__proto__` exposes the same value that is stored in the object's [[Prototype]] slot.
- Modifying **proto** (e.g. `obj.__proto__ = newProto`) changes the prototype chain for that object[^14_2][^14_5].
- Today, **modifying **proto** is discouraged**—use `Object.getPrototypeOf(obj)` and `Object.setPrototypeOf(obj, proto)` instead[^14_3][^14_4][^14_8].

## Are They the Same?

- **Conceptually, yes:** `obj.__proto__` gets or sets the object's [[Prototype]] slot[^14_2].
- **But syntactically:**
  - `[[Prototype]]` is an internal mechanism, not directly accessible.
  - `__proto__` is a public property (now somewhat deprecated) that _exposes_ [[Prototype]].
- You can also use Object.create, Object.getPrototypeOf() and Object.setPrototypeOf() for the same tasks, with better cross-environment support[^14_3][^14_4].

## How and When to Use

- **When inspecting or learning** the prototype chain:
  `obj.__proto__` (or better: `Object.getPrototypeOf(obj)`)
- **When setting a new prototype at runtime:**
  Use `Object.setPrototypeOf(obj, newProto)` (not `obj.__proto__ = newProto`).
- **When creating objects with a specific prototype:**
  Use `Object.create(proto)`.

### Example

```js
const proto = {
  sayHi() {
    console.log("Hi!");
  },
};
const obj = Object.create(proto);

console.log(obj.__proto__ === proto); // true (for learning)
console.log(Object.getPrototypeOf(obj) === proto); // true (recommended)
```

## ES6 Modern Practice

- **Avoid using `__proto__`** directly in production code; rely on `Object.getPrototypeOf()` and `Object.setPrototypeOf()`[^14_3][^14_8].
- `__proto__` survives mostly for browser legacy support and interactive debugging.

### Summary Table

| Internal term         | Property/exposure        | Usage                             |
| :-------------------- | :----------------------- | :-------------------------------- |
| [[Prototype]]         | Hidden/engine-internal   | Specifies actual prototype link   |
| **proto**             | Public accessor (legacy) | Gets/sets [[Prototype]] of object |
| Object.getPrototypeOf | Modern function          | Gets [[Prototype]] safely         |
| Object.setPrototypeOf | Modern function          | Sets [[Prototype]] safely         |

**In interviews:**
Know that objects have a [[Prototype]] slot, which forms the inheritance chain. `__proto__` is a public getter/setter for this slot, but is now discouraged. Always prefer Object.getPrototypeOf()/Object.setPrototypeOf() in real code[^14_2][^14_3][^14_4][^14_8].

<div style="text-align: center">⁂</div>

---

# Prototype.

📦 Key Concepts:

1. Function’s Prototype Property
   Every JavaScript function (that you can call with new) has a prototype property:

You’re absolutely right—there’s a distinction between the **prototype property of functions** and the **[[Prototype]]/**proto** of objects**, and this often confuses learners!

Let’s clarify:

## **1. Function’s `prototype` Property**

- Every JavaScript **function** (that can be used as a constructor with `new`) has a **`.prototype` property**.
- This `prototype` property is _not_ the prototype of the function itself! Instead:
  - It’s the object that will become the **[[Prototype]]** (or `__proto__`) _of all instances created by that function_.

### **Example**

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log("Hello, " + this.name);
};

const user = new Person("Suvojit");
// user.__proto__ === Person.prototype // true
user.sayHello(); // "Hello, Suvojit"
```

- When you use `new Person('Suvojit')`, the created object’s internal prototype (`[[Prototype]]` or `__proto__`) is set to `Person.prototype`.
- Any properties or methods you add to `Person.prototype` are shared by **all instances** of Person.

## **2. Objects and [[Prototype]]**

- Every JavaScript object has an internal hidden property called **[[Prototype]]**.
- For objects created by a constructor function (with `new`), **that [[Prototype]] is set to the constructor’s `.prototype` property**.

## **3. Purpose and Use**

- **Function `.prototype`:** Used as a blueprint for all future instances of that function.
  - Add shared methods/properties here for performance and consistency.
- **Object’s [[Prototype]] (or `__proto__`):** Determines where inherited properties/methods are looked up.

## **Summary Table**

| Term                             | Applies To | Purpose                              |
| :------------------------------- | :--------- | :----------------------------------- |
| `function.prototype`             | Functions  | Template for instances (constructor) |
| `object.__proto__`/[[Prototype]] | Objects    | Internal inheritance lookup chain    |

### **Key Interview Point**

> **The `prototype` property on functions is how JavaScript sets up inheritance for objects created via `new`. It’s where shared behavior lives. The `[[Prototype]]`/`__proto__` is the actual object-based inheritance mechanism used at runtime.**

Thank you for pointing out the key difference! Understanding _both_ the function's `.prototype` and the object's `[[Prototype]]` is essential for mastering JavaScript inheritance. If you want a deep-dive into how they interact or how ES6 classes use prototypes under the hood, just ask!

---

# what is new in js , what is does , ?

// new keyword
// 1) create empty object and this pt it.
// 2) return this
// 3) new create a connection of proto and prototype

explain it

The **new** keyword in JavaScript is used to create a new object instance from a constructor function or class. When you use new, JavaScript internally performs several steps to set up inheritance, property binding, and object creation. Here’s a detailed explanation of what happens:

### What Happens When You Use `new`?

#### 1) **Creates an Empty Object**

- JavaScript creates a new, empty object in memory.
- This object will eventually become the instance you are constructing[^17_1][^17_2][^17_5][^17_7].

#### 2) **Sets the Prototype Link**

- The new object's internal [[Prototype]] (its `__proto__`) is set to the _prototype property_ of the constructor function/class.
- This means any methods or properties defined on the constructor’s `.prototype` property are accessible to the new instance through the prototype chain[^17_2][^17_3][^17_5][^17_4].

#### 3) **Binds `this` and Executes the Constructor**

- The constructor function or class is called, with `this` set to the newly created object.
- Any properties or side effects set with `this.property = value` inside the constructor are attached directly to this new instance.
- Local variables (e.g., `let x = 2`) that are not assigned to `this` are not part of the new object[^17_2][^17_3][^17_6].

#### 4) **Returns the New Object**

- If the constructor returns an object explicitly (not `null` or a non-object), that object is returned.
- Otherwise, JavaScript returns the newly created object from step 1[^17_2][^17_3][^17_4][^17_6].

### Visual Flow

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHi = function () {
  console.log("Hi, I'm " + this.name);
};

const user = new Person("Alice", 25);
// user is now: { name: "Alice", age: 25 }, with prototype-linked methods
user.sayHi(); // "Hi, I'm Alice"
```

- `user.__proto__ === Person.prototype` // true

### Summary Table

| Step              | What it Does                                                        |
| :---------------- | :------------------------------------------------------------------ |
| Create object     | Makes new empty object                                              |
| Set [[Prototype]] | Links object's `__proto__` to constructor's `.prototype`            |
| Bind `this`       | Runs constructor with `this` bound to new object                    |
| Return object     | Returns the new object, unless constructor returns different object |

### Why is `new` Important?

- **Inheritance:** Sets up the prototype chain, so all created objects inherit methods and properties from the constructor’s prototype.
- **Object Creation:** Simplifies creating multiple similar objects with shared behavior.
- **Encapsulation:** Properties assigned to `this` only exist on that instance, while methods on the prototype are shared.

### In Short

The new keyword automates these steps:

1. Makes a blank object.
2. Sets up inheritance by linking `__proto__` to the constructor’s `.prototype`.
3. Runs the constructor, binding `this` to the new object.
4. Returns the new object (unless something else is explicitly returned)[^17_1][^17_2][^17_3][^17_5][^17_6].

**This mechanism is the foundation for classical-style object orientation and inheritance in JavaScript, even under the hood of modern ES6 class syntax.**

<div style="text-align: center">⁂</div>

---

# So in I got to know that in JavaScript the classes are fake. Acho. Because internally it is creating a prototype and then attaching with the proto. And everything is going on. So write smart Small description about this. But just it does.

Yes, your understanding is correct: **JavaScript classes are syntactic sugar over prototypal inheritance**. When you declare a class in JavaScript, it does not create classical classes like in Java or C++—instead, it sets up prototypes and links instances via the prototype chain under the hood[^18_7][^18_1].

**Smart Description:**

> In JavaScript, the class keyword merely automates the creation of constructor functions and sets up the prototype chain to support inheritance. Internally, every class method is attached to the class’s prototype, and each object created from the class links its internal [[Prototype]] (or **proto**) to that prototype. There are no true classes—just objects and prototypes working together to share behavior and enable inheritance[^18_7][^18_1][^18_6].

This is why classes in JavaScript are often called “syntactic sugar”: they make code cleaner and easier to write, but everything is still built on prototypes and the prototype chain.

<div style="text-align: center">⁂</div>

---

# Why are JavaScript classes considered "fake" or syntactic sugar

JavaScript classes are considered "fake" or syntactic sugar because they do not introduce true classical (class-based) inheritance as found in languages like Java or C++. Instead, the class syntax is simply a more readable and familiar way to work with JavaScript’s underlying prototype-based inheritance system[^19_1][^19_3].

**Key points:**

- The `class` keyword, added in ES6 (2015), creates a constructor function and sets up the prototype chain under the hood, just as you would manually do using functions and prototypes before ES6[^19_1][^19_3].
- Defining methods inside a class actually attaches those methods to the class's `.prototype`, so all instances share the same methods—nothing fundamentally changes about how inheritance or method sharing works in JavaScript[^19_3].
- When you use `extends` for inheritance, JavaScript uses the prototype chain to establish links between "subclasses" and "superclasses", but these are still just objects linked by prototypes, not by static, compile-time class definitions as in Java/C++[^19_1][^19_3].

In summary:
JavaScript's class syntax only disguises the prototype-based nature of the language behind a more familiar (class-like) surface. All inheritance is still done by objects linking to other objects via prototypes. The `class` keyword does not provide true classical classes, but it makes code simpler and more approachable for developers coming from other object-oriented languages[^19_1][^19_3].

<div style="text-align: center">⁂</div>

---

# How does prototype creation happen when I declare a class in JS

When you declare a class in JavaScript, a special object called the **prototype** is automatically created for that class. This object serves as the blueprint for all instances created from the class, ensuring that methods and shared properties are available to every instance via the prototype chain.

### Step-by-Step: How Prototype Is Created When Declaring a Class

1. **Class Declaration**:
   - When you write a class (e.g., `class Person { ... }`), JavaScript creates a function (the class constructor) and, at the same time, a `Person.prototype` object[^20_1][^20_3].
2. **Populating the Prototype**:
   - All methods defined inside the class body (but not inside the constructor or as static methods) are assigned as properties on the class's `.prototype` object, not on individual instances[^20_3][^20_1].
   - Example:

```javascript
class Person {
  sayHi() {
    console.log("Hi!");
  }
}
// Person.prototype.sayHi exists now
```

3. **Instance Creation with new**:
   - When you create an instance (e.g., `const p = new Person();`), JavaScript:
     - Creates a blank object (`p`).
     - Sets the object's internal `[[Prototype]]` (a.k.a. `__proto__`) to point to `Person.prototype`.
     - Runs the constructor with `this` referring to the new object[^20_1][^20_3][^20_6].
   - Result: `p.__proto__ === Person.prototype` is `true`.
4. **Prototype Chain**:
   - If you call `p.sayHi()`, JavaScript will:
     - Look for `sayHi` directly on `p`.
     - If not found, it follows the prototype chain to `Person.prototype`, where it will find and execute `sayHi`.

### Visualized:

```javascript
class Box {
  getValue() {
    return 42;
  }
}

const b = new Box();
// b.__proto__ === Box.prototype
// Box.prototype has getValue()
```

### Summary Table

| Action                    | What JavaScript Creates                                  |
| :------------------------ | :------------------------------------------------------- |
| Declares a class          | Constructor function + associated `.prototype`           |
| Defines class method      | Adds method to `.prototype`, not each instance           |
| Creates instance with new | Links instance's `[[Prototype]]` to class's `.prototype` |

### Key Point

> The prototype object (`ClassName.prototype`) in JavaScript is set up automatically when you declare a class. All instance methods live there, and all instances link to this prototype, enabling efficient inheritance and shared behavior[^20_1][^20_3][^20_8].

For deeper learning, see MDN’s guides on prototype chains and using classes in JavaScript[^20_1][^20_8].

<div style="text-align: center">⁂</div>

## The `super` Keyword in JavaScript

The **super** keyword is used in JavaScript classes to access and call functions on an object's parent (superclass). It's essential for inheritance, allowing child classes to extend parent functionality while adding their own behavior.

### Basic Usage of `super`

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls parent constructor
    this.breed = breed;
  }
  speak() {
    super.speak(); // Calls parent method
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();
// Output:
// Buddy makes a sound
// Buddy barks
```

## Inheritance in JavaScript

**Inheritance** allows a class to inherit properties and methods from another class using the `extends` keyword. The child class can override parent methods or add new functionality.

```javascript
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
    console.log(`${this.brand} vehicle started`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // Must call super() first
    this.model = model;
  }
  start() {
    super.start(); // Call parent method
    console.log(`${this.model} engine running`);
  }
}

const myCar = new Car("Toyota", "Camry");
myCar.start();
// Output:
// Toyota vehicle started
// Camry engine running
```

## Getter and Setter Methods

**Getters** and **setters** allow you to define methods that are accessed like properties, providing controlled access to object data with validation or computed values.

```javascript
class Rectangle {
  constructor(width, height) {
    this._width = width; // Convention: _ indicates private
    this._height = height;
  }

  // Getter
  get area() {
    return this._width * this._height;
  }

  get width() {
    return this._width;
  }

  // Setter with validation
  set width(value) {
    if (value > 0) {
      this._width = value;
    } else {
      console.log("Width must be positive");
    }
  }

  set height(value) {
    if (value > 0) {
      this._height = value;
    } else {
      console.log("Height must be positive");
    }
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 50 (computed property)
console.log(rect.width); // 5
rect.width = 8; // Uses setter
console.log(rect.area); // 80
rect.width = -2; // "Width must be positive"
```

## Static Methods and Properties

**Static** members belong to the class itself, not to instances. They're called directly on the class and are often used for utility functions or class-level data.

### Static Methods

```javascript
class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static PI = 3.14159; // Static property
}

// Called on the class, not an instance
console.log(MathHelper.add(5, 3)); // 8
console.log(MathHelper.multiply(4, 7)); // 28
console.log(MathHelper.PI); // 3.14159

// Cannot be called on instances
const helper = new MathHelper();
// helper.add(1, 2); // TypeError: helper.add is not a function
```

### Static Properties and Inheritance

```javascript
class Counter {
  static count = 0;

  constructor(name) {
    this.name = name;
    Counter.count++; // Increment class-level counter
  }

  static getCount() {
    return Counter.count;
  }

  static reset() {
    Counter.count = 0;
  }
}

const c1 = new Counter("First");
const c2 = new Counter("Second");
console.log(Counter.getCount()); // 2
Counter.reset();
console.log(Counter.getCount()); // 0
```

## Comprehensive Example: Combining All Concepts

```javascript
class Person {
  static population = 0;

  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    Person.population++;
  }

  // Getter
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get age() {
    return this._age;
  }

  // Setter with validation
  set age(value) {
    if (value >= 0 && value <= 150) {
      this._age = value;
    } else {
      console.log("Invalid age");
    }
  }

  // Static method
  static getPopulation() {
    return Person.population;
  }

  speak() {
    console.log(`Hi, I'm ${this.fullName}`);
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, studentId) {
    super(firstName, lastName, age); // Call parent constructor
    this.studentId = studentId;
  }

  speak() {
    super.speak(); // Call parent method
    console.log(`My student ID is ${this.studentId}`);
  }

  // Static method in child class
  static createStudent(name, age, id) {
    const [first, last] = name.split(" ");
    return new Student(first, last, age, id);
  }
}

// Usage
const person = new Person("John", "Doe", 30);
const student = new Student("Jane", "Smith", 20, "S12345");

console.log(person.fullName); // "John Doe"
console.log(student.fullName); // "Jane Smith"
person.age = 31; // Uses setter
console.log(Person.getPopulation()); // 2

student.speak();
// Output:
// Hi, I'm Jane Smith
// My student ID is S12345

// Using static factory method
const newStudent = Student.createStudent("Bob Wilson", 22, "S67890");
console.log(Person.getPopulation()); // 3
```

## Summary Table

| Concept     | Purpose                                 | Usage                                |
| :---------- | :-------------------------------------- | :----------------------------------- |
| **super**   | Access parent class methods/constructor | `super()`, `super.methodName()`      |
| **extends** | Create inheritance between classes      | `class Child extends Parent`         |
| **get/set** | Control property access with validation | `get prop()`, `set prop(value)`      |
| **static**  | Class-level methods/properties          | `static methodName()`, `static prop` |

These features make JavaScript classes powerful for object-oriented programming, providing encapsulation, inheritance, and controlled access to data while maintaining the underlying prototype-based nature of the language.

# Some topics which i missed before

## 🔹 Nullish Coalescing (??)

The ?? operator returns the right-hand side operand when the left-hand side is null or undefined.

```JavaScript

const name = null ?? "Anonymous";
console.log(name); // "Anonymous"
```

> ✅ Use when you want to fallback only for null or undefined (not '' or 0).

## 🔹 Custom Events

Custom Events are user-defined events triggered manually using CustomEvent.

```JavaScript
const myEvent = new CustomEvent('greet', { detail: { name: "Suvojit" } });

document.addEventListener('greet', (e) => {
  console.log("Hello", e.detail.name);
});

document.dispatchEvent(myEvent);
```

> ✅ Use to create decoupled communication between modules/components.

## 🔹 WeakMap

Like Map, but keys must be objects and are weakly held (not prevent GC).

Not iterable.

```JavaScript

let obj = {};
const wm = new WeakMap();
wm.set(obj, "private data");

console.log(wm.get(obj)); // "private data"
```

> ✅ Good for private data in classes.

## 🔹 WeakSet

Like Set, but only stores objects, weakly.

Not iterable.

```JavaScript

let user = {};
const ws = new WeakSet();
ws.add(user);
console.log(ws.has(user)); // true
```

> ✅ Used for object tracking without memory leaks.

## 🔹 Factory Functions vs Constructor Functions

### 🏭 Factory Function:

```JavaScript

function createUser(name) {
  return {
    name,
    greet() {
      return `Hello ${name}`;
    }
  };
}
```

### 🏗 Constructor Function:

```JavaScript

function User(name) {
  this.name = name;
  this.greet = function () {
    return `Hello ${name}`;
  };
}
const user = new User("Suvojit");
```

| Feature        | Factory Function | Constructor Function |
| -------------- | ---------------- | -------------------- |
| Return Object  | Explicit         | Implicit (`this`)    |
| Uses `new`     | ❌               | ✅                   |
| `this` binding | Not required     | Required             |

## 🔹 Currying

Transforming a function with multiple arguments into a series of functions that take one argument.

```js
function add(a) {
  return function (b) {
    return a + b;
  };
}
console.log(add(2)(3)); // 5
```

> ✅ Helps in function reuse and partial application.

## 🔹 Memoization

Storing the result of expensive function calls and returning cached result when same inputs occur again.

```js
function memoize(fn) {
  const cache = {};
  return function (n) {
    if (n in cache) return cache[n];
    return (cache[n] = fn(n));
  };
}

const factorial = memoize(function (n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
});
```

> ✅ Great for performance optimization.

### 🔹 Pure vs Impure Functions

Pure Function:

- Same output for same input

- No side effects

```js
function add(a, b) {
  return a + b;
}
```

Impure Function:

- Changes external state or depends on it

```js
let count = 0;
function increment() {
  count++;
}
```

> ✅ Prefer pure functions for predictability.

## 🔹 Memory Management

JavaScript automatically manages memory using Garbage Collection.

Common memory issues:

- Unused variables

- Closures holding memory

- Listeners not removed

- Global variables

### 🧠 Best Practices:

- Null out large data after use

- Remove event listeners

- Avoid global scope pollution

## 🔹 Garbage Collection

Mechanisms:

- Mark-and-Sweep: Objects not reachable are removed

- Reference Counting (legacy)

Example:

```js
let obj = { name: "X" };
obj = null; // Ready for GC
```

> ✅ Make sure no references are holding memory unnecessarily.

## 🔹 Debounce vs Throttle

### 🔄 Debounce:

- Waits for a pause in activity before running.

```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
```

> ✅ Use for input fields, resize events

### ⏱ Throttle:

- Runs function at most once every X ms.

```js
function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```

> ✅ Use for scroll, drag, resize handlers
