/*
=========================================================
PRIMITIVE TYPES IN TYPESCRIPT
=========================================================

INDEX

1. What are Primitive Types?
2. string
3. number
4. boolean
5. bigint
6. symbol
7. Function Parameters & Return Types
8. Primitive vs Object Types
9. Real World Examples
10. Interview Definitions

=========================================================
1. WHAT ARE PRIMITIVE TYPES?
=========================================================

Definition:

Primitive Types are the most basic
data types available in TypeScript
and JavaScript.

TypeScript Primitive Types:

✔ string
✔ number
✔ boolean
✔ bigint
✔ symbol
✔ null
✔ undefined

These types store a single value.

=========================================================
2. STRING
=========================================================
*/

let username: string =
  "diwakar";

/*
Type:

string

Used for:

✔ Names
✔ Emails
✔ Messages
✔ URLs
✔ Tokens
*/

console.log(
  username.toUpperCase()
);

/*
Output:

DIWAKAR
*/

console.log(
  username.length
);

console.log(
  username.toLowerCase()
);

/*
=========================================================
3. NUMBER
=========================================================
*/

let age: number = 23;

/*
Type:

number

Represents:

✔ Integers
✔ Decimals
✔ Negative Numbers
*/

const price: number =
  499.99;

const quantity: number =
  5;

console.log(price);
console.log(quantity);

/*
=========================================================
4. BOOLEAN
=========================================================
*/

let isCreator: boolean =
  false;

/*
Type:

boolean

Possible Values:

true
false
*/

const isAdmin: boolean =
  true;

console.log(isCreator);
console.log(isAdmin);

/*
=========================================================
5. BIGINT
=========================================================
*/

const big: bigint =
  2n ** 63n - 1n;

/*
Type:

bigint

Used for very large numbers.

JavaScript safe integer:

9007199254740991

Beyond that use bigint.
*/

const hugeNumber: bigint =
  999999999999999999999999n;

console.log(big);
console.log(hugeNumber);

/*
Cannot mix bigint
and number.
*/

const normalNumber = 10;

// big + normalNumber;

/*
Error:

Cannot mix bigint
and number.
*/

/*
=========================================================
6. SYMBOL
=========================================================
*/

const TOKEN: unique symbol =
  Symbol("TOKEN");

/*
Type:

unique symbol

A unique symbol represents a
completely unique identifier.

Every unique symbol has its own
distinct type.
*/

/*
---------------------------------------------------------
NORMAL SYMBOL
---------------------------------------------------------
*/

const s1: symbol =
  Symbol("id");

const s2: symbol =
  Symbol("id");

console.log(
  s1 === s2
);

/*
Output:

false

Reason:

Every Symbol() call creates
a completely new symbol.

Even though both use:

"id"

the resulting symbols
are different.
*/

/*
Visual:

Symbol("id")
      ↓
    Symbol #1

Symbol("id")
      ↓
    Symbol #2

Symbol #1 !== Symbol #2
*/

/*
---------------------------------------------------------
WHY NOT THIS?
---------------------------------------------------------

const s1 = Symbol("id");
const s2 = Symbol("id");

console.log(s1 === s2);

TypeScript Error:

This comparison appears to be
unintentional because the types
'typeof s1' and 'typeof s2'
have no overlap.

Reason:

TypeScript infers:

const s1: unique symbol
const s2: unique symbol

and knows they can never
be equal.

Therefore it warns you.
*/

/*
Real World Uses:

✔ Unique Object Keys

✔ Internal Framework IDs

✔ Hidden Metadata

✔ Library Internals
*/

/*
=========================================================
7. FUNCTION PARAMETERS
& RETURN TYPES
=========================================================
*/

function yearsToDay(
  years: number
): number {

  return years * 365;

}

console.log(
  yearsToDay(2)
);

/*
Input:

2

Output:

730
*/

/*
Without Explicit Return Type:

function yearsToDay(
  years:number
){
  return years * 365;
}

TypeScript infers:

number
*/

/*
=========================================================
8. PRIMITIVE VS OBJECT TYPES
=========================================================

PRIMITIVE

string

number

boolean

bigint

symbol

null

undefined

---------------------------------------------------------

OBJECT TYPES

object

array

function

class

date

custom objects
*/

const firstName:
string =
"Diwakar";

const user = {
  name: "Diwakar"
};

/*
firstName

Primitive

---------------------------------------------------------

user

Object
*/

/*
=========================================================
9. REAL WORLD EXAMPLES
=========================================================
*/

const userId: string =
"USR123";

const accountBalance:
number = 10000;

const isVerified:
boolean = true;

const transactionId:
bigint =
12345678901234567890n;

const API_KEY:
unique symbol =
Symbol("API_KEY");

/*
=========================================================
10. INTERVIEW DEFINITIONS
=========================================================

STRING

Represents textual data.

Example:

const name: string =
"Diwakar";

---------------------------------------------------------

NUMBER

Represents numeric values.

Example:

const age: number =
24;

---------------------------------------------------------

BOOLEAN

Represents true or false.

Example:

const isAdmin: boolean =
true;

---------------------------------------------------------

BIGINT

Represents very large integers
beyond Number.MAX_SAFE_INTEGER.

Example:

const value: bigint =
12345678901234567890n;

---------------------------------------------------------

SYMBOL

Represents a unique and immutable
identifier.

Example:

const id =
Symbol("id");

Two symbols created with the
same description are still
different values.

Symbol("id") !== Symbol("id")

---------------------------------------------------------

PRIMITIVE TYPES

The basic built-in types
provided by JavaScript and
TypeScript.

✔ string

✔ number

✔ boolean

✔ bigint

✔ symbol

✔ null

✔ undefined

=========================================================
END OF NOTES
=========================================================
*/

export {};