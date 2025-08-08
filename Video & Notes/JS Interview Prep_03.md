# Asynchronous Javascript

### setTimeout

- Executes a function once after a delay.
``` javascript
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

```

### setInterval

- Executes a function repeatedly at specified intervals.
``` javascript
setInterval(() => {
  console.log("Repeats every 1 second");
}, 1000);


```

### what is callback
A callback is a function passed as an argument to another function, which is then invoked later, typically after an asynchronous operation completes.

```javascript
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Suvojit", sayBye);

```

#### 😣 What is Callback Hell?
Callback Hell refers to the situation when multiple nested callbacks are used, making code hard to read, debug, and maintain.

#### 🔺 What is the Pyramid of Doom?
It’s a nickname for the nested structure of callbacks that looks like a pyramid due to increasing indentation level.

#### 💥 Callback Hell / Pyramid of Doom Example:
Let’s simulate a sequence of asynchronous operations using setTimeout():
```javascript
setTimeout(() => {
  console.log("Step 1: Login");

  setTimeout(() => {
    console.log("Step 2: Get User Data");

    setTimeout(() => {
      console.log("Step 3: Get Orders");

      setTimeout(() => {
        console.log("Step 4: Show Order Summary");
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);
```

#### ✅ How to Resolve Callback Hell
We use modern alternatives like:

- Promises
- async/await

```javascript
function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1: Login");
      resolve();
    }, 1000);
  });
}

function getUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2: Get User Data");
      resolve();
    }, 1000);
  });
}

function getOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3: Get Orders");
      resolve();
    }, 1000);
  });
}

function showSummary() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 4: Show Order Summary");
      resolve();
    }, 1000);
  });
}

// Chaining Promises
login()
  .then(getUserData)
  .then(getOrders)
  .then(showSummary);

```

```javascript
async function mainFlow() {
  await login();
  await getUserData();
  await getOrders();
  await showSummary();
}

mainFlow();
```

### 🌟 What is a Promise in JavaScript?
A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

In simple words:

- A Promise is a placeholder for a value that is not available yet, but will be resolved in the future — either successfully (fulfilled) or with an error (rejected).

#### 🗣 Real-Life Analogy (in Natural Language)
"I promise you that I will work hard in your company."

Right now, you're making a promise. The actual result (your performance) will be seen in the future.

Similarly in JavaScript:
```javascript
const myPromise = new Promise((resolve, reject) => {
  // Doing some async task...
  setTimeout(() => {
    resolve("I worked hard and succeeded!");
    // or reject("I failed.");
  }, 2000);
});

```
Here:

- You're promising to return a result in 2 seconds.

- The outcome could be success (resolve) or failure (reject).

- But when you created the promise, the result was not available yet.

🔁 Using the Promise
```javascript 
myPromise
  .then(result => console.log("Success:", result))
  .catch(error => console.log("Error:", error));
```  
#### 🧠 Summary
- A Promise represents a future value.

- It helps write cleaner async code compared to callbacks.

It has 3 states:

- pending: still waiting

- fulfilled: successfully completed

- rejected: failed with error


### 📌 What is the Microtask Queue in JavaScript?
The Microtask Queue (also known as the Job Queue) is a queue used by the JavaScript engine to handle microtasks, such as:

- Promise.then() / .catch() / .finally()

- queueMicrotask()

- MutationObserver (browser)

#### 🔁 What is the Callback Queue (a.k.a. Task Queue / Macrotask Queue)?
The Callback Queue is where other asynchronous tasks (called macrotasks) are queued, like:

- setTimeout()

- setInterval()

- setImmediate() (Node.js)

- requestAnimationFrame() (browser)

- I/O events (e.g. file reading, HTTP requests)

#### ⚙️ The JavaScript Event Loop Priority
The Event Loop runs in cycles:

- Picks the next macrotask from the callback queue (if the call stack is empty)

- Executes all microtasks that are in the microtask queue before moving to the next macrotask

🔥 Important:
Microtask Queue always has higher priority than the Callback Queue.

That means:

- All microtasks are executed immediately after the current task (synchronous or macrotask) finishes

- Only after the Microtask Queue is empty, the Event Loop picks the next macrotask

🔁 Visualization of Event Loop Execution Order
```text
1. Call Stack runs synchronous code
2. If stack is empty:
     a. Run all microtasks (Microtask Queue)
     b. Then run 1 task from Callback Queue
     c. Repeat
```

example
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

