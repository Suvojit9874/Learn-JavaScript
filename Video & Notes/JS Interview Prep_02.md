# How javascript works

# JavaScript Engine – Code Compilation & Execution Phases

JavaScript is often called an **interpreted** language, but modern engines (like V8, SpiderMonkey, etc.) use a **Just-In-Time (JIT) Compilation** process. This means JavaScript code is **parsed, compiled, optimized, and then executed**—all during runtime.

Below is a step-by-step breakdown of the internal phases that happen when JavaScript code runs:

---

## 🔁 1. **Tokenizing / Lexical Analysis**

- **What happens:** The raw code (as a string) is broken down into tokens.
- **Tokens** are like meaningful chunks: keywords (`function`), identifiers (`x`), operators (`+`), literals (`"hello"`).
- **Purpose:** Prepare the code for syntax parsing by identifying the building blocks.

✅ **Input:** Raw JavaScript source code  
✅ **Output:** Array of tokens

---

## 🌳 2. **Parsing / Syntax Analysis**

- **What happens:** Tokens are parsed into a **Parse Tree / Abstract Syntax Tree (AST)**.
- **AST (Abstract Syntax Tree)** is a hierarchical tree representation of the program structure.

✅ **Input:** Tokens  
✅ **Output:** AST (tree of nodes, each node representing a language construct)

---

## 🛠️ 3. **AST Transformations**

- **What happens:** The AST may be transformed or optimized during the parsing process.
- **Example:** Destructuring or shorthand syntax may be converted to simpler forms for easier interpretation/compilation.

✅ **Input:** AST  
✅ **Output:** Optimized AST (Optional)

---

## 🧠 4. **Scope & Environment Setup**

- **What happens:** Variable and function declarations are stored in memory (hoisting).
- **Creates:**
  - Execution Contexts
  - Variable Environment
  - Lexical Environment

✅ **Input:** AST  
✅ **Output:** Memory allocation and execution context structure

---

## ⚙️ 5. **Intermediate Bytecode Generation**

- **What happens:** JavaScript engine converts AST into intermediate bytecode or machine-friendly code using **Interpreter**.
- **Purpose:** To quickly run the code without waiting for full optimization.
- Example: In V8, this is done by the **Ignition** interpreter.

✅ **Input:** AST  
✅ **Output:** Bytecode

---

## 🚀 6. **Optimization with JIT (Just-In-Time Compilation)**

- **What happens:** Frequently used functions or "hot code" is compiled into machine code by the **JIT Compiler**.
- **Engines like V8** use the **TurboFan** compiler for this.
- **Benefit:** Faster execution after the first few runs.

✅ **Input:** Bytecode  
✅ **Output:** Optimized Machine Code

---

## 💥 7. **Code Execution**

- **What happens:** Finally, the bytecode or machine code is executed line by line.
- **This includes:**
  - Creating and managing call stack
  - Resolving scope chains
  - Managing asynchronous operations (event loop, promises)
  - Executing instructions

✅ **Input:** Bytecode or Optimized Machine Code  
✅ **Output:** Executed result, console output, DOM updates, etc.

---

## 📌 Summary Flow

```text
Source Code
   ↓
Tokenizing
   ↓
Parsing
   ↓
Abstract Syntax Tree (AST)
   ↓
Interpreter → Bytecode
   ↓
(JIT Compiler) → Optimized Machine Code
   ↓
Execution
```

# JavaScript: Synchronous vs Asynchronous Behavior

---

## ❓ Question:

**JavaScript is a synchronous language, but it handles asynchronous tasks like `setTimeout`, `fetch`, etc. How is that possible? Are those async tasks handled by JavaScript or the browser?**

---

## ✅ Short Answer:

Yes, **JavaScript is single-threaded and synchronous** by design. However, **asynchronous tasks are offloaded to the browser (or Node.js environment), not handled directly by JavaScript itself**.

---

## 📌 Detailed Explanation

### 🧵 JavaScript is Single-threaded

