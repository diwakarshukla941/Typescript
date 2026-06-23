/*
=========================================================
READONLY ARRAYS IN TYPESCRIPT
=========================================================

INDEX

1. What is a Readonly Array?
2. Normal Array
3. readonly T[]
4. ReadonlyArray<T>
5. readonly T[] vs ReadonlyArray<T>
6. Why Readonly Arrays?
7. Passing Readonly Arrays To Functions
8. Allowed Operations
9. Disallowed Operations
10. Readonly Is Compile-Time Only
11. Real World Use Cases
12. Interview Definitions

=========================================================
1. WHAT IS A READONLY ARRAY?
=========================================================

Definition:

A Readonly Array is an array
that cannot be modified after
creation.

TypeScript prevents:

❌ push()
❌ pop()
❌ splice()
❌ shift()
❌ unshift()
❌ direct assignment

Readonly arrays help prevent
accidental mutations.

=========================================================
2. NORMAL ARRAY
=========================================================
*/

const xs = [1, 2, 3];

/*
Type:

number[]

Mutable array.

Allowed:

xs.push(4);

xs[0] = 100;

xs.pop();

All valid.
*/

/*
=========================================================
3. readonly T[]
=========================================================
*/

const ys: readonly number[] =
    [
        1,
        2,
        3
    ];

/*
Type:

readonly number[]

Meaning:

Array can be read.

Array cannot be modified.
*/

/*
Valid:

ys[0]

ys.length

ys.map(...)

---------------------------------------------------------

Invalid:

ys.push(4)

ys.pop()

ys[0] = 100
*/

/*
=========================================================
4. ReadonlyArray<T>
=========================================================
*/

const yss:
    ReadonlyArray<number> =
    [
        1,
        2,
        3
    ];

/*
Type:

ReadonlyArray<number>

Equivalent to:

readonly number[]
*/

/*
These two are identical:

readonly number[]

ReadonlyArray<number>
*/

/*
=========================================================
5. readonly T[]
VS
ReadonlyArray<T>
=========================================================
*/

const a:
    readonly number[] =
    [
        1,
        2,
        3
    ];

const b:
    ReadonlyArray<number> =
    [
        1,
        2,
        3
    ];

/*
Both produce the same result.

Most developers prefer:

readonly number[]

because it is shorter.

=========================================================
6. WHY READONLY ARRAYS?
=========================================================

Problem:

A function accidentally
modifies an array.

Example:

function badFunction(
  nums:number[]
){
  nums.push(999);
}

Now the original array
changes unexpectedly.

---------------------------------------------------------

Solution:

Use readonly arrays.

function safeFunction(
  nums:readonly number[]
){
}

Now TypeScript prevents
mutations.

=========================================================
7. PASSING READONLY ARRAYS TO FUNCTIONS
=========================================================
*/

function sum(
    nums: readonly number[]
): number {

    let s = 0;

    for (
        const n of nums
    ) {
        s += n;
    }

    return s;
}

console.log(
    sum(yss)
);

/*
Why readonly?

Because sum()

only reads data.

It should never modify
the incoming array.

This communicates intent.

Meaning:

"I promise not to modify
your array."

=========================================================
8. ALLOWED OPERATIONS
=========================================================
*/

const readonlyNums:
    readonly number[] =
    [
        1,
        2,
        3
    ];

/*
Reading values
*/

console.log(
    readonlyNums[0]
);

/*
Length
*/

console.log(
    readonlyNums.length
);

/*
Looping
*/

for (
    const num of readonlyNums
) {
    console.log(num);
}

/*
map()
*/

const doubled =
    readonlyNums.map(
        num => num * 2
    );

/*
filter()
*/

const even =
    readonlyNums.filter(
        num => num % 2 === 0
    );

/*
reduce()
*/

const total =
    readonlyNums.reduce(
        (
            sum,
            num
        ) => sum + num,
        0
    );

/*
These methods are allowed
because they do NOT mutate
the original array.

=========================================================
9. DISALLOWED OPERATIONS
=========================================================
*/

// readonlyNums.push(4);

// readonlyNums.pop();

// readonlyNums.shift();

// readonlyNums.unshift(0);

// readonlyNums.splice(1,1);

// readonlyNums[0] = 100;

/*
Errors:

Property 'push'
does not exist.

Cannot assign because
it is readonly.

Reason:

These operations mutate
the original array.

=========================================================
10. READONLY IS COMPILE-TIME ONLY
=========================================================
*/

/*
Important:

Readonly exists only in
TypeScript.

JavaScript does NOT enforce it.

Example:

const nums:
readonly number[] =
[1,2,3];

After compilation:

const nums =
[1,2,3];

JavaScript sees a normal array.

Readonly protection is
provided only by TypeScript.

=========================================================
11. REAL WORLD USE CASES
=========================================================
*/

/*
Configuration Data
*/

const routes:
    readonly string[] =
    [
        "/users",
        "/products",
        "/orders"
    ];

/*
API Response Data
*/

function processUsers(
    users:
        readonly string[]
) {
}

/*
Calculation Functions
*/

function average(
    nums:
        readonly number[]
) {
}

/*
React Props

Props should not be mutated.

readonly helps enforce that.
*/

/*
=========================================================
12. INTERVIEW DEFINITIONS
=========================================================

READONLY ARRAY

A Readonly Array is an array
whose elements cannot be
modified after creation.

---------------------------------------------------------

Syntax

readonly number[]

ReadonlyArray<number>

---------------------------------------------------------

Equivalent

readonly number[]

===

ReadonlyArray<number>

---------------------------------------------------------

Allowed

✔ Reading

✔ map()

✔ filter()

✔ reduce()

✔ for...of

✔ length

---------------------------------------------------------

Not Allowed

❌ push()

❌ pop()

❌ splice()

❌ shift()

❌ unshift()

❌ direct assignment

---------------------------------------------------------

Benefits

✔ Prevents accidental mutation

✔ Safer APIs

✔ Better function contracts

✔ Clear intent

✔ Useful in React and backend
codebases

=========================================================
END OF NOTES
=========================================================
*/

export { }