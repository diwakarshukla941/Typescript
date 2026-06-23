/*
=========================================================
TYPE INFERENCE IN TYPESCRIPT
=========================================================

INDEX

1. What is Type Inference?
2. Why Type Inference?
3. Variable Inference
4. Function Return Type Inference
5. Array Inference
6. Object Inference
7. Union Type Inference
8. Inference vs Annotation
9. When To Use Inference
10. When To Use Annotations
11. Interview Definitions

=========================================================
1. WHAT IS TYPE INFERENCE?
=========================================================

Definition:

Type Inference is TypeScript's
ability to automatically determine
the type of a value.

TypeScript looks at the assigned
value and infers the type.

Example:

const name = "Diwakar";

TypeScript infers:

string

without us explicitly writing:

const name: string = "Diwakar";

=========================================================
2. WHY TYPE INFERENCE?
=========================================================

Without Inference:

const name: string =
  "Diwakar";

const age: number =
  24;

const isAdmin: boolean =
  true;

Too much typing.

---------------------------------------------------------

With Inference:

const name =
  "Diwakar";

const age =
  24;

const isAdmin =
  true;

Cleaner and easier.

=========================================================
3. VARIABLE INFERENCE
=========================================================
*/

const userName =
  "Diwakar";

/*
Type:

string
*/

const age =
  24;

/*
Type:

number
*/

const isActive =
  true;

/*
Type:

boolean
*/

const amount =
  99.99;

/*
Type:

number
*/

/*
TypeScript automatically
infers all of these.
*/

/*
=========================================================
4. FUNCTION RETURN TYPE INFERENCE
=========================================================
*/

function add(
  a: number,
  b: number
) {
  return a + b;
}

/*
TypeScript infers:

function add(
  a:number,
  b:number
): number

because:

a + b

returns a number.
*/

console.log(
  add(5, 2)
);

/*
Output:

7
*/

/*
Explicit version:

function add(
  a:number,
  b:number
): number {
  return a + b;
}

Both are valid.
*/

/*
=========================================================
5. ARRAY INFERENCE
=========================================================
*/

const numbers =
[
  1,
  2,
  3
];

/*
Type:

number[]
*/

const names =
[
  "Diwakar",
  "Bhaskar"
];

/*
Type:

string[]
*/

const mixed =
[
  "Diwakar",
  24
];

/*
Type:

(string | number)[]
*/

/*
TypeScript looks at all
elements and infers
the array type.
*/

/*
=========================================================
6. OBJECT INFERENCE
=========================================================
*/

const user = {
  name: "Diwakar",
  age: 24
};

/*
Type:

{
  name: string;
  age: number;
}
*/

console.log(
  user.name
);

/*
TypeScript inferred the
entire object shape.
*/

/*
=========================================================
7. UNION TYPE INFERENCE
=========================================================
*/

const maybe =
  Math.random() > 0.5
    ? "Test"
    : 5;

/*
Type:

string | number

Why?

Possibility 1:

"Test"

↓

string

---------------------------------------------------------

Possibility 2:

5

↓

number

---------------------------------------------------------

Final Type:

string | number
*/

console.log(maybe);

/*
Another Example
*/

let result:
string | number;

result =
Math.random() > 0.5
  ? "Success"
  : 200;

/*
Type remains:

string | number
*/

/*
=========================================================
8. INFERENCE VS ANNOTATION
=========================================================

INFERENCE

TypeScript decides
the type.

Example:
*/

const city =
  "Mumbai";

/*
Type:

string

---------------------------------------------------------

ANNOTATION

Developer decides
the type.
*/

const state:
string =
"Maharashtra";

/*
Type:

string

---------------------------------------------------------

Both are valid.

Difference:

Inference

TypeScript chooses.

Annotation

You choose.
*/

/*
=========================================================
9. WHEN TO USE INFERENCE
=========================================================
*/

/*
Use inference when
the type is obvious.

Examples:
*/

const score = 100;

const firstName =
  "Diwakar";

const loggedIn =
  true;

/*
TypeScript can easily
figure these out.

Recommended approach.
*/

/*
=========================================================
10. WHEN TO USE ANNOTATIONS
=========================================================
*/

/*
Function Parameters
*/

function multiply(
  a: number,
  b: number
) {
  return a * b;
}

/*
Union Types
*/

let data:
string | number;

/*
Complex Objects
*/

type User = {
  id: string;
  name: string;
};

const userData: User = {
  id: "1",
  name: "Diwakar"
};

/*
Public APIs

Library Code

Reusable Functions

Anywhere you want
explicit documentation.
*/

/*
=========================================================
11. INTERVIEW DEFINITIONS
=========================================================

TYPE INFERENCE

Type Inference is the
ability of TypeScript
to automatically determine
the type of a variable,
function return value,
or expression based on
the assigned value.

---------------------------------------------------------

Example:

const age = 24;

TypeScript infers:

number

---------------------------------------------------------

Benefits

✔ Less code

✔ Better readability

✔ Fewer annotations

✔ Strong type safety

---------------------------------------------------------

Inference vs Annotation

Inference:

TypeScript decides.

const age = 24;

---------------------------------------------------------

Annotation:

Developer decides.

const age: number = 24;

=========================================================
END OF NOTES
=========================================================
*/

export {};