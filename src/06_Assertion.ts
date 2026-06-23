/*
=========================================================
TYPE ASSERTIONS IN TYPESCRIPT
=========================================================

INDEX

1. What is Type Assertion?
2. Basic Assertion
3. Why Assertion Exists
4. Assertion Does Not Convert Types
5. Type Guard vs Assertion
6. Assertion With Custom Types
7. Danger Of Assertions
8. DOM Assertion
9. Non-Null Assertion (!)
10. Double Assertion
11. Assertion vs Conversion
12. Type Predicates
13. Type Predicate With Custom Types
14. Assertion vs Predicate
15. Good Use Cases
16. Bad Use Cases
17. Interview Definitions

=========================================================
1. WHAT IS TYPE ASSERTION?
=========================================================

Definition:

Type Assertion tells TypeScript:

"Trust me, I know the type of this value."

Assertions only affect TypeScript.

They DO NOT:

❌ Change the value
❌ Validate the value
❌ Perform runtime checks
❌ Convert the value

They ONLY change how TypeScript
treats the value.

---------------------------------------------------------

REAL WORLD ANALOGY

Imagine a sealed box.

const box: unknown

TypeScript says:

"I don't know what's inside."

Now you write:

const item = box as string;

You are telling TypeScript:

"Trust me.
The box contains a string."

TypeScript believes you.

BUT...

TypeScript DOES NOT open the box.

Only YOU are claiming
that the value is a string.

---------------------------------------------------------

IMPORTANT

Assertion changes the LABEL.

Assertion DOES NOT change
the CONTENTS.

Example:

const score =
  "100" as unknown as number;

TypeScript sees:

score -> number

Actual runtime value:

"100"

still a string.

=========================================================
2. BASIC ASSERTION
=========================================================
*/

const value: unknown = "Diwakar";

const userName = value as string;

console.log(
  userName.toUpperCase()
);

/*
Before:

value -> unknown

After:

userName -> string

TypeScript now allows:

toUpperCase()

because it trusts us.

=========================================================
3. WHY ASSERTION EXISTS
=========================================================
*/

const data: unknown = "Hello";

// data.toUpperCase();

/*
Error:

Object is of type 'unknown'

TypeScript refuses because
unknown could be:

- string
- number
- boolean
- object
- null
- undefined

etc.
*/

const text = data as string;

console.log(
  text.toUpperCase()
);

/*
Assertion tells TypeScript:

Treat data as string.

=========================================================
4. ASSERTION DOES NOT CONVERT TYPES
=========================================================
*/

const points =
  "500" as unknown as number;

console.log(points);

/*
TypeScript thinks:

points -> number

Runtime value:

"500"

still string

Assertion only changes
the type information.
*/

/*
Actual Conversion:

const points = Number("500");

Runtime:

500

=========================================================
5. TYPE GUARD VS ASSERTION
=========================================================
*/

const randomData: unknown =
  "Diwakar";

if (
  typeof randomData ===
  "string"
) {
  console.log(
    randomData.toUpperCase()
  );
}

/*
This is a Type Guard.

Type Guard:

✔ Runtime Check
✔ Safe
✔ Preferred

TypeScript verifies
the value first.
*/

const anotherData: unknown =
  "Diwakar";

const nameValue =
  anotherData as string;

console.log(
  nameValue.toUpperCase()
);

/*
This is Assertion.

❌ No Runtime Check

TypeScript simply trusts us.

=========================================================
6. ASSERTION WITH CUSTOM TYPES
=========================================================
*/

type Person = {
  name: string;
};

const jsonData = JSON.parse(
  '{"name":"Diwakar"}'
);

const person =
  jsonData as Person;

console.log(person.name);

/*
TypeScript now treats
jsonData as Person.

Common Use Cases:

- APIs
- JSON Data
- Database Results
- Third Party Libraries

=========================================================
7. DANGER OF ASSERTIONS
=========================================================
*/

const fakeData: unknown = 123;

const textValue =
  fakeData as string;

/*
TypeScript:

"Okay.
It's a string."
*/

console.log(textValue);

/*
Actual value:

123

not string.
*/

/*
Dangerous Example:

textValue.toUpperCase();

Runtime Error:

toUpperCase is not a function

Reason:

Assertion lied to TypeScript.

=========================================================
8. DOM ASSERTION
=========================================================
*/

const emailInput =
  document.getElementById(
    "email"
  ) as HTMLInputElement;

/*
TypeScript returns:

HTMLElement | null

But we know:

This element is
an input element.
*/

console.log(
  emailInput.value
);

/*
Most common real-world
assertion example.

=========================================================
9. NON-NULL ASSERTION (!)
=========================================================
*/

const heading =
  document.getElementById(
    "title"
  )!;