- JavaScript runs in a **single thread**.
- It executes **one line at a time** in a top-down manner (synchronous execution).
- This model avoids race conditions but limits concurrency.

---

## ⚡ Asynchronous Capabilities – Provided by the Environment

### 🌐 In the Browser:

Asynchronous APIs like:

- `setTimeout`, `setInterval`
- `fetch`, `XMLHttpRequest`
- DOM events (`onclick`, `onload`, etc.)
- `Web APIs` (Geolocation, Media, etc.)

👉 **These are provided by the browser, not the JS engine**.

### 🖥️ In Node.js:

- `fs.readFile`, `http`, timers
- **These are provided by the Node.js runtime**, not JavaScript itself.

---

## ⚙️ How It Works – Under the Hood

1. **Main Thread (Call Stack):**

   - Executes your synchronous JS code.

2. **Web APIs (Browser or Node APIs):**

   - When you call `setTimeout()`, it’s handled by the browser’s timer, not the JS engine.

3. **Callback Queue:**

   - Once the async task finishes, its callback is pushed into the callback queue.

4. **Event Loop:**
   - Continuously checks if the call stack is empty.
   - If empty, it pushes the queued callback into the stack for execution.

---

## 📊 Visualization

```javascript
JS Code:
console.log("Start");
setTimeout(() => console.log("Timer"), 0);
console.log("End");
```

```output
Output:
Start
End
Timer
```

# JavaScript – Lexical Environment Explained

---

## ❓ Question:

**What is a Lexical Environment in JavaScript? Describe it with examples.**

---

## ✅ Short Answer:

A **Lexical Environment** is a structure that holds **identifier-variable mapping** (i.e., where variables and function declarations live). It is created whenever **a function or a block of code is executed**.

---

## 📌 Definition:

> A **Lexical Environment** is a conceptual structure that consists of two parts:
>
> 1. **Environment Record** – where variable and function declarations are stored.
> 2. **Outer Lexical Environment Reference** – a reference to the parent lexical environment (used for scope chain resolution).

---

## 🧠 Lexical Means “Static” (Not Dynamic)

- **Lexical** refers to the fact that scope is determined **at the time of writing code**, not during execution.
- JavaScript uses **lexical scoping**, which means **a function’s scope is based on where it is written in the code**.

---

## 🔁 How It Works

- Each time a function is invoked, a **new Lexical Environment** is created.
- Variables declared inside that function are stored in the function's **local Environment Record**.
- The function also keeps a **reference to its outer environment**, creating a **scope chain**.

---

## 🧪 Example Code

```javascript
function outer() {
  let a = 10;

  function inner() {
    let b = 20;
    console.log(a + b);
  }

  inner();
}

outer();
```

# JavaScript – Execution Contexts

---

## ❓ Question:

**What is the Global Execution Context (GEC)? What is the Function Execution Context (FEC)? Explain with example.**

---

## 🧠 What is an Execution Context?

An **Execution Context** is a concept that represents the environment in which JavaScript code is evaluated and executed.

There are two main types of Execution Contexts:

---

## 🌍 1. Global Execution Context (GEC)

### ✅ What is it?

- Created when the JavaScript file first runs.
- There is **only one** GEC per program.
- It creates:
  - **Global Object** (e.g., `window` in browsers)
  - **`this` binding** (points to global object)
  - **Global Lexical Environment**

### 📌 Characteristics:

- It is the **default** or **base context**.
- Any code not inside a function is in the GEC.

---

## 🔁 2. Function Execution Context (FEC)

### ✅ What is it?

- Created **each time a function is invoked**.
- It contains:
  - Arguments Object
  - Local Variables
  - Inner Function Declarations
  - Reference to Outer Lexical Environment

### 📌 Characteristics:

- Each function has **its own context**.
- Multiple FECs can exist (stacked).
- When function execution completes, its context is **popped** from the stack.

---

## 🧱 Structure of an Execution Context

Each context has:

1. **Memory/Creation Phase (Hoisting):**
   - Variables & functions are stored in memory.
2. **Execution Phase:**
   - Code is executed line by line.