```
```outputs
Start
End
Promise     ← Microtask (runs first)
Timeout     ← Callback/Macrotask
```

#### 🧠 Why Microtasks Have Higher Priority?
Because Promises are often used for critical logic in chains (e.g., data fetching, API flow), so JavaScript ensures they are handled as soon as possible, before any UI updates or delayed tasks.

#### ⏱ Real-Life Analogy
- 🛎 Callback Queue is like "regular hotel requests" (like ordering food)

- 🚨 Microtask Queue is like "urgent fire alarm calls" — they get handled immediately before anything else

#### 🧪 Another Example with Nested Promises and Timeout
```javascript
setTimeout(() => {
  console.log("setTimeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  return Promise.resolve();
}).then(() => {
  console.log("Promise 2");
});

setTimeout(() => {
  console.log("setTimeout 2");
}, 0);
```
```outputs
Promise 1
Promise 2
setTimeout 1
setTimeout 2
```

💡 Bonus: queueMicrotask()
You can manually add a function to the microtask queue:

```javascript
console.log("Start");

queueMicrotask(() => {
  console.log("Microtask");
});

console.log("End");
```
Output:
```outputs

Start
End
Microtask
```

| Term      | Type             | Introduced In        | Modern Use?                 | Description                                                   |
| --------- | ---------------- | -------------------- | --------------------------- | ------------------------------------------------------------- |
| **AJAX**  | Concept          | 2005 (popularized)   | ✅ Still used                | Technique (not an API) for making asynchronous HTTP calls     |
| **XHR**   | Web API          | Older (2000s)        | 🚫 Outdated (but supported) | Built-in object (`XMLHttpRequest`) used to send HTTP requests |
| **Fetch** | Web API          | ES6+ (2015)          | ✅ Preferred                 | Modern, promise-based API to make HTTP requests               |
| **Axios** | External library | Community-maintained | ✅ Preferred                 | Promise-based HTTP client with advanced features              |


### ✅ 1. AJAX – Asynchronous JavaScript and XML
- Not a tool but a technique or concept

- Means: Fetching data from the server asynchronously without reloading the page

- Originally used XMLHttpRequest, but now we use Fetch or Axios

🧠 AJAX = Concept using XHR, Fetch, or Axios

### ✅ 2. XHR (XMLHttpRequest)
- Legacy API used to send HTTP requests in the browser

- Verbose and hard to work with

- Still supported for backward compatibility

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "/api/data");
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```

🟥 Drawbacks:

- Callback-based (not promise-based)

- Error handling is messy

- Harder to chain requests

### ✅ 3. Fetch API
Built into modern browsers

Promise-based and cleaner than XHR

```javascript 
fetch("/api/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```
#### ✅ Advantages:

- Clean, readable, uses Promises

- Native to browsers (no install)

- Supports async/await

#### 🟥 Limitations:

- Doesn’t support older browsers (IE)

- No built-in support for request timeout, interceptors, etc.


### ✅ 4. Axios
Popular third-party library

Built on top of XMLHttpRequest or http module (Node.js)

Uses Promises like fetch

```javascript
axios.get("/api/data")
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```
#### ✅ Advantages:

- Works both in browser and Node.js

- Automatic JSON parsing

- Supports interceptors, cancellation, timeouts

- Shorter syntax for requests with payloads

- Automatically transforms request/response data


### 🧩 20 Asynchronous "Guess the Output" Challenges
Write your guesses before checking. You can ask me later to verify or explain the answer. Try to think in terms of call stack, Web APIs, callback queue, and event loop.

- 01
``` javascript
console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 0);
console.log("End");
```

- 02
``` javascript
setTimeout(() => {
  console.log("First");
}, 300);

setTimeout(() => {
  console.log("Second");
}, 100);

setTimeout(() => {
  console.log("Third");
}, 200);

```

- 03
``` javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

```

- 04
``` javascript

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

```

- 05
``` javascript

console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");


```

- 06
``` javascript

setTimeout(() => {
  console.log("One");
  setTimeout(() => {
    console.log("Two");
  }, 0);
}, 0);


```

- 07
``` javascript

let count = 0;
const id = setInterval(() => {
  console.log(count++);
  if (count === 3) clearInterval(id);
}, 100);


```

- 08
``` javascript

console.log("Before");
setTimeout(() => console.log("Inside Timeout"), 0);
console.log("After");


```

- 09
``` javascript

setTimeout(() => {
  console.log("Timeout");
}, 100);

const start = Date.now();
while (Date.now() - start < 200) {} // Blocking
console.log("End");


```

- 10
``` javascript

function test() {
  setTimeout(() => console.log("Timeout"), 0);
  console.log("Function End");
}
test();

```

- 11
``` javascript

setTimeout(() => {
  console.log("First");
  setTimeout(() => {
    console.log("Second");
  }, 0);
}, 0);


```

- 12
``` javascript

let i = 0;
const int = setInterval(() => {
  console.log(i++);
  if (i === 5) clearInterval(int);
}, 300);


```
- 13
``` javascript

(() => {
  console.log("Start");
  setTimeout(() => {
    console.log("Async");
  }, 0);
  console.log("End");
})();


```

- 14
``` javascript

setTimeout((msg) => {
  console.log(msg);
}, 100, "Hello with arg");


```

- 15
``` javascript
setTimeout(() => {
  console.log("This takes time");
}, 5000);
console.log("Done");


```

- 16
``` javascript
setTimeout(() => console.log("1"), 0);
setTimeout(() => console.log("2"), 0);
setTimeout(() => console.log("3"), 0);

```

- 17
``` javascript
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("Done");


```
- 18
``` javascript
["a", "b", "c"].forEach((item) => {
  setTimeout(() => console.log(item), 0);
});

```

- 19
``` javascript
try {
  setTimeout(null, 100);
  console.log("No error?");
} catch (e) {
  console.log("Error caught");
}


```

- 20
``` javascript
const id = setTimeout(() => {
  console.log("Should not run");
}, 100);

clearTimeout(id);


```
