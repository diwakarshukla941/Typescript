/*
=========================================================
TYPEOF IN TYPESCRIPT
=========================================================

INDEX

1. What is typeof?
2. Why typeof?
3. typeof Return Values
4. typeof Examples
5. typeof as a Type Guard
6. Special Cases
7. Arrays and typeof
8. Null and typeof
9. When typeof Is Not Enough
10. Real World Examples
11. Interview Definitions

=========================================================
1. WHAT IS TYPEOF?
=========================================================

Definition:

typeof is a JavaScript operator
that returns the runtime type
of a value as a string.

Syntax:

typeof value

Example:

typeof "Diwakar"

Result:

"string"

=========================================================
2. WHY TYPEOF?
=========================================================

TypeScript types disappear
at runtime.

Sometimes we need to know
the actual runtime type.

typeof helps us perform
runtime checks.

=========================================================
3. TYPEOF RETURN VALUES
=========================================================

typeof can return:

"string"

"number"

"boolean"

"bigint"

"symbol"

"undefined"

"function"

"object"

=========================================================
4. TYPEOF EXAMPLES
=========================================================
*/

function describeTypeOf(
  value: unknown
) {

  return typeof value;

}

console.log(
  describeTypeOf("hi")
);

console.log(
  describeTypeOf(23)
);

console.log(
  describeTypeOf(true)
);

console.log(
  describeTypeOf(10n)
);

console.log(
  describeTypeOf(
    Symbol("diwakar")
  )
);

console.log(
  describeTypeOf(undefined)
);

console.log(
  describeTypeOf(
    () => {}
  )
);

console.log(
  describeTypeOf(null)
);

console.log(
  describeTypeOf({})
);

console.log(
  describeTypeOf([])
);

/*
Outputs:

string

number

boolean

bigint

symbol

undefined

function

object

object

object

=========================================================
5. TYPEOF AS A TYPE GUARD
=========================================================
*/

function printValue(
  value:
  string | number
) {

  if (
    typeof value ===
    "string"
  ) {

    console.log(
      value.toUpperCase()
    );

  } else {

    console.log(
      value.toFixed(2)
    );

  }

}

/*
TypeScript narrows:

string | number

↓

string

or

number

This is called:

Type Narrowing
*/

/*
=========================================================
6. SPECIAL CASES
=========================================================
*/

/*
Strings
*/

console.log(
  typeof "Diwakar"
);

/*
string
*/

/*
Numbers
*/

console.log(
  typeof 100
);

/*
number
*/

/*
Booleans
*/

console.log(
  typeof true
);

/*
boolean
*/

/*
BigInt
*/

console.log(
  typeof 100n
);

/*
bigint
*/

/*
Symbol
*/

console.log(
  typeof Symbol()
);

/*
symbol
*/

/*
Functions
*/

console.log(
  typeof (() => {})
);

/*
function
*/

/*
=========================================================
7. ARRAYS AND TYPEOF
=========================================================
*/

/*
Important:

typeof []

returns:

object

NOT

array
*/

console.log(
  typeof []
);

/*
Output:

object
*/

/*
Therefore:

typeof cannot identify arrays.

Use:

Array.isArray()
*/

console.log(
  Array.isArray(
    [1,2,3]
  )
);

/*
true
*/

/*
=========================================================
8. NULL AND TYPEOF
=========================================================
*/

/*
Most famous interview question.
*/

console.log(
  typeof null
);

/*
Output:

object

NOT

null
*/

/*
Reason:

Historical JavaScript bug.

This behavior remains
for backward compatibility.
*/

/*
=========================================================
9. WHEN TYPEOF IS NOT ENOUGH
=========================================================
*/

function info(
  value: unknown
) {

  if (
    Array.isArray(value)
  ) {

    return value;

  }

  if (
    value instanceof Date
  ) {

    return value;

  }

  if (
    value instanceof Error
  ) {

    return value;

  }

  return "others";

}

/*
Why?

Because:

typeof []

↓

object

typeof new Date()

↓

object

typeof new Error()

↓

object

typeof {}

↓

object

---------------------------------------------------------

typeof cannot distinguish
between them.

Use:

Array.isArray()

instanceof

instead.
*/

/*
=========================================================
10. REAL WORLD EXAMPLES
=========================================================
*/

function formatValue(
  value:
  string | number
) {

  if (
    typeof value ===
    "string"
  ) {

    return value
      .toUpperCase();

  }

  return value
    .toFixed(2);

}

/*
API Data
*/

function processData(
  value: unknown
) {

  if (
    typeof value ===
    "string"
  ) {

    return value
      .trim();

  }

  return value;

}

/*
=========================================================
11. INTERVIEW DEFINITIONS
=========================================================

TYPEOF

A JavaScript operator that
returns the runtime type of
a value as a string.

---------------------------------------------------------

Possible Results

string

number

boolean

bigint

symbol

undefined

function

object

---------------------------------------------------------

TYPE GUARD

typeof can be used as a
Type Guard to narrow types.

Example:

typeof value === "string"

---------------------------------------------------------

MOST IMPORTANT INTERVIEW QUESTIONS

Q. What is:

typeof null

Answer:

object

---------------------------------------------------------

Q. What is:

typeof []

Answer:

object

---------------------------------------------------------

Q. Can typeof detect arrays?

Answer:

No

Use:

Array.isArray()

---------------------------------------------------------

Q. Can typeof detect Date?

Answer:

No

Use:

instanceof Date

=========================================================
END OF NOTES
=========================================================
*/

export {};