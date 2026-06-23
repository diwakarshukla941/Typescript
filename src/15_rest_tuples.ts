/*
=========================================================
REST PARAMETERS & SPREAD ARGUMENTS
IN TYPESCRIPT
=========================================================

INDEX

1. What are Rest Parameters?
2. Why Rest Parameters?
3. Basic Rest Parameters
4. Rest Parameter Type
5. Tuple Rest Parameters
6. Optional Values Inside Tuples
7. Fixed Length Tuple Arguments
8. Spread Operator
9. Tuple Spread Arguments
10. as const with Spread
11. Real World Examples
12. Interview Definitions

=========================================================
1. WHAT ARE REST PARAMETERS?
=========================================================

Definition:

Rest Parameters collect multiple
arguments into a single array.

Syntax:

function fn(
  ...values: Type[]
)

The three dots (...)

are called:

REST OPERATOR

=========================================================
2. WHY REST PARAMETERS?
=========================================================

Sometimes we don't know how many
arguments will be passed.

Examples:

✔ Sum Function

✔ Logger

✔ Tags

✔ Search Filters

Rest parameters allow flexible
numbers of arguments.

=========================================================
3. BASIC REST PARAMETERS
=========================================================
*/

function sumAllNumbers(
  ...xs: number[]
): number {

  return xs.reduce(
    (sum, num) =>
      sum + num,
    0
  );

}

console.log(
  sumAllNumbers(
    2,
    3,
    4,
    55,
    5
  )
);

/*
Arguments:

2
3
4
55
5

---------------------------------------------------------

Internally:

xs

becomes:

[
  2,
  3,
  4,
  55,
  5
]

---------------------------------------------------------

Type:

number[]
*/

/*
=========================================================
4. REST PARAMETER TYPE
=========================================================

...xs: number[]

Means:

Collect all arguments
into an array of numbers.

Example:

sumAllNumbers(
  1,
  2,
  3
)

↓

xs

↓

[1,2,3]

=========================================================
5. TUPLE REST PARAMETERS
=========================================================
*/

function makeRange(
  ...args:
  [
    start: number,
    end: number,
    step?: number
  ]
): number[] {

  const [
    start,
    end,
    step = 1
  ] = args;

  const out:
  number[] = [];

  for (
    let n = start;
    n <= end;
    n += step
  ) {

    out.push(n);

  }

  return out;

}

/*
Tuple Type:

[
  start:number,
  end:number,
  step?:number
]

Meaning:

Position 0 -> start

Position 1 -> end

Position 2 -> optional step
*/

/*
=========================================================
6. OPTIONAL VALUES INSIDE TUPLES
=========================================================
*/

console.log(
  makeRange(
    1,
    5
  )
);

/*
step omitted

Default:

1

Output:

[1,2,3,4,5]
*/

console.log(
  makeRange(
    2,
    10,
    2
  )
);

/*
Output:

[2,4,6,8,10]
*/

/*
step is optional:

step?: number
*/

/*
=========================================================
7. FIXED LENGTH TUPLE ARGUMENTS
=========================================================
*/

/*
Valid:

makeRange(1,5)

Valid:

makeRange(1,5,2)

---------------------------------------------------------

Invalid:

makeRange(1)

Error

Missing end argument.

---------------------------------------------------------

Invalid:

makeRange()

Error

Missing start and end.
*/

/*
Tuple enforces:

✔ Position

✔ Order

✔ Types

✔ Length
*/

/*
=========================================================
8. SPREAD OPERATOR
=========================================================
*/

/*
Spread expands values.

Syntax:

...array
*/

function draw(
  x: number,
  y: number
) {

  console.log(
    x,
    y
  );

}

/*
draw expects:

(
  number,
  number
)
*/

/*
=========================================================
9. TUPLE SPREAD ARGUMENTS
=========================================================
*/

const point =
[
  10,
  20
];

/*
Type:

number[]

---------------------------------------------------------

Not:

[number, number]
*/

/*
draw(...point);

Error

Reason:

TypeScript only sees:

number[]

Length unknown.

Could be:

[]

[10]

[10,20]

[10,20,30]

etc.
*/

/*
=========================================================
10. AS CONST WITH SPREAD
=========================================================
*/

const pointFixed =
[
  10,
  20
] as const;

/*
Type:

readonly [
  10,
  20
]

Tuple with fixed length.
*/

draw(
  ...pointFixed
);

/*
Valid

Reason:

TypeScript knows:

Position 0 -> 10

Position 1 -> 20

Exactly two values exist.
*/

/*
Visual:

Without as const

number[]

Length unknown

---------------------------------------------------------

With as const

readonly [
  10,
  20
]

Length known

=========================================================
11. REAL WORLD EXAMPLES
=========================================================
*/

/*
Logger
*/

function logger(
  ...messages:
  string[]
) {

  console.log(
    messages
  );

}

/*
Tags
*/

function createTags(
  ...tags:
  string[]
) {

  return tags;

}

/*
Coordinates
*/

function plotPoint(
  ...coords:
  [
    number,
    number
  ]
) {

  console.log(coords);

}

/*
=========================================================
12. INTERVIEW DEFINITIONS
=========================================================

REST PARAMETER

Collects multiple arguments
into a single array.

Example:

function sum(
  ...nums:number[]
)

---------------------------------------------------------

SPREAD OPERATOR

Expands an iterable into
individual values.

Example:

draw(...point)

---------------------------------------------------------

TUPLE REST PARAMETER

A rest parameter whose type
is defined by a tuple.

Example:

...args:
[
  start:number,
  end:number,
  step?:number
]

---------------------------------------------------------

WHY DOES THIS FAIL?

const point = [10,20];

draw(...point)

Because:

point is:

number[]

Length is unknown.

---------------------------------------------------------

WHY DOES THIS WORK?

const point =
[10,20] as const;

draw(...point)

Because:

point becomes:

readonly [10,20]

A fixed-length tuple.

---------------------------------------------------------

REST VS SPREAD

REST

Collects values.

function fn(
  ...args
)

---------------------------------------------------------

SPREAD

Expands values.

fn(...args)

=========================================================
END OF NOTES
=========================================================
*/

export {};