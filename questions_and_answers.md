<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - B: `ReferenceError: greetign is not defined`

<i>Write your explanation here</i>
 The code declared variable named is greeting but assign an empty object to a variable named greetign . greeting and greetign is not same variable . JavaScript is case-sensitive, so greeting and greetign are considered different variables .finally answer is ReferenceError: greetign is not defined

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"` ,

<i>Write your explanation here</i>
  The sum function have 2 parameters a and b and attempts to add them together using the + operator. passing sum(1, "2") as first argument is number but  second argument is string. JavaScript will convert the number 1 to a string and then concatenate the two strings together, resulting in a string concatenation, not a numeric addition. In this case, answer is C: `"12"`
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - A: `['🍕', '🍫', '🥑', '🍔']`

<i>Write your explanation here</i>
info.favoriteFood initially contains a reference to the first element of the food array, which is "🍕". but assign the string "🍝" to info.favoriteFood. This assignment does not change the original food array in any way, so the console, it remains unchanged, resulting in A: ['🍕', '🍫', '🥑', '🍔'].
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - B: `Hi there, undefined`

<i>Write your explanation here</i>
The function sayHi() is expects an argument "name", but the function call without argument.JavaScript will assign the value undefined for name parameter.so the function return `Hi there, undefined`
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer:- C: 3

<i>Write your explanation here</i>
The code have an array with four elements: [0, 1, 2, 3]. The forEach method is used to iterate over each element of the array and, for each element, checks whether the element number is true (not equal to 0). If number is true, it increments the count variable by 1. so the answer is  C: 3
</p>
</details>
