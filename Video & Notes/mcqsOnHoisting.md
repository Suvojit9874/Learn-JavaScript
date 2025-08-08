
# generate 50 guess the output question on javascript .

topics are closure , lexical scope ,hoisitng .

medium to hard level question.
provide answer also

Certainly! Here are 50 "Guess the output" questions in JavaScript on **closures, lexical scope, and hoisting** at a medium to hard level, each with the answer provided:

***

### 1.

```js
function outer() {
  let count = 0;
  return function inner() {
    return ++count;
  };
}
const fn = outer();
console.log(fn());
console.log(fn());
```

**Answer:**

```
1
2
```


***

### 2.

```js
var a = 10;
function foo() {
  console.log(a);
  var a = 20;
}
foo();
```

**Answer:**

```
undefined
```


***

### 3.

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

**Answer:**

```
3
3
3
```


***

### 4.

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

**Answer:**

```
0
1
2
```


***

### 5.

```js
function createCounter() {
  let count = 0;
  return {
    increment: function() { count++; },
    getValue: function() { return count; }
  };
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());
```

**Answer:**

```
2
```


***

### 6.

```js
var x = 21;
function fun() {
  console.log(x);
  var x = 20;
}
fun();
```

**Answer:**

```
undefined
```


***

### 7.

```js
var a = 1;
(function() {
  console.log(a);
  var a = 2;
})();
```

**Answer:**

```
undefined
```


***

### 8.

```js
var funcs = [];
for(var i=0; i<3; i++) {
  funcs[i] = function() { console.log(i); };
}
funcs[0]();
funcs[1]();
funcs[2]();
```

**Answer:**

```
3
3
3
```


***

### 9.

```js
var funcs = [];
for(let i=0; i<3; i++) {
  funcs[i] = function() { console.log(i); };
}
funcs[0]();
funcs[1]();
funcs[2]();
```

**Answer:**

```
0
1
2
```


***

### 10.

```js
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  a = 20;
  return inner;
}
var fn = outer();
fn();
```

**Answer:**

```
20
```


***

### 11.

```js
var a = 1;
function test() {
  console.log(a);
  a = 2;
}
test();
console.log(a);
```

**Answer:**

```
1
2
```


***

### 12.

```js
function test() {
  console.log(x);
  let x = 2;
}
test();
```

**Answer:**

```
ReferenceError: Cannot access 'x' before initialization
```


***

### 13.

```js
console.log(typeof foo);
var foo = "Hello";
```

**Answer:**

```
undefined
```


***

### 14.

```js
console.log(typeof bar);
let bar = "Hello";
```

**Answer:**

```
ReferenceError: Cannot access 'bar' before initialization
```


***

### 15.

```js
function makeAdder(x) {
  return function(y) {
    return x + y;
  }
}
var add5 = makeAdder(5);
console.log(add5(2));
```

**Answer:**

```
7
```


***

### 16.

```js
var a = 1;
function foo() {
  a = 3;
  console.log(a);
  var a = 2;
}
foo();
console.log(a);
```

**Answer:**

```
undefined
1
```


***

### 17.

```js
var a = 1;
function foo() {
  console.log(a);
  var a = 2;
}
foo();
console.log(a);
```

**Answer:**

```
undefined
1
```


***

### 18.

```js
var a = 5;
(function() {
  console.log(a);
  var a = 10;
  console.log(a);
})();
```

**Answer:**

```
undefined
10
```


***

### 19.

```js
var a = 5;
(function() {
  console.log(a);
  a = 10;
  console.log(a);
})();
console.log(a);
```

**Answer:**

```
5
10
10
```


***

### 20.

```js
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}
```

**Answer:**

```
3
3
3
```


***

### 21.

```js
for (let i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}
```

**Answer:**

```
0
1
2
```


***

### 22.

```js
var funcs = [];
for (var i=0; i<3; i++) {
  funcs[i] = (function(x) {
    return function() { console.log(x); };
  })(i);
}
funcs[0]();
funcs[1]();
funcs[2]();
```

**Answer:**

```
0
1
2
```


***

### 23.

```js
function foo() {
  var a = b = 0;
  a++;
  b++;
  console.log(a);
  console.log(b);
}
foo();
console.log(typeof a);
console.log(typeof b);
```

**Answer:**

```
1
1
undefined
number
```


***

### 24.