---

## 🔢 Example with GEC & FEC

```javascript
var name = "Suvojit";

function greet() {
  var greeting = "Hello";
  console.log(greeting + " " + name);
}

greet();
```

### 📊 Execution Context Stack (Call Stack)

- 🟢 `Global (GEC)` is created first when the script starts.
- 🟢 `greet() FEC` is pushed to the top when `greet()` is invoked.
- 🔴 After `greet()` finishes, `greet() FEC` is popped from the stack.

# JavaScript – `var`, `let`, `const`, Hoisting, and Temporal Dead Zone (TDZ)

---

## ❓ Question:

**What is hoisting? Are `let` and `const` hoisted? Are they "wasted"? What is the Temporal Dead Zone (TDZ)?**

---

## ✅ 1. What is Hoisting?

> **Hoisting** is JavaScript's default behavior of moving **variable and function declarations** to the **top of their scope** (memory phase), before code execution begins.

### 🔄 How it works:

- **Declarations** are hoisted, not **initializations**.

---

## 🧪 Example with `var` (Hoisted and Initialized as `undefined`)

```javascript
console.log(a); // undefined
var a = 5;
```

Behind the scene

```javascript
var a; // hoisted
console.log(a); // undefined
a = 5;
```

✅ No error, because a is hoisted and initialized with undefined.

✅ 2. Are let and const hoisted?
Yes, BUT...
let and const are hoisted, but they are not initialized.

They stay in a "Temporal Dead Zone (TDZ)" from the start of the block until their declaration is encountered.

❌ Accessing them before declaration results in a ReferenceError.

### 🚨 3. What is Temporal Dead Zone (TDZ)?

- Definition:

  > The Temporal Dead Zone (TDZ) is the period between:

- The beginning of the block

- And the actual declaration of the variable (let or const)

During this time, accessing the variable will throw a ReferenceError.

🧪 TDZ Example

```javascript
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

Internally:

```javascript
// b is in TDZ here
let b; // declaration happens here
b = 10;
```

🧪 TDZ with const

```javascript
console.log(c); // ❌ ReferenceError
const c = 20;
```

const must be both declared and initialized at the same time.
It also lives in the TDZ before declaration.

⚠️ 4. Are They "Wasted"?
If you meant "wasted" as in unused or memory-wasteful — No, modern JS engines optimize memory.

If you meant "are they wasted because they throw error before use" — No, it's intentional behavior for safety.

### Summary table

| Feature          | `var`              | `let`      | `const`    |
| ---------------- | ------------------ | ---------- | ---------- |
| Hoisted          | ✅ Yes              | ✅ Yes      | ✅ Yes      |
| Initialized      | ✅ `undefined`      | ❌ No (TDZ) | ❌ No (TDZ) |
| TDZ Applies      | ❌ No               | ✅ Yes      | ✅ Yes      |
| Redeclarable     | ✅ Yes (same scope) | ❌ No       | ❌ No       |
| Reassignable     | ✅ Yes              | ✅ Yes      | ❌ No       |
| Must Initialize? | ❌ No               | ❌ No       | ✅ Yes      |

# JavaScript – Scope Chain

---

## ❓ Question:
**What is the Scope Chain in JavaScript? Explain with example.**

---

## ✅ Definition:

> The **scope chain** in JavaScript is a mechanism that allows **nested functions to access variables declared in their outer scopes**.

Each execution context (global or function) has a **Lexical Environment**, and when JavaScript tries to access a variable, it first looks in the **current scope**. If not found, it moves outward — up the **scope chain** — until it either finds the variable or reaches the global scope.

---

## 📌 Key Concepts

- **Scope**: The current context of execution (function/block).
- **Lexical Scope**: Scope is determined by the **placement** of functions and blocks **in the code**.
- **Scope Chain**: The chain of Lexical Environments used to resolve variable names.

---

## 🧠 How the Scope Chain Works

1. JavaScript engine starts from the **current scope**.
2. If the variable is not found, it **traverses up** to the **outer Lexical Environment**.
3. It continues until:
   - It finds the variable, or
   - It reaches the **Global Scope**, where it stops.

---

## 🧪 Example

```javascript
let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a + b + c); // Accesses a, b, and c
  }

  inner();
}

