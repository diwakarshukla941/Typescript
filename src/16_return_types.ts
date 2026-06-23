/*
=========================================================
RETURN TYPE INFERENCE
IN TYPESCRIPT
=========================================================

INDEX

1. What is Return Type Inference?
2. Why Return Types Matter
3. Arrow Function Inference
4. Explicit Return Types
5. Multiple Return Paths
6. Async Function Return Types
7. Inference vs Explicit Returns
8. Best Practices
9. Interview Definitions

=========================================================
1. WHAT IS RETURN TYPE INFERENCE?
=========================================================

Definition:

TypeScript can automatically
determine a function's return
type by analyzing what the
function returns.

Example:

function add(
  a:number,
  b:number
){
  return a + b;
}

TypeScript infers:

number

without us writing:

: number

=========================================================
2. WHY RETURN TYPES MATTER?
=========================================================

Return types help TypeScript:

✔ Catch mistakes

✔ Improve autocomplete

✔ Improve readability

✔ Improve API design

=========================================================
3. ARROW FUNCTION INFERENCE
=========================================================
*/

/*
TypeScript sees:

n -> number

n * 2 -> number

Therefore:

Return Type = number
*/

const doubleFunc =
(
  n: number
) => n * 2;

/*
Inferred Type:

(
  n:number
) => number
*/

console.log(
  doubleFunc(5)
);

/*
Output:

10
*/

/*
=========================================================
4. EXPLICIT RETURN TYPES
=========================================================
*/

/*
Public functions should often
have explicit return types.
*/

export function toTitle(
  s: string
): string {

  return `Hello ${s}`;

}

/*
Parameter:

string

Return:

string

Output:

Hello Diwakar
*/

/*
Benefits:

✔ Self-documenting

✔ Easier maintenance

✔ Prevent accidental changes
*/

/*
=========================================================
5. MULTIPLE RETURN PATHS
=========================================================
*/

function booleanToNumber(
  flag: boolean
): number {

  if (flag) {

    return 1;

  } else {

    return 0;

  }

}

/*
Type:

number

Both paths return
a number.
*/

console.log(
  booleanToNumber(
    true
  )
);

console.log(
  booleanToNumber(
    false
  )
);

/*
Output:

1

0
*/

/*
=========================================================
INFERENCE STILL WORKS
=========================================================
*/

function booleanToNumberInfer(
  flag: boolean
) {

  if (flag) {

    return 1;

  }

  return 0;

}

/*
TypeScript infers:

number
*/

/*
=========================================================
6. ASYNC FUNCTION RETURN TYPES
=========================================================
*/

/*
Async functions always
return a Promise.
*/

async function loadCountInferred() {

  return 42;

}

/*
You returned:

42

But TypeScript infers:

Promise<number>

NOT:

number
*/

/*
Equivalent:
*/

async function loadCountExplicit():
Promise<number> {

  return 42;

}

/*
Both are identical.
*/

/*
=========================================================
ASYNC USAGE
=========================================================
*/

loadCountInferred()
  .then(
    n =>
      console.log(n)
  );

/*
Output:

42

n type:

number
*/

/*
Reason:

Promise<number>

↓

.then()

↓

number
*/

/*
=========================================================
7. INFERENCE VS EXPLICIT RETURNS
=========================================================

INFERENCE

TypeScript decides.
*/

function add(
  a: number,
  b: number
) {

  return a + b;

}

/*
Return Type:

number
*/

/*
---------------------------------------------------------

EXPLICIT

Developer decides.
*/

function multiply(
  a: number,
  b: number
): number {

  return a * b;

}

/*
Return Type:

number
*/

/*
=========================================================
8. BEST PRACTICES
=========================================================

PRIVATE FUNCTIONS

Inference is usually fine.

Example:

const double =
(
  n:number
) => n * 2;

---------------------------------------------------------

PUBLIC FUNCTIONS

Prefer explicit return types.

Example:

export function getUser():
User {

}

---------------------------------------------------------

ASYNC FUNCTIONS

Prefer explicit:

Promise<T>

Example:

async function getUsers():
Promise<User[]> {

}

---------------------------------------------------------

LIBRARY CODE

Always use explicit
return types.

=========================================================
9. INTERVIEW DEFINITIONS
=========================================================

RETURN TYPE INFERENCE

TypeScript automatically
determines a function's
return type from the
returned value.

---------------------------------------------------------

Example:

function add(
  a:number,
  b:number
){
  return a+b;
}

Return Type:

number

---------------------------------------------------------

EXPLICIT RETURN TYPE

The developer manually
specifies the return type.

Example:

function add(
  a:number,
  b:number
): number

---------------------------------------------------------

ASYNC RETURN TYPE

Async functions always
return a Promise.

Example:

async function getCount(){
  return 42;
}

Type:

Promise<number>

---------------------------------------------------------

BEST PRACTICE

Use inference for small,
local functions.

Use explicit return types
for exported/public APIs.

=========================================================
END OF NOTES
=========================================================
*/

export {};