```js
(function() {
  console.log(typeof foo);
  var foo = 123;
  console.log(typeof foo);
})();
```

**Answer:**

```
undefined
number
```


***

### 25.

```js
var a = 1;
function test() {
  a = 2;
  function foo() {
    console.log(a);
    var a = 3;
  }
  foo();
}
test();
```

**Answer:**

```
undefined
```


***

### 26.

```js
console.log(x);
let x = 7;
```

**Answer:**

```
ReferenceError: Cannot access 'x' before initialization
```


***

### 27.

```js
function counter() {
  let count = 0;
  return function() {
    return count++;
  };
}
const count1 = counter();
console.log(count1());
console.log(count1());
console.log(count1());
```

**Answer:**

```
0
1
2
```


***

### 28.

```js
function print() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), i*1000);
  }
}
print();
```

**Answer:**

```
3
3
3
```


***

### 29.

```js
function print() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), i*1000);
  }
}
print();
```

**Answer:**

```
0
1
2
```


***

### 30.

```js
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
    var a = 20;
  }
  return inner;
}
outer()();
```

**Answer:**

```
undefined
```


***

### 31.

```js
var a = 10;
(function() {
  console.log(a);
  a = 20;
  var a;
})();
```

**Answer:**

```
undefined
```


***

### 32.

```js
let a = 10;
function foo() {
  console.log(a);
  let a = 20;
}
foo();
```

**Answer:**

```
ReferenceError: Cannot access 'a' before initialization
```


***

### 33.

```js
var name = "Global";
function outer() {
  var name = "Outer";
  return function inner() {
    console.log(name);
  }
}
var fn = outer();
fn();
```

**Answer:**

```
Outer
```


***

### 34.

```js
console.log(foo);
var foo = "Hello";
```

**Answer:**

```
undefined
```


***

### 35.

```js
var x = 1;
function foo() {
  x = 10;
  return;
  function x() {}
}
foo();
console.log(x);
```

**Answer:**

```
1
```


***

### 36.

```js
function test() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
test();
```

**Answer:**

```
undefined
2
```


***

### 37.

```js
var length = 10;
function fn() {
  console.log(this.length);
}
var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};
obj.method(fn, 1);
```

**Answer:**

```
10
2
```


***

### 38.

```js
function foo() {
  return
  {
    bar: "hello"
  };
}
console.log(foo());
```

**Answer:**

```
undefined
```


***

### 39.

```js
var x = 1;
function bar() {
  console.log(x);
  var x = 2;
}
bar();
```

**Answer:**

```
undefined
```


***

### 40.

```js
var y = 5;
(function() {
  console.log(y);
  var y = 10;
  console.log(y);
})();
```

**Answer:**

```
undefined
10
```


***

### 41.

```js
var count = 0;
(function immediate() {
  if(count === 0) {
    var count = 1;
    console.log(count);
  }
  console.log(count);
})();
```

**Answer:**

```
1
1
```


***

### 42.

```js
(function() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
})();
```

**Answer:**

```
undefined
2
```


***

### 43.

```js
var a = 10;
function example() {
  console.log(a);
  if(false) {
    var a = 20;
  }
}
example();
```

**Answer:**

```
undefined
```


***

### 44.

```js
var a = "Hello";
(function() {
  console.log(a);
  a = "World";
  console.log(a);
})();
console.log(a);
```

**Answer:**

```
Hello
World
World
```


***

### 45.

```js
function f1() {
  let a = 1;
  function f2() {
    console.log(a);
  }
  return f2;
}
var fn = f1();
fn();
```

**Answer:**

```
1
```


***

### 46.

```js
var x = 10;
function test() {
  x = 20;
  return;
  function x() {}
}
test();
console.log(x);
```

**Answer:**

```
10
```


***

### 47.

```js
var x = 10;
function test() {
  console.log(x);
  var x = 20;
}
test();
```

**Answer:**

```
undefined
```


***

### 48.

```js
var a = 1;
function foo() {
  a = 2;
  function inner() {
    console.log(a);
    var a = 3;
  }
  inner();
}
foo();
```

**Answer:**

```
undefined
```


***

### 49.

```js
for(var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
```

**Answer:**

```
3
3
3
```


***

### 50.

```js
for(let i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
```

**Answer:**

```
0
1
2
```


***

If you want me to explain any or generate more questions, just ask!