outer();
```

#### 🧾 Real-World Analogy
Think of it like searching for a file:

1. First, you check your desk (local scope).

2. If it's not there, you check your room (outer scope).

3. Still not found? You check your house (global scope).

# JavaScript – Closures

---

## ❓ Question:
**What is a Closure in JavaScript? Explain with example.**

---

## ✅ Definition:

> A **closure** is the combination of a **function** and the **lexical environment** within which that function was declared.

In simpler terms:
- A **closure** gives you access to an **outer function's variables** from an **inner function**, even **after** the outer function has finished executing.

---

## 🧠 Key Characteristics of Closures:

- They "remember" the variables from their outer scope.
- Closures are created every time a function is defined, **at function creation time**.
- Closures **preserve the scope chain**.

---

## 🧪 Example 1: Basic Closure

```javascript
function outer() {
  let name = "Suvojit";

  function inner() {
    console.log("Hello, " + name);
  }

  return inner;
}

const greet = outer();  // outer() has finished, but...
greet();                // Hello, Suvojit (closure still remembers 'name')
```

🔍 Explanation:
inner() is returned from outer() and stored in greet.
Even though outer() has already executed, inner() still has access to name because of closure.

🧪 Example 2: Counter with Closure
```JavaScript

function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
```
```Output
1
2
3
```


🔍 Explanation:
The inner function remembers the count variable defined in the outer function.

This is possible because of closure.

🔒 Why Are Closures Useful?

- Data Encapsulation

- Maintaining state in async operations

- Callback functions

- Functional programming patterns

- Event handlers and timers

⚠️ Common Mistake:
```JavaScript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3 3 3
```
fix 
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0 1 2
```
✅ Because let is block scoped — closure captures the correct value of i.


# JavaScript – `async` vs `defer` in `<script>` Tags

---

## ❓ Question:
**What is the difference between `async` and `defer` attributes in HTML `<script>` tags?**

---

## ✅ Quick Summary:

| Feature         | `async`                                 | `defer`                                 |
|------------------|------------------------------------------|------------------------------------------|
| Load Order       | As soon as possible (not guaranteed)     | In the order scripts appear in HTML      |
| Execution Timing | After download, before DOM is parsed     | After DOM is fully parsed                |
| Blocks DOM?      | Yes (if executes before DOM ready)       | No                                       |
| Preserves Order? | ❌ No                                     | ✅ Yes                                    |
| Use Case         | Independent scripts (e.g., analytics)    | Scripts that need DOM or other scripts   |

---

## 📌 Detailed Explanation

### 🔹 `async`

- The script is **downloaded in parallel** while HTML is parsed.
- As soon as the script is downloaded, it is **executed immediately**, possibly **before** the HTML is fully parsed.
- **Does not wait** for other scripts or DOM.

```html
<script src="analytics.js" async></script>
```

#### ✅ Best for:

Independent, non-blocking scripts (e.g., analytics, ads)

#### ❌ Not good if:

Script depends on DOM elements or other scripts.

🔹 defer
The script is downloaded in parallel while HTML is parsed.

Execution is deferred until after the DOM is fully parsed.

Maintains the order of appearance in HTML.

```html

<script src="main.js" defer></script>
```
#### ✅ Best for:

Scripts that manipulate DOM

Multiple scripts that rely on each other

🧪 Example
```html

<!-- main.js relies on DOM, use defer -->
<script src="main.js" defer></script>

<!-- analytics.js is independent, use async -->
<script src="analytics.js" async></script>
```
📊 Script Loading Timeline Comparison
```text
HTML Parsing ─────────────────────────▶

          ↓
[async]
 ┌───────────────┐
 │ Downloads     │
 │ Executes ASAP │  ⛔ May block HTML parsing
 └───────────────┘

          ↓
[defer]
 ┌───────────────┐
 │ Downloads     │
 │ Executes LAST │ ✅ After DOM is ready
 └───────────────┘
```

