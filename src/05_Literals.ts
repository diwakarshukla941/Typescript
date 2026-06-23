/*
=========================================================
LITERAL TYPES IN TYPESCRIPT
=========================================================

INDEX

1. What is a Literal Type?
2. String Literal Types
3. Union of Literal Types
4. Why Use Literal Types?
5. const vs let
6. Type Widening
7. Real World Examples
8. Interview Definitions

=========================================================
1. WHAT IS A LITERAL TYPE?
=========================================================

Definition:

A Literal Type is a type that
represents an exact value.

Examples:

"Left"

"Right"

"Up"

42

true

Instead of:

string

number

boolean

TypeScript remembers the
exact value.

=========================================================
2. STRING LITERAL TYPES
=========================================================
*/

type Direction =
  | "Left"
  | "Right"
  | "Up";

/*
Meaning:

Direction can only be:

"Left"

OR

"Right"

OR

"Up"
*/

function move(
  direction: Direction
) {
  console.log(direction);
}

move("Left");
move("Right");
move("Up");

/*
Valid

---------------------------------------------------------

move("Down");

Error

"Down" is not part of
Direction.
*/

/*
=========================================================
3. UNION OF LITERAL TYPES
=========================================================

Literal types become powerful
when combined using unions.

Example:
*/

type Status =
  | "pending"
  | "success"
  | "failed";

/*
Only these values are allowed.
*/

let paymentStatus:
Status = "pending";

paymentStatus = "success";

/*
Valid
*/

/*
paymentStatus = "loading";

Error
*/

/*
=========================================================
4. WHY USE LITERAL TYPES?
=========================================================

Without Literal Types:
*/

function moveBad(
  direction: string
) {

  console.log(direction);

}

moveBad("Left");

moveBad("abcdef");

/*
Both valid.

TypeScript cannot stop
invalid values.
*/

/*
With Literal Types:
*/

function moveSafe(
  direction: Direction
) {

  console.log(direction);

}

/*
Only allowed values
can be passed.
*/

/*
Benefits:

✔ Better autocomplete

✔ Better validation

✔ Fewer bugs

✔ Safer APIs

=========================================================
5. CONST VS LET
=========================================================
*/

const d1 = "Left";

/*
Type:

"Left"

NOT string

Reason:

const cannot change.

TypeScript keeps the
exact literal value.
*/

move(d1);

/*
Valid
*/

/*
=========================================================
WHY DOES THIS WORK?
=========================================================

const d1 = "Left";

TypeScript infers:

const d1: "Left"

Since:

"Left"

is part of:

Direction

move(d1)

is valid.
*/

/*
=========================================================
6. TYPE WIDENING
=========================================================
*/

let d2 = "Right";

/*
Type:

string

NOT

"Right"

Reason:

let can change later.
*/

d2 = "Anything";

/*
Valid

Therefore TypeScript
widens the type to:

string
*/

/*
This causes an error:
*/

// move(d2);

/*
Error:

Argument of type string
is not assignable to
type Direction.
*/

/*
TypeScript says:

"What if d2 becomes
something invalid later?"
*/

/*
=========================================================
HOW TO FIX LET?
=========================================================
*/

let d3: Direction =
  "Right";

move(d3);

/*
Valid

Reason:

d3 can only contain:

"Left"
"Right"
"Up"
*/

/*
d3 = "Down";

Error
*/

/*
=========================================================
7. REAL WORLD EXAMPLES
=========================================================
*/

/*
ROLES
*/

type Role =
  | "user"
  | "admin"
  | "manager";

let role: Role =
  "user";

/*
API STATUS
*/

type ApiStatus =
  | "loading"
  | "success"
  | "error";

/*
ORDER STATUS
*/

type OrderStatus =
  | "pending"
  | "processing"
  | "delivered";

/*
PAYMENT STATUS
*/

type PaymentStatus =
  | "pending"
  | "success"
  | "failed";

/*
=========================================================
8. INTERVIEW DEFINITIONS
=========================================================

LITERAL TYPE

A Literal Type represents
an exact value.

Example:

"Left"

42

true

---------------------------------------------------------

STRING LITERAL TYPE

A type containing exact
string values.

Example:

type Direction =
  | "Left"
  | "Right"
  | "Up";

---------------------------------------------------------

TYPE WIDENING

When TypeScript converts
a literal type into a
broader type.

Example:

const d = "Left";

Type:

"Left"

---------------------------------------------------------

let d = "Left";

Type:

string

---------------------------------------------------------

Benefits

✔ Better autocomplete

✔ Better validation

✔ Safer APIs

✔ Fewer runtime bugs

=========================================================
END OF NOTES
=========================================================
*/

export {};