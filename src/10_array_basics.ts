/*
=========================================================
ARRAY BASICS IN TYPESCRIPT
=========================================================

INDEX

1. What is an Array?
2. Array Type Syntax
3. T[] vs Array<T>
4. Number Arrays
5. String Arrays
6. Mixed Arrays (Array of Union)
7. Union of Arrays
8. Intersection in Arrays
9. Array Methods
10. Real World Examples
11. Interview Definitions

=========================================================
1. WHAT IS AN ARRAY?
=========================================================

Definition:

An Array is a collection of values
stored in a single variable.

Example:

[1, 2, 3]

["a", "b", "c"]

Arrays store multiple values
of the same or compatible types.

=========================================================
2. ARRAY TYPE SYNTAX
=========================================================

TypeScript supports
two array syntaxes.

Syntax 1:

T[]

Syntax 2:

Array<T>

Both are identical.

Example:

number[]

Array<number>

Both mean:

Array containing numbers.

=========================================================
3. T[] VS Array<T>
=========================================================
*/

const nums1: number[] =
  [1, 2, 3];

const nums2: Array<number> =
  [1, 2, 3];

/*
Both are exactly same.

Most developers prefer:

number[]

because it is shorter.

=========================================================
4. NUMBER ARRAYS
=========================================================
*/

const a11: number[] =
  [1, 2, 3];

/*
Type:

number[]

Meaning:

Every element must
be a number.

Valid:

[1, 2, 3]

[100, 200, 300]

Invalid:

[1, "hello"]

Reason:

"hello" is not number.
*/

/*
=========================================================
5. STRING ARRAYS
=========================================================
*/

const a22: Array<string> =
[
  "diwakar",
  "bhaskar"
];

/*
Type:

string[]

Meaning:

Every element must
be a string.

Valid:

["a", "b"]

["diwakar", "bhaskar"]

Invalid:

["a", 1]

Reason:

1 is not string.
*/

/*
=========================================================
6. MIXED ARRAYS
(ARRAY OF UNION)
=========================================================
*/

const mix:
(
  string | number
)[] =
[
  "1",
  2,
  "3",
  "diwakar"
];

/*
Read as:

Array of

(
 string
 OR
 number
)

Visual:

[
  "1",
   2,
  "3",
  "diwakar"
]

Every element can be:

✔ string

OR

✔ number

Valid:

["a", 1, "b", 2]

[1, 2, 3]

["a", "b"]

=========================================================
ARRAY OF UNION
=========================================================

(string | number)[]

Meaning:

Each item can be:

string
OR
number

Visual:

[
  "a",
   1,
  "b",
   2
]

=========================================================
7. UNION OF ARRAYS
=========================================================
*/

const unionArray:
string[]
|
number[] =
Math.random() > 0.5
  ? ["a", "b"]
  : [1, 2];

/*
Read as:

(
 string[]
)

OR

(
 number[]
)

Meaning:

The entire array
must be:

all strings

OR

all numbers

Valid:

["a", "b"]

Valid:

[1, 2]

Invalid:

["a", 1]

=========================================================
ARRAY OF UNION
VS
UNION OF ARRAYS
=========================================================

Array Of Union

(string | number)[]

Example:

["a", 1, "b", 2]

Mixed values allowed.

---------------------------------------------------------

Union Of Arrays

string[] | number[]

Example:

["a", "b"]

or

[1, 2]

Mixed values NOT allowed.

=========================================================
8. INTERSECTION IN ARRAYS
=========================================================
*/

type Impossible =
  string & number;

/*
Question:

Can a value be:

string
AND
number

at the same time?

Answer:

NO
*/

/*
TypeScript converts:

string & number

into:

never
*/

type ImpossibleType =
  string & number;

/*
Equivalent:

type ImpossibleType =
  never
*/

const eitherNumOrString:
(
  string & number
)[] = [];

/*
Actually becomes:

never[]

Meaning:

No valid value can exist.

Only empty array works.
*/

/*
Valid:

[]
*/

const impossible:
(
  string & number
)[] = [];

/*
Invalid:

["hello"]

[1]

["hello", 1]

Reason:

string & number
becomes never.
*/

/*
=========================================================
9. ARRAY METHODS
=========================================================
*/

const numbers =
  [1, 2, 3];

/*
push()
*/

numbers.push(4);

/*
Result:

[1,2,3,4]
*/

/*
pop()
*/

numbers.pop();

/*
map()
*/

const doubled =
  numbers.map(
    num => num * 2
  );

/*
filter()
*/

const even =
  numbers.filter(
    num => num % 2 === 0
  );

/*
=========================================================
10. REAL WORLD EXAMPLES
=========================================================
*/

/*
User Names
*/

const userNames:
string[] =
[
  "Diwakar",
  "Bhaskar"
];

/*
Product IDs
*/

const productIds:
number[] =
[
  101,
  102,
  103
];

/*
Mixed API Values
*/

const apiResponse:
(
  string | number
)[] =
[
  "success",
  200
];

/*
=========================================================
11. INTERVIEW DEFINITIONS
=========================================================

ARRAY

An array is a collection
of values stored under
a single variable.

---------------------------------------------------------

ARRAY TYPE

number[]

string[]

boolean[]

---------------------------------------------------------

GENERIC ARRAY

Array<number>

Array<string>

Equivalent to:

number[]

string[]

---------------------------------------------------------

ARRAY OF UNION

(string | number)[]

Meaning:

Each element can be
string or number.

---------------------------------------------------------

UNION OF ARRAYS

string[] | number[]

Meaning:

The entire array must be
all strings or all numbers.

---------------------------------------------------------

INTERSECTION ARRAY

(string & number)[]

string & number

becomes:

never

Therefore:

(string & number)[]

becomes:

never[]

Only empty arrays are valid.

=========================================================
END OF NOTES
=========================================================
*/