#### ❗Important Notes:
Both async and defer only work with external scripts (src attribute must be present).

If neither is used, the browser downloads and executes the script immediately, blocking HTML parsing.


# JavaScript – DOM and Events

---

## ❓ Question 1:
**What is the DOM (Document Object Model)?**

---

## ✅ Definition:

> The **DOM (Document Object Model)** is a **programmatic interface** for HTML and XML documents. It represents the page so that **programs can change the document structure, style, and content** dynamically.

---

## 📌 Key Points:

- The DOM is a **tree-like structure** of nodes (elements, text, attributes, etc.).
- It is created by the **browser** when a web page is loaded.
- Each HTML tag is represented as a **node** in the DOM.
- You can use JavaScript to **traverse, manipulate, and respond** to DOM nodes.

---

## 🧱 DOM Structure Example:

### HTML:
```html
<html>
  <body>
    <h1>Hello</h1>
    <p>World</p>
  </body>
</html>
```

| Event Type         | Description                  |
| ------------------ | ---------------------------- |
| `click`            | Mouse click on an element    |
| `mouseover`        | Mouse hovers over an element |
| `keydown`          | Key is pressed               |
| `submit`           | Form is submitted            |
| `DOMContentLoaded` | Page DOM fully loaded        |

| Feature       | DOM                         | Event                           |
| ------------- | --------------------------- | ------------------------------- |
| `What it is `   | Tree representation of HTML | User/browser interaction        |
| `Controlled by` | Browser + JavaScript        | JavaScript via listeners        |
| `Use Case `     | Manipulate page structure   | Respond to actions (click, etc) |

# JavaScript – Call Stack, Callback Queue, and Event Loop (In Layman Terms)

---

## 🧠 Imagine This...

Think of JavaScript as a **chef in a kitchen** who can only cook **one dish at a time** (single-threaded). Now, let’s understand the main kitchen tools:

---

## 📦 1. Call Stack → "To-Do List for the Chef"

### 🧾 What is it?
The **Call Stack** is where JavaScript keeps track of what function it is currently working on.

### 🍳 In Simple Words:
It’s like a **to-do list**. The chef picks one task, finishes it, then moves to the next.

### 📌 Example:
```javascript
function cook() {
  boilWater();
  fryEgg();
}
cook();
```
#### ➡️ Steps:

1. cook() goes on top of the stack.

2. Inside cook(), it calls boilWater() → added to the stack.

3. After boilWater() finishes, it’s removed.

4. Then fryEgg() goes in.

Finally, all tasks are done → stack is empty.

🕒 2. Callback Queue → "Waiting Room for Later Tasks"
🧾 What is it?
> The Callback Queue stores functions (like setTimeout, click events) that are waiting to run after the current stack is empty.

#### 🛋️ In Simple Words:
> It's like a waiting room. When the chef is busy, tasks are told to "wait outside" until the chef is free.

📌 Example:
#### 🔁 3. Event Loop → "Kitchen Assistant"
🧾 What is it?
- The Event Loop checks if the Call Stack is empty. If yes, it brings tasks from the Callback Queue and gives them to the chef.

👨‍🍳 In Simple Words:
- It’s like the assistant who watches the chef and says:

> “Hey chef, you're free now! Here’s the next task waiting!”

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 0);

console.log("End");

// Start
// End
// Middle

```

| Concept        | Role                            | Real-Life Analogy            |
| -------------- | ------------------------------- | ---------------------------- |
| Call Stack     | Executes functions              | Chef’s to-do list            |
| Callback Queue | Holds delayed tasks             | Waiting room outside kitchen |
| Event Loop     | Moves tasks from queue to stack | Kitchen assistant            |


# 📘 Static List vs Live List in JavaScript (DOM)

When working with the DOM using JavaScript, we often retrieve lists of elements. These lists can either be **Static** or **Live**, and understanding the difference is important for writing bug-free, efficient code.

---

## 📌 What is a Static List?

A **Static List** is a snapshot of elements in the DOM **at the time of selection**. It **does not update** if the DOM changes later.

### 🧪 Example:
```javascript
const staticList = document.querySelectorAll('p');
```
This returns a NodeList, which is static.

Adding or removing <p> tags after this line will not change staticList.

📊 Visual:
```html