/*
! means:

"I guarantee this
is not null."

Before:

HTMLElement | null

After:

HTMLElement
*/

console.log(
  heading.textContent
);

/*
Use carefully.

If the element
does not exist,

Runtime Error.

=========================================================
10. DOUBLE ASSERTION
=========================================================
*/

const sourceValue =
  "Diwakar";

/*
This usually fails:

const num =
  sourceValue as number;

because string and number
are unrelated.
*/

const convertedNum =
  sourceValue as unknown as number;

/*
Flow:

string
   ↓
unknown
   ↓
number

This bypasses TypeScript's
safety checks.

Use carefully.

=========================================================
11. ASSERTION VS CONVERSION
=========================================================
*/

// Assertion

const score1 =
  "100" as unknown as number;

console.log(score1);

/*
Runtime value:

"100"

still string
*/

// Conversion

const score2 =
  Number("100");

console.log(score2);

/*
Runtime value:

100

actual number

=========================================================
12. TYPE PREDICATES
=========================================================

Definition:

A Type Predicate is a special
return type used in custom
Type Guards.

Syntax:

parameterName is Type

Example:

value is number

Meaning:

If the function returns true,

TypeScript should treat
value as number.

---------------------------------------------------------
*/

function isNumber(
  value: unknown
): value is number {

  return typeof value ===
    "number";
}

/*
IMPORTANT

Runtime Check:

typeof value === "number"

returns:

true or false

Predicate:

value is number

tells TypeScript:

TRUE  => value is number

FALSE => value is not number
*/

const randomValue: unknown =
  100;

if (
  isNumber(randomValue)
) {

  /*
  Inside this block:

  randomValue: number
  */

  console.log(
    randomValue.toFixed(2)
  );
}

/*
Without Predicate:

function isNumber(
  value: unknown
) {
  return typeof value ===
    "number";
}

TypeScript only sees:

boolean

It does NOT know
what true means.

=========================================================
13. TYPE PREDICATE WITH CUSTOM TYPES
=========================================================
*/

type User22 = {
  id: number;
  name: string;
};

function isUser22(
  value: unknown
): value is User22 {

  return (
    typeof value ===
      "object" &&
    value !== null &&
    "id" in value &&
    typeof (
      value as any
    ).id === "number" &&
    "name" in value &&
    typeof (
      value as any
    ).name === "string"
  );
}

/*
Meaning:

If this function
returns true,

value becomes User22.
*/

const parsedData =
  JSON.parse(
    '{"id":1,"name":"Diwakar"}'
  ) as unknown;

if (
  isUser22(parsedData)
) {

  /*
  parsedData: User22
  */

  console.log(
    parsedData.id
  );

  console.log(
    parsedData.name
  );
}

/*
=========================================================
14. ASSERTION VS PREDICATE
=========================================================

ASSERTION

const user =
  data as User22;

Meaning:

"Trust me.
This is User22."

No validation.

---------------------------------------------------------

PREDICATE

if (isUser22(data))

Meaning:

"Check first.

If validation passes,

then treat data
as User22."

Much safer for:

- APIs
- Request Bodies
- JSON Data
- Database Results

=========================================================
15. GOOD USE CASES
=========================================================

✔ DOM Elements

const input =
  document.getElementById(
    "email"
  ) as HTMLInputElement;

---------------------------------------------------------

✔ JSON.parse()

const user =
  data as User22;

---------------------------------------------------------

✔ Third Party Libraries

---------------------------------------------------------

✔ Cases where you know
more than TypeScript

=========================================================
16. BAD USE CASES
=========================================================

❌ To hide TypeScript errors

❌ To skip validation

❌ To trust user input

❌ To trust API responses blindly

❌ To replace Type Guards

Bad:

const user =
  req.body as User22;

Better:

if (isUser22(req.body)) {
  // safe
}

=========================================================
17. INTERVIEW DEFINITIONS
=========================================================

TYPE ASSERTION

Type Assertion is a TypeScript
feature that allows developers
to tell the compiler to treat
a value as a specific type.

Syntax:

value as Type

Properties:

✔ Compile Time Only

✔ No Runtime Validation

✔ No Runtime Conversion

✔ Used when developers know
more than TypeScript

✘ Does not change value

✘ Does not guarantee safety

---------------------------------------------------------

TYPE PREDICATE

A Type Predicate is a special
TypeScript return type used in
custom Type Guards.

Syntax:

parameterName is Type

Example:

value is number

Purpose:

It tells TypeScript what type
a value should become when
the function returns true.

Benefits:

✔ Type Narrowing

✔ Safer Unknown Handling

✔ API Validation

✔ Request Validation

✔ Database Validation

✔ Custom Type Guards

=========================================================
END OF NOTES
=========================================================
*/

export {}