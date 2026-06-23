/*
=========================================================
TUPLES IN TYPESCRIPT
=========================================================

INDEX

1. What is a Tuple?
2. Why Tuples?
3. Tuple vs Array
4. Basic Tuple Example
5. Fixed Length
6. Fixed Position Types
7. Tuple Destructuring
8. Readonly Tuples
9. Real World Examples
10. Interview Definitions

=========================================================
1. WHAT IS A TUPLE?
=========================================================

Definition:

A Tuple is a special type of array
with:

✔ Fixed Length

✔ Fixed Position Types

Meaning:

Each position has a predefined type.

Syntax:

[type1, type2, type3]

Example:

[string, number]

=========================================================
2. WHY TUPLES?
=========================================================

Sometimes order matters.

Example:

User Data

Name -> string
Age -> number

We want:

["Diwakar", 24]

NOT:

[24, "Diwakar"]

Tuple enforces this.

=========================================================
3. TUPLE VS ARRAY
=========================================================

Tuple:

[string, number]

Meaning:

Position 0 -> string
Position 1 -> number

---------------------------------------------------------

Array:

(string | number)[]

Meaning:

Every element can be
string OR number.

Order doesn't matter.

=========================================================
4. BASIC TUPLE EXAMPLE
=========================================================
*/

const userEntry: [string, number] = [
  "Diwakar",
  24,
];

console.log(userEntry);

/*
Position 0 -> string

userEntry[0]
=> "Diwakar"

Position 1 -> number

userEntry[1]
=> 24
*/

/*
=========================================================
5. FIXED LENGTH
=========================================================
*/

const person1: [string, number] = [
  "Rahul",
  22,
];

console.log(person1);

/*
Tuple requires exactly
2 values.

---------------------------------------------------------

Invalid Examples

const person2: [string, number] = [];

Error:
Source has 0 elements
but target requires 2.

---------------------------------------------------------

const person3: [string, number] = [
  "Rahul"
];

Error:
Missing second value.

---------------------------------------------------------

const person4: [string, number] = [
  "Rahul",
  22,
  true
];

Error:
Extra element.
*/

/*
=========================================================
6. FIXED POSITION TYPES
=========================================================
*/

const employee: [
  string,
  number,
  boolean
] = [
  "Diwakar",
  24,
  true,
];

console.log(employee);

/*
Position 0 -> string

Position 1 -> number

Position 2 -> boolean
*/

/*
Valid:

[
  "Diwakar",
  24,
  true
]

---------------------------------------------------------

Invalid:

[
  24,
  "Diwakar",
  true
]

Wrong order.
*/

/*
=========================================================
7. TUPLE DESTRUCTURING
=========================================================
*/

const userData: [string, number] = [
  "Diwakar",
  24,
];

const [
  userName,
  userAge,
] = userData;

console.log(userName);
console.log(userAge);

/*
userName -> string

userAge -> number
*/

/*
=========================================================
8. READONLY TUPLES
=========================================================
*/

const point: readonly [
  number,
  number
] = [10, 20];

console.log(point);

/*
Not Allowed:

point[0] = 50;

Error:

Cannot assign because
tuple is readonly.
*/

/*
=========================================================
9. REAL WORLD EXAMPLES
=========================================================
*/

/*
Coordinates
*/

const location: [
  number,
  number
] = [
  19.076,
  72.8777,
];

/*
Latitude
Longitude
*/

/*
API Response
*/

const apiResponse: [
  number,
  string
] = [
  200,
  "Success",
];

/*
Status Code
Message
*/

/*
RGB Color
*/

const rgbColor: [
  number,
  number,
  number
] = [
  255,
  0,
  0,
];

/*
Red
Green
Blue
*/

/*
Database Row
*/

const dbRow: [
  string,
  number,
  boolean
] = [
  "Diwakar",
  24,
  true,
];

/*
=========================================================
10. INTERVIEW DEFINITIONS
=========================================================

Tuple

A Tuple is a special array
with fixed length and fixed
types at specific positions.

---------------------------------------------------------

Example:

[string, number]

Meaning:

Position 0 -> string

Position 1 -> number

---------------------------------------------------------

Tuple vs Array

Tuple:

[string, number]

Fixed order.

Fixed length.

---------------------------------------------------------

Array:

(string | number)[]

Flexible order.

Flexible length.

---------------------------------------------------------

Benefits

✔ Strong Type Safety

✔ Fixed Structure

✔ Coordinates

✔ API Responses

✔ Database Records

✔ Function Return Values

=========================================================
END OF NOTES
=========================================================
*/

export {};