<p>One</p>
<p>Two</p>
```

```javascript
const staticList = document.querySelectorAll('p');
document.body.innerHTML += "<p>Three</p>";

console.log(staticList.length); // Output: 2 (NOT updated)

```

## 🔄 What is a Live List?
A Live List reflects real-time changes in the DOM. When elements matching the selector are added or removed, the list automatically updates.

🧪 Example:
```javascript
const liveList = document.getElementsByTagName('p');
```
This returns an HTMLCollection, which is live.

It updates as soon as <p> tags are added or removed.

📊 Visual:
```html

<p>One</p>
<p>Two</p>
```
```javascript
const liveList = document.getElementsByTagName('p');
document.body.innerHTML += "<p>Three</p>";

console.log(liveList.length); // Output: 3 (Auto updated)

```
| Feature           | Static List               | Live List                                            |
| ----------------- | ------------------------- | ---------------------------------------------------- |
| Updates with DOM? | ❌ No                      | ✅ Yes                                                |
| Returned by       | `querySelectorAll()`      | `getElementsByTagName()`, `getElementsByClassName()` |
| Data Type         | NodeList                  | HTMLCollection                                       |
| Use Case          | When fixed data is needed | When dynamic updates are expected                    |


# 📘 JavaScript Events: Capturing, Bubbling & Delegation

In the browser, when a user interacts with elements (click, hover, etc.), those interactions trigger **events**. Understanding **Event Capturing**, **Event Bubbling**, and **Event Delegation** helps us handle those interactions efficiently.

---

### 1️⃣ Event Bubbling (Default Behavior)

#### 📌 What is it?

In **event bubbling**, the event starts from the **innermost element** (target) and bubbles **upward** through its ancestors (parents).

#### 🧪 Example:

```html
<div id="parent">
  <button id="child">Click me</button>
</div>
```
```javascript
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

```
```output
<!-- output -->
Child clicked
Parent clicked
```
#### ✅ Use When:
You want to listen to events at multiple levels (e.g., child and parent).

This is the default phase for most events.

### 2️⃣ Event Capturing (Trickling)
📌 What is it?
In event capturing, the event starts from the topmost ancestor and trickles down to the target.

🧪 Example:
```javascript
document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent capturing click");
  },
  true // 👈 This enables capturing phase
);

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
```
output
```output
Parent capturing click
Child clicked
```
#### ✅ Use When:
You need to intercept the event before it reaches the target.

Rarely used, but helpful in specific scenarios like security/logging.


### 3️⃣ Event Delegation
📌 What is it?
Instead of adding event listeners to multiple child elements, event delegation attaches a single listener to the parent, and uses event bubbling to catch events on child elements.

🧪 Example:
```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```
```javascript

document.getElementById("list").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
```

#### ✅ Use When:
You have many child elements.

The DOM changes dynamically (e.g., new elements are added).

Reduces memory usage (fewer listeners).

#### 💡 Why to Use:
Efficient.

Flexible for dynamic UIs.

Clean code with fewer listeners.

| Concept          | Flow                     | Use Case                          | Add Listener To         |
| ---------------- | ------------------------ | --------------------------------- | ----------------------- |
| Event Bubbling   | From target → parent     | Default behavior, most common     | Target/parent           |
| Event Capturing  | From parent → target     | Rare; intercept early             | Use `{ capture: true }` |
| Event Delegation | Use bubbling to optimize | Dynamic child elements, large DOM | Common parent           |

#### 🧠 Pro Tip
Always stop unnecessary propagation using:

```javascript
event.stopPropagation();
```
> To prevent bubbling/capturing after a certain level.

